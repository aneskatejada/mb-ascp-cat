// BenchBright Learning original educational practice bank.
// Correct answer is a zero-based index in choices. Difficulty is provisional.
const QUESTION_BANK = [
  {
    "id": "BB-001",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Which DNA nucleotide pairs with guanine in a standard Watson–Crick base pair?",
    "choices": [
      "Adenine",
      "Cytosine",
      "Thymine",
      "Uracil"
    ],
    "answer": 1,
    "rationale": "Guanine forms three hydrogen bonds with cytosine. Adenine pairs with thymine in DNA; uracil replaces thymine in RNA."
  },
  {
    "id": "BB-002",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Transcription directly produces which type of molecule?",
    "choices": [
      "RNA from a DNA template",
      "Protein from an mRNA template",
      "DNA from an RNA template",
      "A lipid from a protein template"
    ],
    "answer": 0,
    "rationale": "RNA polymerase transcribes a DNA template into RNA. Translation, not transcription, makes a polypeptide."
  },
  {
    "id": "BB-003",
    "domain": "Molecular Foundations",
    "level": 2,
    "question": "During DNA synthesis, DNA polymerase adds a nucleotide to which end of the growing strand?",
    "choices": [
      "5′ phosphate end",
      "3′ hydroxyl end",
      "Either end with equal efficiency",
      "The nitrogenous base of the last nucleotide"
    ],
    "answer": 1,
    "rationale": "Polymerase extends the available 3′-OH, which is why new DNA is synthesized in the 5′→3′ direction."
  },
  {
    "id": "BB-004",
    "domain": "Molecular Foundations",
    "level": 2,
    "question": "What is the usual meaning of a codon in a protein-coding mRNA?",
    "choices": [
      "Two bases that define an intron",
      "Three bases specifying an amino acid or stop signal",
      "Four bases specifying a promoter",
      "One base specifying a protein"
    ],
    "answer": 1,
    "rationale": "A codon is a three-nucleotide unit in mRNA that corresponds to an amino acid or translation termination signal."
  },
  {
    "id": "BB-005",
    "domain": "Molecular Foundations",
    "level": 3,
    "question": "A coding-region substitution changes GAA to GAG; both encode glutamate. Which consequence best describes the variant?",
    "choices": [
      "Nonsense",
      "Frameshift",
      "Synonymous",
      "Splice-site loss"
    ],
    "answer": 2,
    "rationale": "A synonymous variant does not change the encoded amino acid. Its biological impact is not necessarily zero, but it is not a missense or nonsense substitution."
  },
  {
    "id": "BB-006",
    "domain": "Molecular Foundations",
    "level": 3,
    "question": "A deletion removes two nucleotides from the middle of a protein-coding exon. What is the most likely immediate effect?",
    "choices": [
      "A synonymous substitution",
      "A frameshift downstream of the deletion",
      "Deletion of exactly one amino acid",
      "No change because two is an even number"
    ],
    "answer": 1,
    "rationale": "Insertions or deletions not divisible by three shift the reading frame and usually alter downstream codons."
  },
  {
    "id": "BB-007",
    "domain": "Molecular Foundations",
    "level": 4,
    "question": "For a heterozygous germline SNV in a diploid region without copy-number change, what variant allele fraction is expected in an adequately sampled specimen?",
    "choices": [
      "About 1%",
      "About 25%",
      "About 50%",
      "About 100%"
    ],
    "answer": 2,
    "rationale": "One variant copy among two copies gives an expected allele fraction near 50%. Mapping, mosaicism, and technical biases can shift observed values."
  },
  {
    "id": "BB-008",
    "domain": "Molecular Foundations",
    "level": 4,
    "question": "A canonical donor splice-site variant disrupts an intron’s 5′ splice junction. Which RNA effect is plausible?",
    "choices": [
      "Abnormal intron retention or exon skipping",
      "Obligate increase in DNA copy number",
      "Conversion of every codon to a stop codon",
      "Loss of all promoters throughout the genome"
    ],
    "answer": 0,
    "rationale": "Splice junction disruption can alter pre-mRNA processing, including intron retention or exon skipping. Effects depend on the transcript and locus."
  },
  {
    "id": "BB-009",
    "domain": "Molecular Foundations",
    "level": 5,
    "question": "Two different pathogenic variants in the same autosomal recessive gene are found in a patient. Which finding most directly supports biallelic disease?",
    "choices": [
      "Both variants are on the same chromosome (cis)",
      "The variants are on opposite homologs (trans)",
      "One variant is synonymous and benign",
      "Both variants occur only in a tumor biopsy"
    ],
    "answer": 1,
    "rationale": "Variants in trans affect both copies of the gene; variants in cis may leave the other allele intact. Phase is crucial for recessive interpretation."
  },
  {
    "id": "BB-010",
    "domain": "Molecular Foundations",
    "level": 5,
    "question": "A mitochondrial DNA variant is present at 20% in blood and 70% in skeletal muscle. Which interpretation is best?",
    "choices": [
      "The two results must be laboratory errors",
      "Heteroplasmy can vary across tissues and affect phenotype",
      "All mtDNA variants follow simple Mendelian segregation",
      "Blood always gives the highest heteroplasmy"
    ],
    "answer": 1,
    "rationale": "Mitochondrial heteroplasmy can vary by tissue and through time, and disease expression may depend on tissue-specific thresholds."
  },
  {
    "id": "BB-011",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "Which reagent is primarily responsible for DNA strand synthesis during PCR?",
    "choices": [
      "DNA ligase",
      "Thermostable DNA polymerase",
      "Reverse transcriptase only",
      "Restriction endonuclease"
    ],
    "answer": 1,
    "rationale": "A thermostable DNA polymerase extends primers during PCR cycles. Reverse transcriptase is needed beforehand when the starting target is RNA."
  },
  {
    "id": "BB-012",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "In a conventional agarose gel, which DNA fragment generally migrates farther under the same run conditions?",
    "choices": [
      "The larger fragment",
      "The smaller fragment",
      "Both always migrate identically",
      "The fragment with more adenine regardless of size"
    ],
    "answer": 1,
    "rationale": "Smaller DNA fragments typically pass more easily through an agarose matrix and migrate farther than larger fragments."
  },
  {
    "id": "BB-013",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "What extra step is required before conventional PCR can amplify an RNA target?",
    "choices": [
      "Reverse transcription to cDNA",
      "Protein translation to peptide",
      "DNA methylation",
      "Restriction digestion of RNA into DNA"
    ],
    "answer": 0,
    "rationale": "Reverse transcriptase converts RNA into complementary DNA; the resulting cDNA can then be amplified by PCR."
  },
  {
    "id": "BB-014",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "For the same validated qPCR assay and comparable sample quality, a lower Cq/Ct generally indicates:",
    "choices": [
      "Less starting target",
      "More starting target",
      "No amplification",
      "An assay with zero efficiency"
    ],
    "answer": 1,
    "rationale": "A sample with more starting template typically crosses the fluorescence threshold earlier. Cq values must be interpreted using appropriate controls and assay context."
  },
  {
    "id": "BB-015",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "With approximately 100% qPCR amplification efficiency, a 3.3-cycle Cq difference corresponds to roughly what fold difference in starting target?",
    "choices": [
      "2-fold",
      "5-fold",
      "10-fold",
      "100-fold"
    ],
    "answer": 2,
    "rationale": "At 100% efficiency, target doubles each cycle; 2^3.32 ≈ 10, so a 3.3-cycle difference is about tenfold."
  },
  {
    "id": "BB-016",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "In high-quality Sanger sequencing of a diploid locus, overlapping peaks of two bases at one position most commonly suggest:",
    "choices": [
      "A heterozygous single-nucleotide variant",
      "A complete deletion of the entire chromosome",
      "A pure bacterial culture",
      "Failure to add sequencing primers in all reactions"
    ],
    "answer": 0,
    "rationale": "Two peaks at one site can represent a heterozygous base substitution. Trace quality and nearby artifacts still require review."
  },
  {
    "id": "BB-017",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A clinical laboratory needs to detect a low-frequency somatic SNV at approximately 3% variant allele fraction. Which approach is most suitable after assay validation?",
    "choices": [
      "Ordinary unvalidated Sanger sequencing",
      "Validated high-depth targeted NGS with appropriate sensitivity",
      "Karyotyping at 400-band resolution",
      "A protein electrophoresis gel alone"
    ],
    "answer": 1,
    "rationale": "Deep targeted NGS can detect low-VAF variants when analytical sensitivity and error characteristics are validated. Standard Sanger methods may miss variants at such low fractions."
  },
  {
    "id": "BB-018",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A multiplex PCR assay begins losing sensitivity for one target after an additional primer pair is introduced. What is a likely technical cause?",
    "choices": [
      "Primer competition or altered reaction efficiency",
      "RNA splicing in the patient",
      "Uniform increase in every target’s yield",
      "Loss of DNA’s negative charge"
    ],
    "answer": 0,
    "rationale": "Additional primers can compete for reaction resources, form dimers, or interfere with target-specific amplification. Multiplex assays require careful optimization."
  },
  {
    "id": "BB-019",
    "domain": "Methods & Instrumentation",
    "level": 5,
    "question": "An NGS specimen yields 160 quality-filtered reads at a variant position, including 16 alternate reads. What is the observed variant allele fraction?",
    "choices": [
      "1%",
      "5%",
      "10%",
      "20%"
    ],
    "answer": 2,
    "rationale": "Observed VAF = alternate reads ÷ total reads = 16 ÷ 160 = 10%. Interpretation also requires assay quality thresholds and local context."
  },
  {
    "id": "BB-020",
    "domain": "Methods & Instrumentation",
    "level": 5,
    "question": "A sequence variant lies beneath a PCR primer-binding site on one allele. What artifact can result?",
    "choices": [
      "Preferential amplification of the other allele (allele dropout)",
      "Guaranteed increase in copy-number calls",
      "Automatic detection of every structural variant",
      "Loss of all reverse-transcription products"
    ],
    "answer": 0,
    "rationale": "Impaired primer binding can prevent amplification of one allele, causing apparent homozygosity or false-negative variant results."
  },
  {
    "id": "BB-021",
    "domain": "Clinical Interpretation",
    "level": 1,
    "question": "A variant found in constitutional (germline) DNA is generally:",
    "choices": [
      "Restricted to a single tumor clone",
      "Present in many tissues derived from the individual",
      "Always pathogenic",
      "Impossible to transmit to offspring"
    ],
    "answer": 1,
    "rationale": "A germline variant generally exists across many tissues and may be heritable. Whether it is pathogenic requires separate interpretation."
  },
  {
    "id": "BB-022",
    "domain": "Clinical Interpretation",
    "level": 1,
    "question": "What does a variant of uncertain significance (VUS) classification mean?",
    "choices": [
      "The variant is confirmed benign",
      "The variant is confirmed disease-causing",
      "Available evidence does not establish a benign or pathogenic classification",
      "The sequencing run has no data"
    ],
    "answer": 2,
    "rationale": "A VUS has insufficient or conflicting evidence for definitive classification. It should not be treated as a confirmed pathogenic finding solely because it is detected."
  },
  {
    "id": "BB-023",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "A tumor-only NGS panel detects a variant with a VAF of about 50%. Can the laboratory conclude it is germline based on this alone?",
    "choices": [
      "Yes, all 50% VAF tumor variants are germline",
      "No, tumor purity and copy number can affect VAF; normal tissue testing may be needed",
      "Yes, if the variant is in an oncogene",
      "No, all tumor variants are somatic"
    ],
    "answer": 1,
    "rationale": "Tumor VAF does not independently establish variant origin. Matched normal testing and interpretation of tumor purity/copy number can help distinguish germline from somatic findings."
  },
  {
    "id": "BB-024",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "For serial BCR::ABL1 monitoring by a validated quantitative assay, a marked decrease in normalized transcript level most directly suggests:",
    "choices": [
      "An increasing measured molecular disease burden",
      "A decreasing measured molecular disease burden",
      "Failure of all positive controls",
      "A constitutional chromosome count of 46"
    ],
    "answer": 1,
    "rationale": "Declining normalized BCR::ABL1 transcript levels generally indicate a lower measured molecular burden, provided quality criteria are met."
  },
  {
    "id": "BB-025",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A blood-based NGS assay finds a potential myeloid-driver mutation in an older patient. What additional biological possibility should be considered?",
    "choices": [
      "Clonal hematopoiesis",
      "Obligate mitochondrial inheritance",
      "A universal bacterial contaminant",
      "A synonymous codon in every cell"
    ],
    "answer": 0,
    "rationale": "Age-related clonal hematopoiesis can contribute blood-derived somatic variants and confound interpretation in some testing contexts."
  },
  {
    "id": "BB-026",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A tumor contains a pathogenic variant detected at 8% VAF using a validated assay. Which statement is most appropriate?",
    "choices": [
      "The low VAF proves the result is an error",
      "The result may reflect subclonality, sample purity, or copy-number context",
      "All pathogenic variants must occur at 50% VAF",
      "This is necessarily a germline heterozygote"
    ],
    "answer": 1,
    "rationale": "Somatic VAF depends on clone fraction, tumor purity, copy number, and other factors. A validated low-VAF result should not be dismissed simply because it is below 50%."
  },
  {
    "id": "BB-027",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "Which result is most likely to help confirm whether a tumor-detected variant is inherited rather than tumor-acquired?",
    "choices": [
      "Sequencing an appropriate non-tumor sample",
      "Only re-reviewing the tumor’s H&E slide",
      "Comparing the variant to the qPCR melt curve alone",
      "Measuring tumor protein concentration"
    ],
    "answer": 0,
    "rationale": "Testing a suitable normal specimen helps assess germline status. Specimen choice matters because blood may be affected by clonal hematopoiesis in some patients."
  },
  {
    "id": "BB-028",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A DNA-only targeted panel is negative for a suspected expressed gene fusion. Which follow-up assay is particularly useful?",
    "choices": [
      "Validated RNA-based fusion testing",
      "Serum electrolyte measurement",
      "Routine gram staining",
      "Hemoglobin electrophoresis"
    ],
    "answer": 0,
    "rationale": "RNA-based fusion assays can interrogate expressed chimeric transcripts and may detect rearrangements missed by a particular DNA panel’s design."
  },
  {
    "id": "BB-029",
    "domain": "Clinical Interpretation",
    "level": 5,
    "question": "A patient with advanced cancer has a negative circulating tumor DNA result for a known tissue mutation. Which conclusion is defensible?",
    "choices": [
      "The mutation has definitely disappeared from the tumor",
      "A negative plasma result does not exclude the tissue mutation because shedding and sensitivity vary",
      "Plasma results always supersede tissue sequencing",
      "The assay must have detected 100% of tumor clones"
    ],
    "answer": 1,
    "rationale": "Low tumor DNA shedding, sampling, and assay sensitivity can cause negative plasma results despite a tissue-positive mutation."
  },
  {
    "id": "BB-030",
    "domain": "Clinical Interpretation",
    "level": 5,
    "question": "Two tumor specimens have the same true fraction of mutated cancer cells, but different normal-cell contamination and local copy number. How should their observed VAFs be compared?",
    "choices": [
      "VAFs must be identical",
      "VAF alone may differ; tumor purity and copy number must be considered",
      "The specimen with lower VAF has no variant",
      "Read depth has no relevance in either specimen"
    ],
    "answer": 1,
    "rationale": "Normal-cell admixture and allele-specific copy number can alter observed VAF. VAF is not a direct measure of cancer-cell fraction without appropriate modeling."
  },
  {
    "id": "BB-031",
    "domain": "Quality & Laboratory Practice",
    "level": 1,
    "question": "In a PCR run, the no-template control unexpectedly amplifies the assay target. What is the primary concern?",
    "choices": [
      "Contamination affecting test validity",
      "Improved analytical sensitivity",
      "A guaranteed true patient positive",
      "Failure of thermal cycling to occur"
    ],
    "answer": 0,
    "rationale": "Target amplification in a no-template control suggests reagent or environmental contamination. The run must be evaluated under the laboratory’s corrective-action procedure."
  },
  {
    "id": "BB-032",
    "domain": "Quality & Laboratory Practice",
    "level": 1,
    "question": "Why is a known positive control included in a molecular assay run?",
    "choices": [
      "To establish the patient’s genotype",
      "To demonstrate that the assay can detect its target under the run conditions",
      "To replace the negative control",
      "To prove all sample labels are correct"
    ],
    "answer": 1,
    "rationale": "A positive control verifies expected detection functionality. It does not verify patient identity or eliminate the need for other controls."
  },
  {
    "id": "BB-033",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "A patient sample and its co-amplified internal control both fail to amplify, while run controls pass. What is the best initial concern?",
    "choices": [
      "Possible extraction failure or amplification inhibition in that specimen",
      "Definitive evidence the target is absent",
      "Guaranteed patient specimen contamination",
      "A positive target result"
    ],
    "answer": 0,
    "rationale": "Failure of a specimen’s internal control suggests inhibition or extraction/sample failure; a target-negative result may not be interpretable."
  },
  {
    "id": "BB-034",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "Which anticoagulant is often avoided in PCR-based testing because it can inhibit amplification?",
    "choices": [
      "Heparin",
      "EDTA",
      "Sodium citrate in all circumstances",
      "No anticoagulant can affect PCR"
    ],
    "answer": 0,
    "rationale": "Heparin can inhibit PCR and may make some molecular specimens unsuitable. Use the specimen type validated for the assay."
  },
  {
    "id": "BB-035",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "In molecular assay validation, analytical limit of detection (LoD) commonly refers to:",
    "choices": [
      "The lowest analyte level detected with a specified probability under defined conditions",
      "The highest number of patient samples allowed per run",
      "The number of genes in the human genome",
      "The percentage of samples that are clinically positive"
    ],
    "answer": 0,
    "rationale": "LoD is tied to reliable detection at a defined concentration, often evaluated near a prespecified detection probability such as 95%."
  },
  {
    "id": "BB-036",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "An amplification curve is atypical and one replicate is negative while another is weakly positive near the LoD. What is the best next step?",
    "choices": [
      "Select whichever replicate matches the expected diagnosis",
      "Apply the validated repeat and discordance-resolution procedure",
      "Report positive without reviewing controls",
      "Delete the negative data permanently"
    ],
    "answer": 1,
    "rationale": "Near-LoD results can be stochastic. Laboratories follow predefined repeat criteria, QC review, and reporting rules rather than selectively choosing a desired answer."
  },
  {
    "id": "BB-037",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A new reagent lot is introduced for a validated molecular assay. What is the most appropriate practice?",
    "choices": [
      "Use immediately without documentation",
      "Perform and document required lot-to-lot verification before routine use",
      "Replace patient controls with water",
      "Change reporting thresholds without assessment"
    ],
    "answer": 1,
    "rationale": "Reagent changes can affect assay performance, so laboratories verify new lots according to their documented quality procedures."
  },
  {
    "id": "BB-038",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A qPCR standard curve shows a slope of approximately −3.32. Assuming appropriate curve quality, what amplification efficiency does this suggest?",
    "choices": [
      "About 0%",
      "About 50%",
      "About 100%",
      "About 200%"
    ],
    "answer": 2,
    "rationale": "Efficiency = (10^(−1/slope) − 1) × 100%. A slope near −3.32 corresponds to approximately 100% efficiency."
  },
  {
    "id": "BB-039",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "A validated assay’s inhibition control consistently fails only in specimens collected in a particular tube type. What is the strongest investigation?",
    "choices": [
      "Assess matrix or additive interference and evaluate specimens against collection requirements",
      "Increase patient result values until the control passes",
      "Assume all collected specimens are truly target negative",
      "Disable the inhibition-control rule"
    ],
    "answer": 0,
    "rationale": "A collection-tube additive or specimen matrix can inhibit molecular methods. Investigate preanalytical interference and specimen suitability before reporting."
  },
  {
    "id": "BB-040",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "Two patient DNA samples have nearly identical target variant profiles, but different validated identity-marker profiles. What is the most appropriate response?",
    "choices": [
      "Ignore the identity markers because target variants match",
      "Treat the discordance as a potential specimen identity or handling error and investigate before release",
      "Average the two identities",
      "Assign the result to whichever name appears first alphabetically"
    ],
    "answer": 1,
    "rationale": "Identity-marker discordance warrants investigation for mislabeling, mix-up, or contamination and appropriate corrective action before result release."
  }
];
