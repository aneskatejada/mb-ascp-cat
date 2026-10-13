/* BenchBright Learning — adaptive practice exam.
 * Rasch (1PL) Bayesian expected a posteriori (EAP) estimator.
 * Difficulty parameters are seeded instructional labels, NOT calibrated.
 * This prototype is NOT a validated CAT or a predictor of ASCP performance.
 */
(() => {
  'use strict';
  const MIN_ITEMS = 100;
  const MAX_ITEMS = 100;
  const TARGET_SD = 0.52;
  const B_BY_LEVEL = {1:-1.9,2:-0.95,3:0,4:0.95,5:1.9};
  const DOMAINS = ['Molecular Foundations','Methods & Instrumentation','Clinical Interpretation','Quality & Laboratory Practice'];
  const $ = (id) => document.getElementById(id);
  let state = null;
  let timerHandle = null;
  $('year').textContent = new Date().getFullYear();

  function show(screenId){
    for (const id of ['intro-screen','exam-screen','result-screen']) $(id).classList.toggle('hidden',id!==screenId);
    window.scrollTo({top:0,behavior:'instant'});
  }
  function getItem(id){return QUESTION_BANK.find(item=>item.id===id);}
  function sigmoid(x){return 1/(1+Math.exp(-x));}
  // A normal N(0,1) prior regularizes early estimates and avoids infinite scores.
  function estimate(responses){
    const xs=[];
    const logw=[];
    for(let j=0;j<=160;j++){
      const theta=-4+j*0.05;
      let lp=-0.5*theta*theta;
      for(const response of responses){
        const item=getItem(response.id);
        const p=Math.min(1-1e-9,Math.max(1e-9,sigmoid(theta-B_BY_LEVEL[item.level])));
        lp+=response.correct?Math.log(p):Math.log(1-p);
      }
      xs.push(theta);logw.push(lp);
    }
    const m=Math.max(...logw);
    const ws=logw.map(x=>Math.exp(x-m));
    const sum=ws.reduce((a,b)=>a+b,0);
    const mean=xs.reduce((acc,x,i)=>acc+x*ws[i],0)/sum;
    const variance=xs.reduce((acc,x,i)=>acc+(x-mean)**2*ws[i],0)/sum;
    const sd=Math.sqrt(variance);
    let cdf=0;let low=xs[0];let high=xs[xs.length-1];let foundLow=false;
    for(let j=0;j<xs.length;j++){
      cdf+=ws[j]/sum;
      if(cdf>=0.05&&!foundLow){low=xs[j];foundLow=true;}
      if(cdf>=0.95){high=xs[j];break;}
    }
    return {mean,sd,low,high};
  }
  function pickNextItem(responses){
    const used=new Set(responses.map(r=>r.id));
    const candidates=QUESTION_BANK.filter(item=>!used.has(item.id));
    if(!candidates.length) return null;
    const counts=Object.fromEntries(DOMAINS.map(name=>[name,0]));
    for(const response of responses) counts[getItem(response.id).domain]++;
    const availableDomains=DOMAINS.filter(domain=>candidates.some(item=>item.domain===domain));
    const minCount=Math.min(...availableDomains.map(domain=>counts[domain]));
    const balanced=candidates.filter(item=>counts[item.domain]===minCount);
    const theta=estimate(responses).mean;
    // Select near θ (maximum Fisher information) with small tie-breaking jitter.
    const ranked=balanced.map(item=>{
      const p=sigmoid(theta-B_BY_LEVEL[item.level]);
      return {item,score:p*(1-p)+Math.random()*0.018};
    }).sort((a,b)=>b.score-a.score);
    return ranked[0].item;
  }
  function shuffledChoices(item){
    const choices=item.choices.map((label,index)=>({label,index}));
    for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}
    return choices;
  }
  function timeString(ms){
    const sec=Math.max(0,Math.floor(ms/1000));
    return `${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`;
  }
  function startTimer(){
    if(timerHandle) clearInterval(timerHandle);
    timerHandle=setInterval(()=>{
      if(state&&!state.done) $('timer-value').textContent=timeString(Date.now()-state.startedAt);
    },1000);
  }
  function begin(){
    state={startedAt:Date.now(),startedISO:new Date().toISOString(),responses:[],current:null,choiceOrder:[],chosen:null,done:false};
    state.current=pickNextItem([]);
    state.choiceOrder=shuffledChoices(state.current);
    show('exam-screen');startTimer();renderQuestion();
  }
  function renderQuestion(){
    const item=state.current;
    $('question-count').textContent=`QUESTION ${state.responses.length+1} · UP TO ${MAX_ITEMS}`;
    $('progress-track').setAttribute('aria-valuenow',String(state.responses.length));
    $('progress-fill').style.width=`${state.responses.length/MAX_ITEMS*100}%`;
    $('domain-label').textContent=item.domain;
    $('question-id').textContent=item.id;
    $('question-heading').textContent=item.question;
    $('difficulty-tag').textContent='Adaptive question'; // Hide explicit item difficulty during testing.
    $('answer-hint').textContent='Choose the single best answer.';
    $('submit-button').disabled=true;
    const field=$('choices');field.replaceChildren();
    state.choiceOrder.forEach((opt,displayIndex)=>{
      const label=document.createElement('label');label.className='choice';
      const input=document.createElement('input');input.type='radio';input.name='answer';input.value=String(opt.index);input.required=true;
      const letter=document.createElement('span');letter.className='choice-letter';letter.textContent='ABCD'[displayIndex];
      const text=document.createElement('span');text.className='choice-text';text.textContent=opt.label;
      label.append(input,letter,text);
      input.addEventListener('change',()=>{
        state.chosen=opt.index;
        for(const other of field.querySelectorAll('.choice')) other.classList.remove('selected');
        label.classList.add('selected');$('submit-button').disabled=false;
      });
      field.append(label);
    });
    state.chosen=null;
  }
  function submitAnswer(event){
    event.preventDefault();
    if(state===null||state.done||state.chosen===null) return;
    const item=state.current;
    state.responses.push({id:item.id,chosen:state.chosen,correct:state.chosen===item.answer});
    const stats=estimate(state.responses);
    const enough=state.responses.length>=MIN_ITEMS;
    const stop=(enough&&stats.sd<=TARGET_SD)||state.responses.length>=MAX_ITEMS||state.responses.length>=QUESTION_BANK.length;
    if(stop){finish();return;}
    state.current=pickNextItem(state.responses);
    if(!state.current){finish();return;}
    state.choiceOrder=shuffledChoices(state.current);
    renderQuestion();window.scrollTo({top:0,behavior:'smooth'});
  }
  function formatTheta(n){return `${n>=0?'+':''}${n.toFixed(2)}`;}
  function percentOfScale(n){return Math.min(100,Math.max(0,((n+4)/8)*100));}
  function formatPercent(n,d){return d?Math.round(100*n/d)+'%':'—';}
  function addTextElement(tag,className,value,parent){
    const el=document.createElement(tag);if(className)el.className=className;el.textContent=value;parent.append(el);return el;
  }
  function finish(){
    state.done=true;clearInterval(timerHandle);
    const responses=state.responses;
    const stats=estimate(responses);
    const correct=responses.filter(r=>r.correct).length;
    $('result-total').textContent=responses.length;
    $('result-accuracy').textContent=`${formatPercent(correct,responses.length)}`;
    $('result-theta').textContent=formatTheta(stats.mean);
    $('result-sem').textContent=stats.sd.toFixed(2);
    let interpretation='Your answers were most consistent with questions near the middle of this provisional difficulty scale.';
    if(stats.mean>0.65) interpretation='Your answers were most consistent with relatively challenging questions in this provisional item bank.';
    if(stats.mean< -0.65) interpretation='Your answers suggest reviewing foundational topics before progressing to harder items in this provisional bank.';
    $('result-interpretation').textContent=interpretation+' The estimate uses all responses, not just percent correct.';
    $('ability-marker').style.left=`calc(${percentOfScale(stats.mean)}% - 2px)`;
    $('ability-interval').style.left=`${percentOfScale(stats.low)}%`;
    $('ability-interval').style.width=`${percentOfScale(stats.high)-percentOfScale(stats.low)}%`;
    $('interval-text').textContent=`Approximate 90% posterior credible interval: θ ${formatTheta(stats.low)} to ${formatTheta(stats.high)}. The scale is anchored only to provisional question difficulties (θ=0 is the middle of this item bank); it is not a national reference group or ASCP pass/fail scale.`;
    const topics=$('topic-results');topics.replaceChildren();
    for(const domain of DOMAINS){
      const rs=responses.filter(r=>getItem(r.id).domain===domain);
      const hits=rs.filter(r=>r.correct).length;
      const row=addTextElement('div','topic-row','',topics);
      addTextElement('div','topic-name',domain,row);
      const track=addTextElement('div','topic-track','',row);
      const fill=addTextElement('div','topic-fill','',track);fill.style.width=rs.length?`${100*hits/rs.length}%`:'0%';
      addTextElement('div','topic-score',`${hits}/${rs.length} correct`,row);
    }
    const list=$('review-list');list.replaceChildren();
    responses.forEach((response,index)=>{
      const item=getItem(response.id);
      const block=addTextElement('article','review-item','',list);
      const head=addTextElement('div','review-meta','',block);
      addTextElement('span','',`Q${index+1} · ${item.domain} · Level ${item.level}`,head);
      addTextElement('span',`review-status ${response.correct?'good':'bad'}`,response.correct?'✓ Correct':'✕ Incorrect',head);
      addTextElement('div','review-question',item.question,block);
      addTextElement('div','review-answer',`Your answer: ${item.choices[response.chosen]}`,block);
      addTextElement('div','review-answer',`Correct answer: ${item.choices[item.answer]}`,block);
      addTextElement('div','rationale',item.rationale,block);
    });
    show('result-screen');
  }
  function downloadResults(){
    if(!state||!state.done)return;
    const stats=estimate(state.responses);
    const file={source:'BenchBright Learning MB(ASCP) independent practice exam',disclaimer:'Provisional, uncalibrated educational CAT. Not an official ASCP score.',startedAt:state.startedISO,completedAt:new Date().toISOString(),timeElapsed:timeString(Date.now()-state.startedAt),itemCount:state.responses.length,numberCorrect:state.responses.filter(r=>r.correct).length,theta:Number(stats.mean.toFixed(3)),posteriorSD:Number(stats.sd.toFixed(3)),credibleInterval90:[Number(stats.low.toFixed(2)),Number(stats.high.toFixed(2))],responses:state.responses.map((r,i)=>({number:i+1,id:r.id,domain:getItem(r.id).domain,level:getItem(r.id).level,question:getItem(r.id).question,selected:getItem(r.id).choices[r.chosen],correctAnswer:getItem(r.id).choices[getItem(r.id).answer],correct:r.correct,rationale:getItem(r.id).rationale}))};
    const blob=new Blob([JSON.stringify(file,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='BenchBright-MB-CAT-results.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  // Expose a narrow, read-only testing API for automated QA.
  if(location.search.includes('bb_test=1')) window.BBCAT_TEST={estimate,pickNextItem,B_BY_LEVEL,get bank(){return QUESTION_BANK;}};
  $('start-button').addEventListener('click',begin);
  $('answer-form').addEventListener('submit',submitAnswer);
  $('download-button').addEventListener('click',downloadResults);
  $('print-button').addEventListener('click',()=>window.print());
  $('restart-button').addEventListener('click',begin);
})();
