// BenchBright Learning — instructor-generated bank.
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
  },
  {
    "id": "BB-A-001",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Which chemical group provides the growing end for DNA polymerase extension?",
    "choices": [
      "5' phosphate of the new strand",
      "3' hydroxyl of the primer",
      "Nitrogen at position 1 of the base",
      "2' hydroxyl of deoxyribose"
    ],
    "answer": 1,
    "rationale": "Polymerase adds incoming dNTPs to a primer's free 3'-OH. A 5' phosphate is not the extension site; base nitrogen is not the backbone linkage; DNA lacks a 2'-OH."
  },
  {
    "id": "BB-A-002",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A PCR mix requires 2.0 mM MgCl2 final concentration in 25 microliters. Stock MgCl2 is 25 mM. How much stock is needed?",
    "choices": [
      "1.0 microliter",
      "2.0 microliters",
      "0.2 microliters",
      "5.0 microliters"
    ],
    "answer": 1,
    "rationale": "C1V1=C2V2 gives V1=(2.0 x 25)/25=2.0 microliters. The other amounts produce 0.2, 1.0, and 5.0 mM, respectively."
  },
  {
    "id": "BB-A-003",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A technologist notices an unsecured printout containing identifiable genetic results. Which action aligns with confidentiality requirements?",
    "choices": [
      "Secure the report and follow the laboratory's privacy incident procedure",
      "Share it with anyone curious about the result",
      "Leave it in a public hallway",
      "Post an image to request advice"
    ],
    "answer": 0,
    "rationale": "Identifiable genetic results must be protected and incidents handled under policy. Public sharing or unattended reports violate confidentiality practices."
  },
  {
    "id": "BB-A-004",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "What is the main role of uracil-N-glycosylase in a dUTP-based PCR carryover-control system?",
    "choices": [
      "Repair all patient DNA mutations",
      "Destroy previous uracil-containing amplicons before new amplification",
      "Reverse-transcribe viral RNA",
      "Increase primer melting temperature"
    ],
    "answer": 1,
    "rationale": "UNG removes uracil from dU-containing carryover amplicons, facilitating their destruction. It is not reverse transcriptase, a universal DNA repair system, or a primer modifier."
  },
  {
    "id": "BB-A-005",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "For broad bacterial identification from an isolate, which molecular target is commonly used because it contains conserved and variable regions?",
    "choices": [
      "Human beta-globin promoter",
      "ABO protein sequence",
      "16S rRNA gene",
      "Telomerase protein alone"
    ],
    "answer": 2,
    "rationale": "Bacterial 16S rRNA genes contain conserved primer sites and variable regions for identification. Human gene regions or telomerase protein are not broad bacterial barcodes."
  },
  {
    "id": "BB-A-006",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A molecular assay finds an NPM1 mutation in acute myeloid leukemia. Why is the result clinically useful?",
    "choices": [
      "It replaces all morphologic and clinical evaluations",
      "It proves the specimen is RNA-free",
      "It can aid classification and molecular measurable residual disease monitoring in appropriate settings",
      "It is a universal marker for every solid tumor"
    ],
    "answer": 2,
    "rationale": "NPM1 can have classification and disease-monitoring relevance in AML. It is not universal, does not assess RNA purity, and complements other findings."
  },
  {
    "id": "BB-A-007",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "An autosomal recessive disorder affects a child whose two parents are unaffected carriers. What is the recurrence risk for an affected child in each pregnancy?",
    "choices": [
      "0%",
      "25%",
      "75%",
      "50%"
    ],
    "answer": 1,
    "rationale": "For two heterozygous carriers, one of four genotype combinations is affected, giving 25% per pregnancy. The other percentages describe different inheritance scenarios."
  },
  {
    "id": "BB-A-008",
    "domain": "Clinical Interpretation",
    "level": 5,
    "question": "A tumor biopsy has only 5% neoplastic cells. Why might a somatic sequencing assay miss a heterozygous tumor mutation?",
    "choices": [
      "All sequencing platforms amplify only normal cells",
      "A heterozygous variant always has 50% allele fraction in mixed tissue",
      "Tumor DNA contains no nucleotides",
      "Low tumor fraction can place the variant below the validated detection threshold"
    ],
    "answer": 3,
    "rationale": "Normal-cell dilution can lower somatic variant allele fraction well below 50%. Sequencing sensitivity and assay thresholds matter; the other claims are false."
  },
  {
    "id": "BB-A-009",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A laboratory must prepare 200 microliters of a 1:20 dilution of DNA in buffer. How much original DNA should be used?",
    "choices": [
      "100 microliters",
      "20 microliters",
      "10 microliters",
      "1 microliter"
    ],
    "answer": 2,
    "rationale": "A 1:20 final dilution has one part sample in 20 total parts: 200/20=10 microliters, plus 190 microliters buffer. Other volumes yield different dilutions."
  },
  {
    "id": "BB-A-010",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Sodium bisulfite treatment is used to study CpG methylation. What happens to unmethylated cytosines under appropriate treatment?",
    "choices": [
      "They are converted to uracil",
      "They become guanine",
      "They become 5-methylcytosine",
      "They are ligated to adapters"
    ],
    "answer": 0,
    "rationale": "Bisulfite converts unmethylated cytosines to uracil, read as thymine after PCR. Guanine substitution, methylation, and ligation are separate processes."
  },
  {
    "id": "BB-A-011",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A colorectal tumor shows loss of DNA mismatch-repair proteins and high microsatellite instability. What is a plausible molecular explanation?",
    "choices": [
      "Universal bacterial contamination",
      "Loss of all RNA transcription",
      "Mismatch-repair deficiency",
      "Normal chromosomal replication proof"
    ],
    "answer": 2,
    "rationale": "Mismatch-repair defects can yield microsatellite instability. The pattern is not evidence of normal repair, contamination, or total transcription loss."
  },
  {
    "id": "BB-A-012",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A laboratory wants an enzyme that cuts double-stranded DNA at a specific recognition sequence. Which is appropriate?",
    "choices": [
      "DNA polymerase",
      "Restriction endonuclease",
      "RNA polymerase",
      "Alkaline phosphatase"
    ],
    "answer": 1,
    "rationale": "Restriction endonucleases recognize defined DNA sequences and cleave DNA. Polymerases synthesize nucleic acids; alkaline phosphatase removes phosphate groups rather than making sequence-specific cuts."
  },
  {
    "id": "BB-A-013",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "Why is using several independent STR loci preferable to a single STR locus for identification?",
    "choices": [
      "One locus always distinguishes every person",
      "Multiple loci determine mitochondrial protein folding",
      "Combined genotypes increase discrimination between unrelated people",
      "STRs never mutate"
    ],
    "answer": 2,
    "rationale": "Multi-locus profiles improve discrimination; one locus may be shared by many people. Mutation is possible, and STR typing does not measure folding."
  },
  {
    "id": "BB-A-014",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Why is capillary electrophoresis especially useful for STR analysis?",
    "choices": [
      "It determines protein tertiary structure",
      "It measures RNA transcription rates directly",
      "It eliminates the need for PCR",
      "It can resolve fluorescently labeled DNA fragments differing by small size increments"
    ],
    "answer": 3,
    "rationale": "Capillary electrophoresis offers high-resolution fluorescent fragment sizing. STR typing generally still uses PCR; the technique does not directly measure protein folding or transcription."
  },
  {
    "id": "BB-A-015",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "Which is the best description of digital PCR quantification?",
    "choices": [
      "It counts intact cells through light microscopy",
      "It requires Sanger electropherograms for every partition",
      "It relies solely on a standard curve from gel band intensity",
      "It estimates target copies from positive and negative partitions using statistical correction"
    ],
    "answer": 3,
    "rationale": "Digital PCR partitions molecules and estimates copy number from positive fractions, often using Poisson correction. Gel intensity, cell counts, and Sanger traces are different measurements."
  },
  {
    "id": "BB-A-016",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "During silica-column nucleic acid purification, why is ethanol often added before binding?",
    "choices": [
      "It improves binding of nucleic acids to silica under appropriate salt conditions",
      "It ligates fragmented DNA",
      "It serves as a PCR primer",
      "It hydrolyzes DNA to nucleotides"
    ],
    "answer": 0,
    "rationale": "Alcohol plus suitable salts promotes adsorption of nucleic acids to silica. Ethanol does not ligate, intentionally hydrolyze, or prime DNA."
  },
  {
    "id": "BB-A-017",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "In pyrosequencing, what event is detected indirectly after a nucleotide is incorporated?",
    "choices": [
      "Cleavage of fluorescent antibody",
      "Release of pyrophosphate",
      "Release of an intact ribosome",
      "Loss of all polymerase molecules"
    ],
    "answer": 1,
    "rationale": "Pyrosequencing detects light generated through reactions linked to pyrophosphate release upon incorporation. It is not ribosomal, antibody, or polymerase-depletion detection."
  },
  {
    "id": "BB-A-018",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "Two linear DNA fragments are 250 bp and 1,200 bp. In standard agarose electrophoresis, which travels farther from the wells?",
    "choices": [
      "The 250-bp fragment",
      "Both migrate the same distance",
      "The 1,200-bp fragment",
      "Neither moves in an electric field"
    ],
    "answer": 0,
    "rationale": "Smaller linear DNA fragments typically migrate farther through a gel matrix. Larger fragments experience more sieving resistance; both are charged and can move."
  },
  {
    "id": "BB-A-019",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "An extraction internal control fails to amplify in a patient sample, but the no-template control is negative. What should be considered first?",
    "choices": [
      "Proof the positive control is contaminated",
      "PCR inhibition or extraction failure in that sample",
      "A harmless result that needs no follow-up",
      "Definite target absence"
    ],
    "answer": 1,
    "rationale": "Failed internal control can indicate inhibition, poor extraction, or reaction failure and compromises a negative target interpretation. The negative NTC does not confirm sample validity."
  },
  {
    "id": "BB-A-020",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A qPCR assay tests a patient specimen with target-negative signal, a passing sample extraction control, and passing positive and negative run controls. What is the strongest supported conclusion?",
    "choices": [
      "The assay is 100% sensitive",
      "The target gene is absent from every tissue",
      "The patient has never had the disease",
      "Target was not detected within the assay's validated performance and specimen limitations"
    ],
    "answer": 3,
    "rationale": "The appropriate report is not detected within assay limits. Controls establish analytical validity, not lifetime disease status or absolute sensitivity."
  },
  {
    "id": "BB-A-021",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "An RNA virus sample is target-negative, but the sample-specific internal control is also negative; the positive run control passes. What report interpretation is justified?",
    "choices": [
      "Confirmed absence of all RNA",
      "Positive for virus",
      "Invalid or indeterminate; repeat after investigating inhibition or extraction",
      "Valid negative"
    ],
    "answer": 2,
    "rationale": "The failed sample control invalidates a target-negative conclusion and warrants investigation or repeat. The run positive control proves only the broader run can work."
  },
  {
    "id": "BB-A-022",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Which file type conventionally contains per-read nucleotide sequences and base quality scores before alignment?",
    "choices": [
      "FASTQ",
      "VCF",
      "BED",
      "BAM"
    ],
    "answer": 0,
    "rationale": "FASTQ stores reads and quality strings. BAM contains alignments, VCF lists variants, and BED describes genomic intervals."
  },
  {
    "id": "BB-A-023",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "An array comparative genomic hybridization test identifies a segment with increased patient-to-reference fluorescence ratio. Which finding is suggested?",
    "choices": [
      "Higher protein turnover",
      "Copy-number gain in that region",
      "Absent amplification controls",
      "A single synonymous point variant only"
    ],
    "answer": 1,
    "rationale": "In array CGH, elevated relative hybridization can reflect DNA copy-number gain. It does not specifically identify synonymous substitutions, control failures, or protein kinetics."
  },
  {
    "id": "BB-A-024",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A DNA ladder has distinct bands, but a sample lane shows broad smearing. Which explanation is most consistent?",
    "choices": [
      "Sample degradation or overloading",
      "Highly uniform amplicon length",
      "Perfectly intact high-molecular-weight DNA",
      "Absence of any nucleic acid"
    ],
    "answer": 0,
    "rationale": "Smearing can result from heterogeneous degraded DNA or excessive loading. Intact uniform products make sharper bands; absent DNA gives no smear."
  },
  {
    "id": "BB-A-025",
    "domain": "Clinical Interpretation",
    "level": 5,
    "question": "A clinical specimen has an unexpected molecular finding inconsistent with morphology and previous testing. What is the best laboratory response?",
    "choices": [
      "Ignore the discrepancy",
      "Discard controls because discordance is inevitable",
      "Change morphology to match the molecular result",
      "Reconcile specimen identity, assay quality, analytic limitations, and clinical context before final interpretation"
    ],
    "answer": 3,
    "rationale": "Discordance should trigger identity and technical review plus clinical correlation. Automatically privileging one test or ignoring controls can cause patient harm."
  },
  {
    "id": "BB-A-026",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Which enzyme seals a nick between adjacent DNA fragments by creating a phosphodiester bond?",
    "choices": [
      "DNA helicase",
      "Reverse transcriptase",
      "DNA ligase",
      "RNase A"
    ],
    "answer": 2,
    "rationale": "DNA ligase seals breaks in the sugar-phosphate backbone. Helicase unwinds duplexes, RNase degrades RNA, and reverse transcriptase copies RNA into DNA."
  },
  {
    "id": "BB-A-027",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Which assay strategy uses an antibody to recognize DNA-RNA hybrids formed from target nucleic acid and an RNA probe?",
    "choices": [
      "Capillary protein electrophoresis",
      "Standard karyotyping",
      "Hybrid capture",
      "Sanger sequencing"
    ],
    "answer": 2,
    "rationale": "Hybrid capture uses target-probe hybrids recognized by antibodies. Sequencing reads bases, karyotyping inspects chromosomes, and protein electrophoresis separates proteins."
  },
  {
    "id": "BB-A-028",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A bacterium acquires antibiotic-resistance DNA by uptake of free extracellular DNA. Which mechanism occurred?",
    "choices": [
      "Transformation",
      "Translation",
      "Transduction",
      "Conjugation"
    ],
    "answer": 0,
    "rationale": "Transformation is uptake of extracellular DNA. Transduction involves bacteriophages, conjugation involves cell-to-cell DNA transfer, and translation produces protein."
  },
  {
    "id": "BB-A-029",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A PCR-positive extraction blank accompanies a batch of patient specimens. What is the most appropriate immediate action?",
    "choices": [
      "Change all positives to negative",
      "Investigate contamination and do not report affected results until resolved",
      "Ignore blank results if patient curves are strong",
      "Release all negative patient results but repeat only positives"
    ],
    "answer": 1,
    "rationale": "A positive extraction blank indicates contamination during processing, so affected testing needs investigation and repeat as appropriate. Patient signal strength does not invalidate the contamination warning."
  },
  {
    "id": "BB-A-030",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "A patient has a strong HLA-associated disease risk allele. Which interpretation is correct?",
    "choices": [
      "The allele changes risk but generally is not sufficient to establish the disease",
      "The allele proves active disease in all carriers",
      "An HLA result always predicts exact age of onset",
      "The allele is itself an infectious microorganism"
    ],
    "answer": 0,
    "rationale": "Many HLA associations modify susceptibility rather than act as definitive diagnoses. They do not guarantee disease or predict onset precisely."
  },
  {
    "id": "BB-A-031",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "An instrument's fluorescence calibration expires before a batch is analyzed. What is the correct action?",
    "choices": [
      "Use a different patient's results as a calibrator",
      "Adjust patient Cq values by guesswork",
      "Perform required calibration or maintenance before releasing results",
      "Continue indefinitely because calibrations never affect results"
    ],
    "answer": 2,
    "rationale": "Calibration status affects analytical reliability. Guesswork or other patients' data cannot substitute for required maintenance and verification."
  },
  {
    "id": "BB-A-032",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "Why should a low-positive control be included near an assay's detection threshold?",
    "choices": [
      "To measure instrument power consumption",
      "To monitor sensitivity loss that a strong-positive control might miss",
      "To replace all negative controls",
      "To force patient specimens positive"
    ],
    "answer": 1,
    "rationale": "Low-positive controls are sensitive to modest reductions in assay performance. They cannot replace contamination controls and are not meant to affect patient results."
  },
  {
    "id": "BB-A-033",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "Which documentation is most important for reproducible reagent preparation?",
    "choices": [
      "Lot, expiration, concentration, preparer, and preparation date",
      "Only the name of the instrument vendor",
      "The operator's preferred music",
      "Only the reagent color"
    ],
    "answer": 0,
    "rationale": "Traceable reagent records support reproducibility and investigations. Appearance or unrelated information cannot establish reagent identity, suitability, or preparation history."
  },
  {
    "id": "BB-A-034",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A GC-rich PCR amplicon is compared with a same-length AT-rich amplicon under identical salt conditions. Which property is generally higher for the GC-rich amplicon?",
    "choices": [
      "Number of phosphodiester bonds",
      "Melting temperature",
      "Length in base pairs",
      "Number of strands"
    ],
    "answer": 1,
    "rationale": "GC pairs have stronger average duplex stabilization, so GC-rich DNA generally melts at a higher temperature. Equal lengths have comparable backbone linkages; both are duplexes and have the same base-pair count."
  },
  {
    "id": "BB-A-035",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A multiplex PCR loses sensitivity for one low-copy target after a new primer set is added. What is the best first consideration?",
    "choices": [
      "That RNA no longer contains uracil",
      "That every target has identical amplification efficiency",
      "Primer competition or interactions in the multiplex reaction",
      "That fluorescent detectors cannot measure multiple colors"
    ],
    "answer": 2,
    "rationale": "Additional primers can compete for reagents or interact, depressing one target. Primer design and channel separation should be evaluated; the other statements are not valid general explanations."
  },
  {
    "id": "BB-A-036",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "Which laboratory arrangement best reduces post-PCR amplicon contamination of new reactions?",
    "choices": [
      "Move amplified products into the reagent-preparation room",
      "Open PCR tubes near unused master mix",
      "Share all pipettes across all areas",
      "Use a unidirectional workflow from clean setup toward amplification and product analysis"
    ],
    "answer": 3,
    "rationale": "Unidirectional workflow and segregated equipment reduce carryover. Bringing amplicons into clean zones, sharing pipettes, or opening tubes near master mix raises contamination risk."
  },
  {
    "id": "BB-A-037",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "In short-read next-generation sequencing, what is the primary purpose of library adapters?",
    "choices": [
      "Attach sequences needed for amplification and sequencing on the platform",
      "Prevent any DNA fragmentation",
      "Force all variants to be synonymous",
      "Replace base calling with immunohistochemistry"
    ],
    "answer": 0,
    "rationale": "Adapters provide platform-specific priming or binding sequences. They do not remove the need for fragmentation, control variant consequence, or turn sequencing into protein staining."
  },
  {
    "id": "BB-A-038",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Which characteristic distinguishes transcription-mediated amplification (TMA) from conventional thermocycling PCR?",
    "choices": [
      "It requires agarose gels during every cycle",
      "It uses no enzymes",
      "It only detects proteins",
      "It amplifies nucleic acid using an isothermal RNA transcription-based process"
    ],
    "answer": 3,
    "rationale": "TMA is an isothermal nucleic acid amplification strategy involving transcription. It does not require cyclic gel separation, target proteins, or operate without enzymes."
  },
  {
    "id": "BB-A-039",
    "domain": "Clinical Interpretation",
    "level": 5,
    "question": "Two outbreak isolates have identical short marker sequences but differ across many whole-genome SNP positions. Which conclusion is most justified?",
    "choices": [
      "SNP differences are always sequencing errors",
      "The isolates must be identical",
      "Marker identity proves direct patient-to-patient transmission",
      "Higher-resolution sequencing suggests they are less closely related than the marker alone implied"
    ],
    "answer": 3,
    "rationale": "A limited marker can lack discriminatory power; whole-genome differences improve relatedness assessment. Direct transmission is not established by one marker, and all SNP differences are not automatically artifacts."
  },
  {
    "id": "BB-A-040",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A loss-of-function mutation disables the spliceosome. Which molecule is most directly affected before translation?",
    "choices": [
      "tRNA anticodon",
      "Ribosomal protein",
      "Mature mRNA",
      "Chromosomal DNA backbone"
    ],
    "answer": 2,
    "rationale": "The spliceosome removes introns from precursor mRNA; failed processing alters mature mRNA. It does not primarily cleave DNA, construct ribosomal proteins, or change tRNA anticodons."
  },
  {
    "id": "BB-A-041",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A patient has strong clinical suspicion of an infectious disease, but a respiratory NAAT is negative from a poorly collected swab. Which is best?",
    "choices": [
      "Treat any negative as proof of perfect sampling",
      "Consider specimen quality and timing before ruling out infection",
      "Interpret negative control as positive",
      "Assume the pathogen has no genome"
    ],
    "answer": 1,
    "rationale": "NAAT sensitivity depends on collection, timing, and target abundance. A poor sample weakens negative predictive interpretation; controls do not replace sample adequacy."
  },
  {
    "id": "BB-A-042",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A patient has microcytosis and a suspected alpha-thalassemia deletion. Which approach is especially appropriate for identifying common deletional variants?",
    "choices": [
      "Protein electrophoresis to identify every deletion breakpoint",
      "Bacterial culture of the blood sample",
      "Copy-number-sensitive molecular assay such as gap-PCR or deletion analysis",
      "Serum sodium measurement only"
    ],
    "answer": 2,
    "rationale": "Alpha-thalassemia commonly involves HBA gene deletions, addressed by assays designed for deletion detection. Electrolytes, cultures, or nonspecific protein tests cannot identify breakpoints."
  },
  {
    "id": "BB-A-043",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "Which practice best supports personnel competency assessment in molecular testing?",
    "choices": [
      "Evaluate only handwriting",
      "Use attendance records alone",
      "Document direct observation, result interpretation, QC review, and problem-solving as applicable",
      "Assume initial training removes the need for subsequent assessment"
    ],
    "answer": 2,
    "rationale": "Competency involves relevant testing tasks and interpretation; attendance alone does not demonstrate performance. Scope and frequency depend on applicable standards."
  },
  {
    "id": "BB-A-044",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A Sanger chromatogram is clean until a heterozygous single-base insertion, then shows overlapping peaks downstream. Why?",
    "choices": [
      "The insertion prevents all polymerase reactions",
      "The sequencer became a mass spectrometer",
      "Every downstream base is necessarily deleted",
      "Both alleles are shifted in reading register after the insertion"
    ],
    "answer": 3,
    "rationale": "Mixed alleles differ in length after an indel and their signals overlap downstream. This is an alignment issue, not evidence that all later bases are absent or polymerization never occurred."
  },
  {
    "id": "BB-A-045",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "An inherited mitochondrial disorder shows variable clinical severity among maternal relatives. What concept helps explain this?",
    "choices": [
      "Y-chromosome-only transmission",
      "Mendelian segregation of an autosomal dominant gene in every case",
      "Heteroplasmy and tissue-specific mutant load",
      "The absence of mitochondrial genomes from muscle"
    ],
    "answer": 2,
    "rationale": "Different proportions of mutant mitochondrial DNA across tissues can influence severity. Mitochondrial inheritance is not Y-linked, and mitochondria are abundant in muscle."
  },
  {
    "id": "BB-A-046",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A proficiency-testing specimen disagrees with the expected result. What is an appropriate laboratory response?",
    "choices": [
      "Discard the record",
      "Investigate root cause, document corrective action, and evaluate patient impact",
      "Assume proficiency results are irrelevant to routine care",
      "Change the submitted answer after scoring without documentation"
    ],
    "answer": 1,
    "rationale": "Unexpected proficiency results warrant documented investigation and corrective action, including patient impact when applicable. Concealment or untracked changes undermine quality systems."
  },
  {
    "id": "BB-A-047",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "A PCR thermocycler holds double-stranded DNA near 95°C at the start of each cycle. What is the immediate goal?",
    "choices": [
      "Primer annealing",
      "Strand denaturation",
      "Reverse transcription",
      "DNA ligation"
    ],
    "answer": 1,
    "rationale": "High temperature separates complementary DNA strands. Primer annealing requires cooling; ligation and reverse transcription are different reactions."
  },
  {
    "id": "BB-A-048",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A single sharp peak appears in a SYBR Green melt-curve analysis at the expected temperature. What does that most strongly suggest?",
    "choices": [
      "Absolute proof of the amplicon's exact sequence",
      "A quantitative result independent of Cq",
      "No need for controls",
      "Predominance of one PCR product"
    ],
    "answer": 3,
    "rationale": "A single melt peak supports a relatively uniform product, though it does not prove sequence identity. Controls and quantitative data remain necessary."
  },
  {
    "id": "BB-A-049",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A molecular assay detects the F5 Leiden variant. What pathophysiologic consequence is most closely associated with this variant?",
    "choices": [
      "Loss of all fibrinogen production",
      "Obligate severe hemophilia A in all carriers",
      "Resistance to activated protein C cleavage and increased venous thrombosis risk",
      "Absent platelet adhesion from VWF deletion"
    ],
    "answer": 2,
    "rationale": "Factor V Leiden produces activated protein C resistance and thrombophilia. It is not a fibrinogen null state, factor VIII deficiency, or VWF deletion."
  },
  {
    "id": "BB-A-050",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A purified nucleic acid contains deoxyribose, adenine, and one phosphate group. Which term best describes the complete molecule?",
    "choices": [
      "Nitrogenous base",
      "Nucleoside",
      "Dinucleotide",
      "Nucleotide"
    ],
    "answer": 3,
    "rationale": "A phosphate makes the sugar-base unit a nucleotide. A nucleoside lacks phosphate; a base lacks sugar; a dinucleotide contains two linked nucleotide units."
  },
  {
    "id": "BB-A-051",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A chronic viral infection is monitored by quantitative nucleic acid testing. A viral load drops from 100,000 to 1,000 copies/mL. What is the log10 reduction?",
    "choices": [
      "5 log10",
      "2 log10",
      "1 log10",
      "3 log10"
    ],
    "answer": 1,
    "rationale": "100,000/1,000=100=10^2, a 2-log10 reduction. A 1-log change is tenfold; 3-log is thousandfold; 5-log is hundred-thousandfold."
  },
  {
    "id": "BB-A-052",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A laboratory uses a modified FDA-cleared molecular assay outside its cleared instructions. Which general requirement follows?",
    "choices": [
      "Report the assay as FDA-cleared for the modified use",
      "Use the original package insert as proof for every modification",
      "Eliminate quality controls",
      "Establish and document performance for the modified use under applicable regulations"
    ],
    "answer": 3,
    "rationale": "Laboratory modifications can require additional performance establishment under applicable oversight. Original clearance does not automatically extend to altered use, nor remove QC obligations."
  },
  {
    "id": "BB-A-053",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A laboratory compares methylated and unmethylated alleles after bisulfite treatment. Why should control material include known methylation states?",
    "choices": [
      "To prove every sample is germline",
      "To confirm conversion and assay discrimination",
      "To create PCR template by protein synthesis",
      "To eliminate the need for DNA isolation"
    ],
    "answer": 1,
    "rationale": "Known methylation controls demonstrate conversion and assay specificity. They do not replace extraction or define the biological source of specimens."
  },
  {
    "id": "BB-A-054",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Which extraction condition is especially important when purifying RNA from fresh tissue?",
    "choices": [
      "Incubate without gloves to prevent contamination",
      "Add RNase inhibitors or chaotropic lysis promptly",
      "Expose lysate to active RNase A",
      "Store at room temperature overnight"
    ],
    "answer": 1,
    "rationale": "RNA is vulnerable to RNases, so rapid RNase-inactivating lysis is essential. RNase exposure and prolonged room-temperature storage accelerate degradation; gloves help prevent contamination."
  },
  {
    "id": "BB-A-055",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A patient suspected of Huntington disease requires testing of an expanded trinucleotide repeat. What is a central analytical concern?",
    "choices": [
      "Determining ABO group by serology",
      "Counting bacterial colonies",
      "Accurate repeat sizing, including expansions that exceed conventional PCR capability",
      "Measuring serum creatinine only"
    ],
    "answer": 2,
    "rationale": "Repeat-expansion assays must detect and size larger alleles, sometimes requiring specialized methods. The other tests do not address repeat architecture."
  },
  {
    "id": "BB-A-056",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A variant lies at the 3' terminal base of an allele-specific PCR primer. Why can this location improve discrimination?",
    "choices": [
      "3' mismatches always increase extension speed",
      "Primer sequence is irrelevant to amplification",
      "The primer becomes a restriction enzyme",
      "3'-end mismatch can inhibit polymerase extension"
    ],
    "answer": 3,
    "rationale": "Polymerase extension is especially sensitive to terminal 3' mismatches, aiding allele discrimination. Mismatch does not guarantee faster extension or make a primer an enzyme."
  },
  {
    "id": "BB-A-057",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "For standard PCR, what happens during the annealing step?",
    "choices": [
      "Primers hybridize to complementary template regions",
      "DNA is permanently degraded",
      "Polymerase removes all primers",
      "Amplicons are separated on a gel"
    ],
    "answer": 0,
    "rationale": "Annealing establishes primer-template pairing. Polymerase extends primers afterward; electrophoresis occurs after cycling; PCR does not deliberately destroy templates."
  },
  {
    "id": "BB-A-058",
    "domain": "Methods & Instrumentation",
    "level": 5,
    "question": "A low-frequency NGS variant is seen in a high-GC, poorly mapped region and supported mainly by one strand. What should the analyst do?",
    "choices": [
      "Delete all reference reads",
      "Report a definitive pathogenic variant without review",
      "Assume all low-frequency variants are germline",
      "Evaluate mapping, strand bias, depth, and orthogonal confirmation if needed"
    ],
    "answer": 3,
    "rationale": "Read-level QC and validation are crucial for low-frequency calls. Strand bias and mapping artifacts can mimic variants; neither automatic reporting nor deletion of data is appropriate."
  },
  {
    "id": "BB-A-059",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A child with cystic fibrosis has one detected CFTR pathogenic variant on a targeted panel. What conclusion is justified?",
    "choices": [
      "The variant proves biallelic status",
      "All intronic and structural variants have been excluded",
      "A second disease-causing variant may be outside the panel's interrogated regions or variant types",
      "The child cannot have cystic fibrosis"
    ],
    "answer": 2,
    "rationale": "Targeted panels have detection limits; a second allele may require broader sequencing or deletion/duplication testing. One variant does not demonstrate two affected copies."
  },
  {
    "id": "BB-A-060",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "A signal-amplification assay uses branched DNA probes. Which component is being multiplied to improve detection?",
    "choices": [
      "The number of viable bacteria in culture",
      "The number of DNA replication origins in cells",
      "The number of original patient chromosomes",
      "Signal molecules attached to a bound target"
    ],
    "answer": 3,
    "rationale": "Branched DNA assays increase detectable reporter signal associated with target molecules rather than enzymatically copying the patient target. Cell growth and replication origins are unrelated."
  },
  {
    "id": "BB-A-061",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "In Sanger sequencing, why do incorporated dideoxynucleotides terminate extension?",
    "choices": [
      "They lack the 3'-hydroxyl needed for another phosphodiester bond",
      "They always destroy the template",
      "They are larger than all normal nucleotides",
      "They contain an extra 2'-hydroxyl"
    ],
    "answer": 0,
    "rationale": "A ddNTP lacks a usable 3'-OH, preventing further chain extension. It does not need to destroy the template and chain termination is not due to mere size."
  },
  {
    "id": "BB-A-062",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A comparison of a candidate assay against a reference method yields 90 true positives, 10 false negatives, 5 false positives, and 95 true negatives. What is clinical sensitivity?",
    "choices": [
      "90%",
      "94.7%",
      "95%",
      "50%"
    ],
    "answer": 0,
    "rationale": "Sensitivity = TP/(TP+FN) = 90/100 = 90%. The 95% choice resembles specificity (95/100); 94.7% is positive predictive value (90/95)."
  },
  {
    "id": "BB-A-063",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "Which specimen transport choice best preserves RNA-based analytes?",
    "choices": [
      "Keep tissue in an open warm container",
      "Repeatedly thaw and refreeze aliquots",
      "Add active RNase to prevent bacterial growth",
      "Follow validated stabilizer, temperature, and time requirements"
    ],
    "answer": 3,
    "rationale": "RNA integrity depends on timely stabilization and validated transport conditions. Heat, repeated freeze-thaw, and RNase exposure can degrade the analyte."
  },
  {
    "id": "BB-A-064",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A human identification profile includes a Y-STR match between two males. Which limitation should be recognized?",
    "choices": [
      "Y-STR matches uniquely identify every man",
      "Y-STR loci are all autosomal",
      "Y-STR markers are inherited only from mothers",
      "Paternal male relatives may share the same Y-STR haplotype"
    ],
    "answer": 3,
    "rationale": "Y-STR haplotypes are transmitted along paternal lines, so male relatives can match. They are not maternally inherited or autosomal and lack individualizing power of an independent multilocus autosomal profile."
  },
  {
    "id": "BB-A-065",
    "domain": "Methods & Instrumentation",
    "level": 5,
    "question": "A variant is absent from an NGS report even though it occurs in a low-complexity region with poor read mapping. What is the most appropriate interpretation?",
    "choices": [
      "Read mapping never affects sensitivity",
      "The specimen is definitely free of the variant",
      "Technical limitations can reduce detection sensitivity in that region",
      "The region cannot contain real mutations"
    ],
    "answer": 2,
    "rationale": "Repetitive or low-complexity sequences can map poorly, creating coverage and sensitivity gaps. A negative report does not prove absence outside validated assay performance."
  },
  {
    "id": "BB-A-066",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "Following allogeneic stem-cell transplantation, STR profiles demonstrate increasing donor allele contribution over time. What is being evaluated?",
    "choices": [
      "Engraftment chimerism",
      "A tumor's kinase activity",
      "CpG methylation only",
      "Bacterial drug susceptibility"
    ],
    "answer": 0,
    "rationale": "Comparison of donor- and recipient-specific STR alleles assesses chimerism after transplantation. It does not directly measure methylation, bacterial susceptibility, or kinase function."
  },
  {
    "id": "BB-A-067",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A fluorometric dsDNA assay reports much less DNA than spectrophotometric A260. What is a plausible reason?",
    "choices": [
      "Spectrophotometry detects only double-stranded DNA",
      "Fluorometry detects every protein as DNA",
      "Low fluorescence proves a deletion in the genome",
      "A260 may include RNA and other UV-absorbing contaminants"
    ],
    "answer": 3,
    "rationale": "UV absorbance is less specific for dsDNA and can be raised by RNA and other absorbers. Selective dyes better estimate dsDNA; the discrepancy does not diagnose genomic deletions."
  },
  {
    "id": "BB-A-068",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "Two patients receive the same drug, but one has a CYP2D6 poor-metabolizer phenotype based on genotype. What does the finding most directly predict?",
    "choices": [
      "A bacterial resistance mechanism",
      "Complete absence of cytochrome P450 enzymes",
      "Guaranteed allergy to every medication",
      "Potential alteration in metabolism of CYP2D6 substrates"
    ],
    "answer": 3,
    "rationale": "CYP2D6 genotype can affect metabolism of its drug substrates; effect depends on the specific medication. It does not universally predict allergy, bacterial resistance, or all CYP enzymes."
  },
  {
    "id": "BB-A-069",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A fluorescent in situ hybridization assay demonstrates two fusion signals in nuclei after probes hybridize to adjacent genetic loci. What is being assessed directly?",
    "choices": [
      "Protein enzymatic activity",
      "DNA spatial localization and rearrangement patterns",
      "Serum antibody concentration",
      "RNA extraction yield"
    ],
    "answer": 1,
    "rationale": "FISH visualizes labeled nucleic acid probes at chromosomal locations and can indicate rearrangements. It does not measure enzyme activity, antibodies, or extraction yield."
  },
  {
    "id": "BB-A-070",
    "domain": "Clinical Interpretation",
    "level": 1,
    "question": "A patient with sickle cell disease has a pathogenic missense change in the HBB gene. Which protein is primarily altered?",
    "choices": [
      "Coagulation factor V",
      "Spectrin only",
      "Alpha-globin",
      "Beta-globin"
    ],
    "answer": 3,
    "rationale": "The HBB gene encodes beta-globin, and its classic sickle variant changes this chain. Alpha-globin, factor V, and spectrin are distinct gene products."
  },
  {
    "id": "BB-A-071",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "In conventional RFLP analysis, a sequence variant abolishes a restriction site. What pattern is expected relative to the reference allele?",
    "choices": [
      "All bands become identical",
      "A shorter fragment replaces a longer fragment",
      "No fragments remain",
      "A longer undigested fragment may appear"
    ],
    "answer": 3,
    "rationale": "Loss of a restriction site prevents one cut, creating a longer fragment. The DNA remains detectable; it does not necessarily yield a shorter or identical pattern."
  },
  {
    "id": "BB-A-072",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A mutation changes the mRNA codon UAU to UAA. What is the most likely consequence during translation?",
    "choices": [
      "Reading-frame restoration",
      "Insertion of tyrosine",
      "Premature termination",
      "Silent substitution"
    ],
    "answer": 2,
    "rationale": "UAU encodes tyrosine but UAA is a stop codon, creating a nonsense mutation. It is not silent, does not restore a frame, and does not add tyrosine."
  },
  {
    "id": "BB-A-073",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "A gel is run with DNA samples loaded at the negative electrode. In which direction will DNA migrate?",
    "choices": [
      "Toward the negative electrode",
      "It moves only if labeled fluorescently",
      "It remains at the wells",
      "Toward the positive electrode"
    ],
    "answer": 3,
    "rationale": "DNA has a negatively charged phosphate backbone and migrates toward the anode (positive electrode). Fluorescent labeling is not needed for electrophoretic migration."
  },
  {
    "id": "BB-A-074",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A capillary STR profile shows a small peak one repeat shorter than the dominant allele. It appears consistently at low intensity. What should be assessed?",
    "choices": [
      "PCR stutter rather than assuming another individual contributed",
      "Definite mitochondrial heteroplasmy",
      "A failed cytogenetic karyotype",
      "A Sanger sequence insertion"
    ],
    "answer": 0,
    "rationale": "STR stutter produces minor peaks commonly one repeat unit shorter; interpretation considers validated stutter thresholds. It is not automatically mixture evidence or an unrelated assay phenomenon."
  },
  {
    "id": "BB-A-075",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "Before reporting a new qualitative molecular assay clinically, which activity is essential?",
    "choices": [
      "Assume manufacturer's marketing proves all claims",
      "Evaluate only one highly positive specimen",
      "Skip limit-of-detection assessment for low-level targets",
      "Document verification or validation of performance appropriate to the laboratory's use"
    ],
    "answer": 3,
    "rationale": "Clinical implementation requires documented performance evaluation appropriate to use and assay type. One strong positive or marketing claims cannot establish sensitivity, specificity, and robustness."
  },
  {
    "id": "BB-A-076",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Which blotting technique is used to detect a specific RNA transcript after electrophoretic separation?",
    "choices": [
      "Southern blot",
      "Dot blot for proteins only",
      "Northern blot",
      "Western blot"
    ],
    "answer": 2,
    "rationale": "Northern blotting detects RNA using complementary probes. Southern detects DNA, Western detects proteins, and a dot blot is not intrinsically protein-only."
  },
  {
    "id": "BB-A-077",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A Southern blot detects a specific sequence after restriction-digested DNA has been separated by size. What binds to the target on the membrane?",
    "choices": [
      "Complementary labeled nucleic acid probe",
      "Unlabeled unrelated RNA",
      "DNA polymerase as the signal",
      "Fluorescent antibody against protein"
    ],
    "answer": 0,
    "rationale": "A complementary labeled probe hybridizes to immobilized DNA. Protein antibodies belong to Western assays; polymerase is not the usual blot detector; unrelated RNA lacks specificity."
  },
  {
    "id": "BB-A-078",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "A child has a disorder due to maternal and paternal copies having different epigenetic expression states. Which concept is central?",
    "choices": [
      "Genomic imprinting",
      "Standard codominance only",
      "Simple PCR contamination",
      "Independent assortment of bacterial plasmids"
    ],
    "answer": 0,
    "rationale": "Imprinting causes parent-of-origin-dependent expression through epigenetic regulation. Codominance and bacterial plasmid assortment do not explain parent-specific silencing."
  },
  {
    "id": "BB-A-079",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A quantitative reverse-transcription PCR assay targets an RNA virus. Which step makes the RNA accessible to DNA polymerase amplification?",
    "choices": [
      "Protein precipitation only",
      "RFLP analysis",
      "Restriction digestion",
      "Reverse transcription to cDNA"
    ],
    "answer": 3,
    "rationale": "Reverse transcriptase makes complementary DNA from RNA. Digestion, precipitation, and RFLP do not replace the RNA-to-cDNA conversion."
  },
  {
    "id": "BB-A-080",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "For extraction of high-quality genomic DNA from a blood sample, what is the primary purpose of proteinase K?",
    "choices": [
      "Convert RNA into cDNA",
      "Amplify target sequences",
      "Digest proteins, including nucleases",
      "Increase fluorophore emission"
    ],
    "answer": 2,
    "rationale": "Proteinase K breaks down protein contaminants and nucleases during lysis. It does not reverse-transcribe RNA, amplify DNA, or enhance fluorescence."
  },
  {
    "id": "BB-A-081",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "A respiratory panel detects pathogen RNA by RT-PCR. What does a positive result establish most directly?",
    "choices": [
      "Presence of the targeted RNA sequence in the specimen",
      "Proof of viable, transmissible organisms",
      "Definite disease severity",
      "Universal antibiotic susceptibility"
    ],
    "answer": 0,
    "rationale": "RT-PCR detects target RNA, not necessarily viability, transmissibility, clinical severity, or antimicrobial susceptibility. Interpretation requires clinical context."
  },
  {
    "id": "BB-A-082",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A tumor acquires a secondary kinase-domain mutation after initial response to targeted therapy. What molecular mechanism may explain renewed progression?",
    "choices": [
      "A change in ABO blood group",
      "Acquired resistance reducing drug binding",
      "Conversion of all tumor cells to healthy fibroblasts",
      "Obligate loss of every chromosome"
    ],
    "answer": 1,
    "rationale": "Secondary target mutations can impair inhibitor binding and drive acquired resistance. Progression is not explained by blood-group change or universal chromosome loss."
  },
  {
    "id": "BB-A-083",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A 200-bp PCR product is intended, but an additional 80-bp band appears in the no-template control. What is the most likely explanation?",
    "choices": [
      "Primer-dimer or contaminating DNA",
      "Successful extraction of the target",
      "Excessive sample RNA integrity",
      "Perfect target specificity"
    ],
    "answer": 0,
    "rationale": "Small products in a no-template control suggest primer-dimer or contamination. There is no intended template to confirm extraction or specificity, and RNA integrity does not explain the band."
  },
  {
    "id": "BB-A-084",
    "domain": "Molecular Foundations",
    "level": 2,
    "question": "What is the complementary strand written 5'-to-3' for a template strand 5'-AGTC-3'?",
    "choices": [
      "5'-GACT-3'",
      "5'-TCAG-3'",
      "5'-AGTC-3'",
      "5'-CAGT-3'"
    ],
    "answer": 0,
    "rationale": "The paired strand is antiparallel: 3'-TCAG-5', which becomes 5'-GACT-3' when written conventionally. TCAG ignores orientation; CAGT and AGTC are not the reverse complement."
  },
  {
    "id": "BB-A-085",
    "domain": "Molecular Foundations",
    "level": 3,
    "question": "A sequencing library needs adapters joined to blunt-ended DNA fragments. Which enzyme performs the joining step?",
    "choices": [
      "Topoisomerase",
      "Uracil-DNA glycosylase",
      "DNA ligase",
      "DNase I"
    ],
    "answer": 2,
    "rationale": "Ligase covalently joins adapters and fragments. Topoisomerase manages DNA topology; UNG removes uracil bases; DNase I degrades DNA."
  },
  {
    "id": "BB-A-086",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "In a patient with chronic myeloid leukemia, which molecular event produces the characteristic BCR::ABL1 fusion?",
    "choices": [
      "Expansion of CGG repeats in FMR1",
      "Deletion of the CFTR gene",
      "Trisomy 21",
      "t(9;22) reciprocal translocation"
    ],
    "answer": 3,
    "rationale": "CML commonly involves t(9;22), creating BCR::ABL1. The other changes concern different conditions and do not generate this fusion."
  },
  {
    "id": "BB-A-087",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "For two specimens tested with an efficient qPCR assay, sample X has Cq 19 and sample Y has Cq 22. Which contains more initial target, assuming equivalent extraction and efficiency?",
    "choices": [
      "Cq cannot be compared under any conditions",
      "Equal amounts",
      "Sample X by approximately eightfold",
      "Sample Y by approximately eightfold"
    ],
    "answer": 2,
    "rationale": "Three cycles of difference correspond to about 2^3 = 8-fold at 100% efficiency; the lower Cq indicates more starting target. The relationship depends on comparable assay conditions."
  },
  {
    "id": "BB-A-088",
    "domain": "Molecular Foundations",
    "level": 3,
    "question": "A pathogenic variant changes a promoter transcription-factor binding site but leaves the coding sequence intact. Which effect is most plausible?",
    "choices": [
      "Automatic frameshift mutation",
      "Altered mRNA transcription",
      "A different tRNA genetic code",
      "Increased chromosome number"
    ],
    "answer": 1,
    "rationale": "Promoter binding changes gene expression by altering transcription initiation. Chromosome number, codon assignments, and reading frame are not necessarily changed."
  },
  {
    "id": "BB-A-089",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A leukemia sample contains a PML::RARA fusion. Which disease does this finding strongly support?",
    "choices": [
      "Sickle cell disease",
      "Acute promyelocytic leukemia",
      "Hereditary hemochromatosis",
      "Chronic lymphocytic leukemia"
    ],
    "answer": 1,
    "rationale": "PML::RARA is a hallmark molecular event of acute promyelocytic leukemia. The alternatives have different molecular features or are nonmalignant inherited conditions."
  },
  {
    "id": "BB-A-090",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "Why must pharmacogenomic interpretations be drug-specific?",
    "choices": [
      "A variant can reduce activation of one prodrug but reduce clearance of another active drug",
      "All CYP variants affect all drugs identically",
      "Drug metabolism is unrelated to genotype",
      "A single allele determines all adverse reactions"
    ],
    "answer": 0,
    "rationale": "The clinical direction of an enzyme variant depends on whether a drug is activated or cleared by that enzyme. Effects are not universal and multiple factors affect response."
  },
  {
    "id": "BB-A-091",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A lung tumor harbors an activating EGFR mutation that has an established targeted treatment implication. Which role is most appropriate for molecular testing?",
    "choices": [
      "Prove all tissue sections contain only tumor cells",
      "Identify an actionable biomarker to inform therapy selection",
      "Measure bacterial ribosomal RNA",
      "Determine the patient's blood type"
    ],
    "answer": 1,
    "rationale": "Molecular biomarkers can inform targeted treatment options in defined cancer settings. Testing does not replace pathology adequacy or serve unrelated blood typing or microbial purposes."
  },
  {
    "id": "BB-A-092",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A DNA preparation has A260/A280 near 1.1 rather than approximately 1.8. What is the most likely concern?",
    "choices": [
      "Protein or other absorbing contamination",
      "Guaranteed RNA integrity",
      "A pathogenic copy-number change",
      "Ideal pure DNA"
    ],
    "answer": 0,
    "rationale": "A markedly low A260/A280 for DNA suggests protein or other contaminants. It is not a sequence variant call or an RNA-quality measurement."
  },
  {
    "id": "BB-A-093",
    "domain": "Molecular Foundations",
    "level": 3,
    "question": "A patient has variable proportions of two mitochondrial DNA variants in different tissues. What best describes this condition?",
    "choices": [
      "Codominance",
      "Heteroplasmy",
      "Homozygosity",
      "Uniparental disomy"
    ],
    "answer": 1,
    "rationale": "Heteroplasmy is coexistence of different mitochondrial genomes within an individual or tissue. Homozygosity is a nuclear allele state; uniparental disomy concerns parental chromosome origin; codominance describes expression of alleles."
  },
  {
    "id": "BB-A-094",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "A qPCR amplification plot rises only in the very late cycles in several patient wells and the no-template control. What is the most useful next step?",
    "choices": [
      "Report all late curves as high viral load",
      "Examine contamination and nonspecific amplification before calling low positives",
      "Ignore all control information",
      "Reclassify every specimen as heterozygous"
    ],
    "answer": 1,
    "rationale": "Late signals shared with the NTC are suspicious for contamination or nonspecific products. They are not proof of high target burden or a genotype."
  },
  {
    "id": "BB-A-095",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A genomic position is covered by 120 reads, of which 60 support an alternate allele. For a diploid tumor-free sample, which result is most compatible?",
    "choices": [
      "Coverage is 60 total reads",
      "100% variant allele fraction, consistent with homozygosity",
      "Approximately 50% variant allele fraction, consistent with heterozygosity",
      "0% variant allele fraction"
    ],
    "answer": 2,
    "rationale": "60/120 gives a 50% alternate allele fraction, as often seen in a heterozygote. It is not 0% or 100%, and depth includes both alternate and reference reads."
  },
  {
    "id": "BB-A-096",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "Which region of the human genome encodes the highly polymorphic classical HLA class I genes?",
    "choices": [
      "HBB cluster on chromosome 11",
      "Major histocompatibility complex on chromosome 6",
      "Mitochondrial control region",
      "BCR::ABL1 fusion locus"
    ],
    "answer": 1,
    "rationale": "HLA-A, -B, and -C map to the MHC on chromosome 6. The other locations encode different loci or rearrangements."
  },
  {
    "id": "BB-A-097",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A bacterial resistance gene is detected by PCR, but phenotypic susceptibility testing is not performed. What is the best interpretation?",
    "choices": [
      "A resistance determinant is present; phenotype may depend on expression and other mechanisms",
      "All drugs will necessarily fail",
      "The result proves absence of other resistance genes",
      "The organism is nonviable"
    ],
    "answer": 0,
    "rationale": "Genotype identifies a determinant but does not always perfectly predict phenotype. Drug efficacy, viability, and other resistance mechanisms require additional context."
  },
  {
    "id": "BB-A-098",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "What is the most likely effect of excessively high stringency during probe hybridization?",
    "choices": [
      "Loss of binding even to mildly mismatched targets",
      "Increased nonspecific binding",
      "Permanent change in the target sequence",
      "Conversion of DNA to RNA"
    ],
    "answer": 0,
    "rationale": "High-stringency conditions destabilize imperfectly paired duplexes, potentially reducing true signal for mismatched targets. They do not mutate DNA or create RNA."
  },
  {
    "id": "BB-A-099",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "A new pathogen PCR reliably detects 20 copies per reaction in 95% of replicates but only 60% at 10 copies. What is the estimated 95% limit of detection?",
    "choices": [
      "10 copies",
      "60 copies",
      "20 copies",
      "15 copies without further evidence"
    ],
    "answer": 2,
    "rationale": "The demonstrated concentration meeting 95% detection is 20 copies. At 10 copies the assay is less reliable; 15 is unsupported and 60 confuses detection percentage with copy number."
  },
  {
    "id": "BB-A-100",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "An IGH gene rearrangement assay yields a single dominant clonotype in a B-cell specimen. What is the major interpretive caution?",
    "choices": [
      "Clonality supports a clonal population but does not alone establish malignancy",
      "A dominant clone proves a normal karyotype",
      "The result directly measures hemoglobin oxygen affinity",
      "All clonal populations are malignant"
    ],
    "answer": 0,
    "rationale": "A clonal rearrangement may occur in malignancy but needs clinical, morphologic, and immunophenotypic correlation. Clonality does not automatically mean cancer."
  },
  {
    "id": "BB-B-001",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "After treatment for BCR::ABL1-positive leukemia, a quantitative assay shows a declining normalized transcript level over serial samples. What is the main clinical application?",
    "choices": [
      "Monitor molecular response over time",
      "Measure antibody affinity",
      "Identify every somatic mutation in the tumor",
      "Determine the patient's CFTR carrier status"
    ],
    "answer": 0,
    "rationale": "Serial BCR::ABL1 transcript quantification supports molecular response assessment. It is targeted and does not survey all variants or unrelated inherited conditions."
  },
  {
    "id": "BB-B-002",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A cell is treated with a transcription inhibitor. Which immediate molecular product is most directly reduced?",
    "choices": [
      "Existing cell-membrane cholesterol",
      "Previously synthesized chromosomal DNA",
      "Preexisting ribosomal proteins",
      "New RNA molecules"
    ],
    "answer": 3,
    "rationale": "Transcription is synthesis of RNA from DNA, so inhibition reduces new RNA. Other cell components may change secondarily but are not the direct immediate product."
  },
  {
    "id": "BB-B-003",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "A strand-displacement amplification method is described as isothermal. What does isothermal mean in this context?",
    "choices": [
      "Reaction proceeds at essentially one controlled temperature rather than repeated denaturation cycles",
      "Every cycle is at 95°C then 55°C",
      "The target must be double stranded throughout",
      "The reaction has no temperature control"
    ],
    "answer": 0,
    "rationale": "Isothermal methods avoid PCR-style programmed thermal cycling while maintaining a set temperature. They still require controlled conditions and can involve strand separation enzymatically."
  },
  {
    "id": "BB-B-004",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A patient carries a genotype associated with reduced activity of an enzyme that activates a prodrug. What is a possible consequence?",
    "choices": [
      "Always increased activity of the prodrug",
      "Reduced formation of the active metabolite and lower efficacy",
      "Identical response regardless of genotype",
      "Guaranteed absence of adverse effects"
    ],
    "answer": 1,
    "rationale": "For prodrugs, reduced activating-enzyme function can decrease active-drug exposure. Actual response depends on the specific drug and other factors."
  },
  {
    "id": "BB-B-005",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "After bisulfite conversion and PCR, a previously unmethylated CpG cytosine is expected to be read as which base in the amplified strand?",
    "choices": [
      "Thymine",
      "Guanine",
      "Adenine",
      "Unchanged cytosine"
    ],
    "answer": 0,
    "rationale": "Unmethylated cytosine converts to uracil during bisulfite treatment and is amplified as thymine. Methylated cytosine is comparatively protected under the assay chemistry."
  },
  {
    "id": "BB-B-006",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A laboratory repeatedly tests a frozen aliquot of an RNA-positive sample. Cq values worsen over repeated thaw cycles. Which preventive measure is most appropriate?",
    "choices": [
      "Add RNAse before freezing",
      "Ignore sample integrity when Cq rises",
      "Increase each thaw to 60°C",
      "Prepare single-use aliquots to minimize freeze-thaw events"
    ],
    "answer": 3,
    "rationale": "Repeated freeze-thaw can degrade RNA and reduce detected target; aliquoting reduces cycles. Heating or adding RNase worsens degradation."
  },
  {
    "id": "BB-B-007",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A solid tumor test detects a gene amplification but not an activating point mutation in the same gene. Why should these be distinguished?",
    "choices": [
      "All tumors have identical genomic backgrounds",
      "Amplification and point mutation always mean the same molecular event",
      "Gene copy number can only be measured by Sanger sequencing",
      "Copy-number increases and sequence variants can have different clinical implications and assays"
    ],
    "answer": 3,
    "rationale": "Copy-number alterations and nucleotide substitutions are distinct biomarkers with context-specific implications. Assay design must identify which alteration types are covered."
  },
  {
    "id": "BB-B-008",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A DNA melt curve has two reproducible peaks in a nominally single-target SYBR assay. What should be investigated?",
    "choices": [
      "Multiple products or primer-dimers",
      "Proof of a pure single amplicon",
      "A confirmed pharmacogenomic phenotype",
      "A tumor's complete chromosome count"
    ],
    "answer": 0,
    "rationale": "Multiple peaks imply duplexes with distinct melting behavior, prompting evaluation of specificity. Melt profiles do not directly establish karyotype or drug phenotype."
  },
  {
    "id": "BB-B-009",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "A laboratory changes the extraction platform for a validated molecular test. Which risk is most important to evaluate?",
    "choices": [
      "Whether all gene names change",
      "Whether all PCR instruments become obsolete",
      "Altered recovery, inhibition, and analytical sensitivity for specimen types",
      "Whether DNA now contains uracil instead of thymine"
    ],
    "answer": 2,
    "rationale": "Extraction method changes may shift yield, inhibitor removal and sensitivity, requiring risk-based verification. Genetic code and instrument existence are unaffected."
  },
  {
    "id": "BB-B-010",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A patient's HIV viral-load sample is 'detected below the lower limit of quantification.' What does this mean?",
    "choices": [
      "Target signal is present, but below the assay's validated numerical reporting range",
      "The viral load is exactly zero",
      "The specimen is definitively target-negative",
      "The concentration is higher than the upper quantification limit"
    ],
    "answer": 0,
    "rationale": "Detection below LLOQ indicates detectable nucleic acid without sufficiently reliable numeric quantification. It is not negative, zero, or above the upper range."
  },
  {
    "id": "BB-B-011",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Which interaction primarily holds complementary DNA strands together in a double helix?",
    "choices": [
      "Covalent linkages between adenine and guanine",
      "Disulfide bridges between deoxyribose sugars",
      "Hydrogen bonding between complementary bases",
      "Peptide bonds between phosphates"
    ],
    "answer": 2,
    "rationale": "Complementary base hydrogen bonds help stabilize duplex DNA alongside stacking interactions. Peptide and disulfide bonds do not make the two DNA strands, and adenine-guanine covalent bonds are not normal pairing."
  },
  {
    "id": "BB-B-012",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "An STR electropherogram from a forensic comparison has more than two strong peaks at several autosomal loci. What should be assessed?",
    "choices": [
      "A possible mixture from more than one contributor, after artifact review",
      "A confirmed RNA-splicing defect",
      "Maternal inheritance of all Y-chromosome alleles",
      "A normal single diploid profile in every case"
    ],
    "answer": 0,
    "rationale": "Multiple strong alleles across several autosomal loci can suggest a mixture, although artifacts require assessment. A standard single-source diploid locus generally has at most two alleles."
  },
  {
    "id": "BB-B-013",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "A vendor updates software that changes variant filtering in a clinical NGS pipeline. What should the laboratory do before routine use?",
    "choices": [
      "Assess impact and verify software changes against established expectations",
      "Delete older validation data",
      "Install immediately with no record",
      "Assume software cannot change clinical variant calls"
    ],
    "answer": 0,
    "rationale": "Filtering changes can alter results; documented impact analysis and verification are needed. Software can affect reportable findings and records must be retained per policy."
  },
  {
    "id": "BB-B-014",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A gel shows faint unexpected bands in several lanes after a high-voltage run caused marked heating. Which issue warrants assessment?",
    "choices": [
      "The absence of any electric field",
      "Conversion of DNA into lipids",
      "A change in the universal genetic code",
      "Heat-related distortion and electrophoresis conditions"
    ],
    "answer": 3,
    "rationale": "Overheating can distort migration and compromise band interpretation. Heat does not turn DNA into lipid or change codon assignments."
  },
  {
    "id": "BB-B-015",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "Broad-range fungal PCR is positive while fungal culture remains negative after antifungal treatment. Which explanation is plausible?",
    "choices": [
      "PCR proves culture media are defective",
      "A molecular result cannot detect fungal DNA",
      "DNA may persist after organism viability decreases",
      "The assay must be amplifying patient hemoglobin"
    ],
    "answer": 2,
    "rationale": "NAATs may detect DNA from nonviable organisms, especially after treatment. Culture and PCR answer related but nonidentical questions."
  },
  {
    "id": "BB-B-016",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A qPCR standard curve has a slope of approximately -3.32. What does that generally indicate?",
    "choices": [
      "A tenfold difference requires 30 cycles",
      "The assay detects no targets",
      "0% amplification efficiency",
      "Approximately 100% amplification efficiency"
    ],
    "answer": 3,
    "rationale": "A slope near -3.32 means about a 3.32-cycle Cq shift per tenfold concentration and ~100% efficiency. The other statements contradict logarithmic amplification behavior."
  },
  {
    "id": "BB-B-017",
    "domain": "Clinical Interpretation",
    "level": 5,
    "question": "A suspected lymphoid malignancy has an IGK rearrangement assay with multiple weak products and no dominant clone. What is the best laboratory statement?",
    "choices": [
      "The assay measures MYC protein activity directly",
      "Interpret the pattern in the context of assay limits and additional clinical/pathology findings",
      "Any amplification proves a monoclonal malignancy",
      "Absence of a dominant peak proves no lymphoma"
    ],
    "answer": 1,
    "rationale": "Gene rearrangement patterns require quality and specimen-context interpretation; polyclonality does not categorically exclude lymphoma. Clonality and protein activity cannot be inferred simplistically."
  },
  {
    "id": "BB-B-018",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "An A260/A230 ratio is unusually low after extraction. What should the laboratory consider?",
    "choices": [
      "Carryover of salts, chaotropic agents, phenol, or similar contaminants",
      "The sample contains exactly two alleles",
      "The extraction control is automatically negative",
      "The patient's disease is autosomal recessive"
    ],
    "answer": 0,
    "rationale": "Low A260/A230 can reflect extraction contaminants that absorb near 230 nm. It does not reveal genotype, inheritance, or controls by itself."
  },
  {
    "id": "BB-B-019",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A patient tests positive for HLA-B*27 in a suspected inflammatory disorder. What should the report emphasize?",
    "choices": [
      "The result is by itself proof of active inflammatory disease",
      "The allele is a susceptibility marker and must be correlated clinically",
      "Its presence guarantees a specific treatment response",
      "The allele represents an RNA virus"
    ],
    "answer": 1,
    "rationale": "HLA-B*27 is associated with some conditions but is not diagnostic alone. Presence does not prove clinical activity, a pathogen, or a specific treatment response."
  },
  {
    "id": "BB-B-020",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "Which event most clearly requires reporting and corrective action within a molecular laboratory's quality system?",
    "choices": [
      "A technologist attends continuing education",
      "A reagent is stored according to instructions",
      "A mislabeled specimen reaches testing despite identification safeguards",
      "An instrument control passes within limits"
    ],
    "answer": 2,
    "rationale": "An identification failure is a reportable quality event needing corrective and preventive review. Routine training and successful controls are not equivalent nonconformances."
  },
  {
    "id": "BB-B-021",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Why do magnetic-bead extraction workflows often use sequential wash buffers?",
    "choices": [
      "To amplify DNA without thermal cycling",
      "To change DNA into amino acids",
      "To remove salts, proteins, and inhibitors while retaining bound nucleic acid",
      "To mutate all target genes"
    ],
    "answer": 2,
    "rationale": "Controlled washes remove contaminants from immobilized nucleic acids. Beads and wash steps do not intentionally mutate, amplify, or translate DNA."
  },
  {
    "id": "BB-B-022",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "Which dye or reagent property enables visualization of DNA bands in a gel?",
    "choices": [
      "Increasing the fragment length to a centimeter",
      "Binding only to RBC antigens",
      "Converting DNA into a visible enzyme",
      "Binding to nucleic acid with a detectable fluorescent or staining signal"
    ],
    "answer": 3,
    "rationale": "DNA dyes associate with nucleic acids and produce detectable signals. They do not target blood-group antigens or macroscopically enlarge molecules."
  },
  {
    "id": "BB-B-023",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A histone-deacetylase inhibitor changes gene expression without changing DNA base sequence. Which category best describes the mechanism?",
    "choices": [
      "Sanger sequencing artifact",
      "Epigenetic regulation",
      "Bacterial transformation",
      "Homologous chromosome nondisjunction"
    ],
    "answer": 1,
    "rationale": "Histone modifications alter chromatin accessibility and transcription without altering the DNA sequence. Nondisjunction and transformation change different biological properties."
  },
  {
    "id": "BB-B-024",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "An individual has a suspected Prader-Willi/Angelman region imprinting abnormality. Which assay approach is especially informative initially?",
    "choices": [
      "A routine bacterial Gram stain",
      "Methylation analysis of the relevant imprinting control region",
      "Antibody detection against viral capsid",
      "Fetal hemoglobin measurement alone"
    ],
    "answer": 1,
    "rationale": "Parent-of-origin methylation patterns help evaluate imprinting disorders at 15q11-q13. The other tests do not interrogate methylation or chromosome origin."
  },
  {
    "id": "BB-B-025",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "Which control would best reveal contamination introduced during specimen nucleic acid extraction?",
    "choices": [
      "Patient serum chemistry control",
      "Post-PCR size ladder alone",
      "Extraction blank processed alongside patient samples",
      "Sequencing base quality histogram"
    ],
    "answer": 2,
    "rationale": "An extraction blank undergoes the extraction workflow without patient target and can reveal contamination. Size ladders and unrelated chemistry controls cannot pinpoint this source."
  },
  {
    "id": "BB-B-026",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "In dye-terminator Sanger sequencing, what separates terminated fragments for base calling?",
    "choices": [
      "Microscopy of living cells",
      "Northern blot of intact RNA only",
      "Bacterial culture",
      "Capillary electrophoresis resolving fluorescent fragments by size"
    ],
    "answer": 3,
    "rationale": "Capillary electrophoresis separates dye-labeled terminated DNA fragments, generating a trace. The other options do not resolve Sanger products."
  },
  {
    "id": "BB-B-027",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A molecular laboratory receives heparinized blood for PCR, but assay instructions specify EDTA whole blood. Why should the specimen be assessed carefully?",
    "choices": [
      "All anticoagulants are analytically identical",
      "Heparin may inhibit polymerase and the alternate tube may be unvalidated",
      "EDTA always converts DNA to protein",
      "Heparin creates viral RNA in vitro"
    ],
    "answer": 1,
    "rationale": "Heparin can inhibit amplification, and collection devices must fit validated specimen requirements. Tube substitution is not automatically equivalent."
  },
  {
    "id": "BB-B-028",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "A newly prepared molecular reagent is mislabeled without lot identification. Why should it not be used for clinical reporting?",
    "choices": [
      "Lot information is relevant only to microscopes",
      "A missing lot number proves contamination",
      "Traceability and suitability cannot be reliably demonstrated",
      "The reagent is certainly chemically inactive"
    ],
    "answer": 2,
    "rationale": "Lot tracking supports traceability, expiry and corrective action. An absent identifier does not prove a particular chemistry error, but prevents acceptable documentation."
  },
  {
    "id": "BB-B-029",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A restriction enzyme recognizes a site that includes a pathogenic sequence change. What is the most direct purpose of digesting PCR product with that enzyme?",
    "choices": [
      "Measure transcript abundance from protein",
      "Differentiate allele-specific cleavage patterns",
      "Convert the digest into a karyogram",
      "Determine all variants across the entire genome"
    ],
    "answer": 1,
    "rationale": "Restriction digest can distinguish alleles whose recognition sites differ. The procedure is targeted, does not measure protein-derived transcription, and does not karyotype whole genomes."
  },
  {
    "id": "BB-B-030",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A patient with CNS infection suspicion has a CSF PCR result at the limit of detection. Which is the most appropriate interpretation?",
    "choices": [
      "Analytical sensitivity is irrelevant at low concentrations",
      "Any late signal is proof of severe infection",
      "A low-level target signal requires interpretation per validated positivity rules and clinical context",
      "The test result establishes pathogen viability"
    ],
    "answer": 2,
    "rationale": "Near-LoD signals require assay-specific criteria, controls, and context. Nucleic acid detection does not automatically prove severity or viability."
  },
  {
    "id": "BB-B-031",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A positive amplification control suddenly shifts from Cq 24 to Cq 29 across several consecutive runs. What pattern does this suggest?",
    "choices": [
      "A possible loss of efficiency or reagent/instrument problem needing investigation",
      "A patient's inherited mutation",
      "No meaningful change because both are positive",
      "Automatically improved analytical sensitivity"
    ],
    "answer": 0,
    "rationale": "A persistent five-cycle delay indicates performance drift, even if still positive. Investigation of reagent, calibration, and efficiency is appropriate."
  },
  {
    "id": "BB-B-032",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "An internal amplification control is routinely added to every patient reaction. What is its primary value?",
    "choices": [
      "Replace positive and negative batch controls entirely",
      "Guarantee no target mutation exists",
      "Measure hospital-wide disease prevalence",
      "Indicate possible inhibition or reaction failure for each sample"
    ],
    "answer": 3,
    "rationale": "Sample-level internal controls improve confidence that a negative is analytically valid. They do not guarantee variant absence or replace all other controls."
  },
  {
    "id": "BB-B-033",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "What is the role of chain-terminating ddNTPs in a classical four-reaction Sanger method?",
    "choices": [
      "Join separate chromosomes into one",
      "Create fragments ending at different positions for sequence reconstruction",
      "Stain proteins in a Western blot",
      "Digest all RNA in the specimen"
    ],
    "answer": 1,
    "rationale": "Controlled chain termination produces a nested fragment ladder from which sequence is read. Joining chromosomes, degrading RNA, and protein staining are unrelated."
  },
  {
    "id": "BB-B-034",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A DNA sequence is 30% adenine. In a double-stranded sample obeying Chargaff's relationships, approximately what percentage is guanine?",
    "choices": [
      "30%",
      "20%",
      "15%",
      "40%"
    ],
    "answer": 1,
    "rationale": "A equals T, so A+T=60%; the remaining G+C=40%, giving G=20%. The other values do not satisfy complementary-base proportions."
  },
  {
    "id": "BB-B-035",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A Sanger result has uniformly low peak heights and heavy background throughout. What should be considered before variant calling?",
    "choices": [
      "Poor template quality, primer specificity, or reaction cleanup",
      "A confirmed homozygous pathogenic variant",
      "Definite chromosomal trisomy",
      "Guaranteed full assay sensitivity"
    ],
    "answer": 0,
    "rationale": "Poor signal-to-noise can reflect template or chemistry problems and warrants quality review. It is not proof of a variant or karyotype change."
  },
  {
    "id": "BB-B-036",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "Why is a microarray typically less suited than well-designed sequencing for discovering a completely novel variant?",
    "choices": [
      "Array probes generally interrogate predefined target sequences",
      "Arrays measure only protein",
      "Arrays require no target complementarity",
      "Arrays always sequence more bases than NGS"
    ],
    "answer": 0,
    "rationale": "Arrays rely on known probe designs; sequencing can reveal unexpected changes in regions actually covered. Arrays are nucleic-acid hybridization tools, not base-by-base discovery systems."
  },
  {
    "id": "BB-B-037",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A digital PCR assay has 30,000 partitions and only a fraction are positive. Why use a Poisson model?",
    "choices": [
      "It converts RNA to protein",
      "Some positive partitions may contain more than one starting target molecule",
      "It eliminates all statistical uncertainty",
      "It guarantees there were no inhibitors"
    ],
    "answer": 1,
    "rationale": "Poisson correction estimates occupancy when multiple molecules can share a partition. It is not biochemical conversion or a guarantee against inhibition."
  },
  {
    "id": "BB-B-038",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A colorectal carcinoma carries a KRAS activating mutation in a region associated with resistance to certain EGFR-directed antibodies. Why is genotyping relevant?",
    "choices": [
      "It proves the patient's blood type is O",
      "It measures all tumor immune checkpoints directly",
      "It eliminates the need to confirm tumor identity",
      "It may predict lack of benefit from the specified targeted therapy"
    ],
    "answer": 3,
    "rationale": "A qualifying KRAS alteration can inform anti-EGFR treatment selection in colorectal cancer. It does not replace histologic identification or unrelated laboratory tests."
  },
  {
    "id": "BB-B-039",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A molecular assay detects a resistance gene directly from a mixed specimen without species resolution. What potential pitfall arises?",
    "choices": [
      "The detected gene may belong to another organism in the mixture",
      "The gene always comes from the dominant pathogen",
      "PCR automatically assigns each gene to a species",
      "Mixed samples cannot contain DNA"
    ],
    "answer": 0,
    "rationale": "Without linkage or isolate testing, gene origin can be ambiguous in polymicrobial material. PCR detects sequence, not necessarily which organism carries it."
  },
  {
    "id": "BB-B-040",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "What is the main purpose of a VCF file in a clinical sequencing workflow?",
    "choices": [
      "Capture only specimen photographs",
      "Represent called sequence variants with positions and annotations",
      "Replace the reference genome with an antibody panel",
      "Store every raw electrical sensor reading"
    ],
    "answer": 1,
    "rationale": "VCF stores variant calls and related genotype or filter annotations. Raw base measurements and image files use other formats."
  },
  {
    "id": "BB-B-041",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A new assay is intended to distinguish two SNP alleles. Which materials should be included during its analytical specificity study?",
    "choices": [
      "Only water blanks",
      "Only samples lacking the target chromosome",
      "Confirmed samples representing both alleles and relevant cross-reactive sequences",
      "Only one strong reference homozygote"
    ],
    "answer": 2,
    "rationale": "Specificity validation should challenge both claimed alleles and plausible cross-reactivity. Blanks or one genotype alone cannot establish discrimination."
  },
  {
    "id": "BB-B-042",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "The no-template control in a PCR run is positive, but the extraction blanks are negative. What source of contamination should be investigated first?",
    "choices": [
      "Amplification setup reagents or carryover introduced during PCR preparation",
      "An unrelated blood chemistry analyzer",
      "A normal inherited polymorphism in all controls",
      "The patient's genome must be contaminated"
    ],
    "answer": 0,
    "rationale": "A positive NTC points to reagent or setup-stage contamination, even if extraction blanks pass. It does not identify a patient mutation or implicate unrelated instrumentation."
  },
  {
    "id": "BB-B-043",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Which polymerase property is most likely to reduce base-incorporation errors in long-range PCR?",
    "choices": [
      "Ability to make RNA from protein",
      "Strong nonspecific nuclease degradation of all primers",
      "Production of fluorescent antibodies",
      "3'-to-5' exonuclease proofreading activity"
    ],
    "answer": 3,
    "rationale": "Proofreading polymerases can remove mismatched bases, improving fidelity. Uncontrolled primer destruction and antibody production are unrelated."
  },
  {
    "id": "BB-B-044",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "An antibiotic-resistance plasmid moves from one bacterial cell to another through physical contact and a conjugation apparatus. What is the mechanism?",
    "choices": [
      "Transcription",
      "Transduction",
      "Transformation",
      "Conjugation"
    ],
    "answer": 3,
    "rationale": "Conjugation involves direct transfer, often of plasmid DNA, between bacteria. Transformation uses naked DNA and transduction uses phages; transcription synthesizes RNA."
  },
  {
    "id": "BB-B-045",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "Which paired findings best illustrate differences between a tumor predictive biomarker and a germline pharmacogenomic marker?",
    "choices": [
      "Two bacterial colony counts",
      "Somatic driver variant guiding targeted therapy versus inherited drug-metabolism allele affecting drug handling",
      "Two quality-control lot numbers",
      "Two unrelated blood pressures"
    ],
    "answer": 1,
    "rationale": "Somatic tumor biomarkers inform tumor-specific therapy; inherited pharmacogenomic variants can influence host drug metabolism. The other pairings are not molecular treatment markers."
  },
  {
    "id": "BB-B-046",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "A laboratory wants to enrich for polyadenylated eukaryotic mRNA before RNA-seq. Which capture approach is appropriate?",
    "choices": [
      "Restriction digest with EcoRI",
      "Y-chromosome FISH",
      "Oligo(dT) selection",
      "Immunostaining for cytokeratin"
    ],
    "answer": 2,
    "rationale": "Oligo(dT) hybridizes to poly(A) tails on many mature eukaryotic mRNAs. Digestion, protein staining, and FISH do not selectively capture polyadenylated RNA."
  },
  {
    "id": "BB-B-047",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "An unexpected strong patient PCR signal occurs alongside a positive extraction blank from the same batch. Which is the correct quality action?",
    "choices": [
      "Release because strong positives are immune to contamination",
      "Edit the extraction blank to negative",
      "Withhold affected results and investigate contamination, then repeat as needed",
      "Only rerun the no-template control and ignore extraction steps"
    ],
    "answer": 2,
    "rationale": "An extraction blank positive compromises batch integrity regardless of signal magnitude. Investigation and controlled repeat prevent false-positive reporting."
  },
  {
    "id": "BB-B-048",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A laboratory calculates 98 true-negative results and 2 false-positive results among 100 reference negatives. What is clinical specificity?",
    "choices": [
      "100%",
      "98%",
      "2%",
      "50%"
    ],
    "answer": 1,
    "rationale": "Specificity = TN/(TN+FP) = 98/(98+2) = 98%. The remaining values confuse false-positive rate with specificity or assume perfection."
  },
  {
    "id": "BB-B-049",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A laboratory director is asked to provide the molecular assay's reportable range and performance limitations. Where should this be documented?",
    "choices": [
      "Current validated assay procedure and associated performance records",
      "In informal verbal instructions only",
      "A patient's family history alone",
      "Only a marketing brochure"
    ],
    "answer": 0,
    "rationale": "Formal validation and controlled procedures document analytical claims and limitations. Informal or promotional material is insufficient."
  },
  {
    "id": "BB-B-050",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "In a labeled probe assay, why is probe orientation critical?",
    "choices": [
      "Probe must match the target in the same orientation without complementarity",
      "Probe must contain no bases",
      "Probe must be complementary to the accessible target strand",
      "Probe must be a protein enzyme"
    ],
    "answer": 2,
    "rationale": "Stable hybridization requires complementary, antiparallel pairing to the target. Identical same-direction sequences do not form the intended duplex."
  },
  {
    "id": "BB-B-051",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A newborn screening follow-up suggests a beta-thalassemia pathogenic variant. What characteristic finding might a molecular test identify?",
    "choices": [
      "JAK2 translocation in all red cells",
      "Deletion of every HLA gene",
      "Pathogenic HBB sequence variant affecting beta-globin synthesis",
      "A bacterial resistance plasmid"
    ],
    "answer": 2,
    "rationale": "Many beta-thalassemia cases involve HBB variants reducing globin synthesis. The other choices describe unrelated changes."
  },
  {
    "id": "BB-B-052",
    "domain": "Methods & Instrumentation",
    "level": 4,
    "question": "A PCR reaction produces little target despite intact template and working positive control. The primer pair has extensive 3' complementarity to itself. What is a likely cause?",
    "choices": [
      "An exact doubling of sensitivity",
      "Guaranteed increased target yield",
      "Conversion of primers to antibodies",
      "Primer-dimer formation competing with target amplification"
    ],
    "answer": 3,
    "rationale": "3' complementarity encourages primer-dimers that consume reagents and can interfere with desired amplification. It does not assure higher sensitivity."
  },
  {
    "id": "BB-B-053",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Why does a nucleic acid chain have defined 5' and 3' ends?",
    "choices": [
      "Phosphate is attached only to the nitrogen base",
      "The sugar-phosphate backbone is directionally linked through the 3' and 5' carbons",
      "Every gene encodes five proteins",
      "All DNA is single stranded"
    ],
    "answer": 1,
    "rationale": "Phosphodiester linkage produces strand polarity through sugar 3' and 5' positions. Strand direction is not based on gene count, single-strandedness, or base-attached phosphate."
  },
  {
    "id": "BB-B-054",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "Which event most directly accounts for a child receiving both copies of a chromosome from one parent?",
    "choices": [
      "Normal independent assortment only",
      "RNA splicing",
      "Codon wobble",
      "Uniparental disomy"
    ],
    "answer": 3,
    "rationale": "Uniparental disomy means both homologs or chromosome copies derive from one parent. The other mechanisms concern typical segregation or gene expression, not parent-of-origin chromosome inheritance."
  },
  {
    "id": "BB-B-055",
    "domain": "Methods & Instrumentation",
    "level": 1,
    "question": "An RNA extraction shows abundant DNA contamination. Which treatment can improve RNA specificity before reverse transcription?",
    "choices": [
      "DNase treatment validated not to degrade RNA",
      "Heat denaturation without removal of DNA",
      "Addition of DNA ligase",
      "RNase digestion of the RNA fraction"
    ],
    "answer": 0,
    "rationale": "DNase removes residual DNA while preserving RNA under appropriate conditions. RNase destroys the analyte; ligase and heating do not selectively remove contaminating DNA."
  },
  {
    "id": "BB-B-056",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A patient with suspected myeloproliferative neoplasm has a JAK2 V617F mutation. What is the most relevant significance?",
    "choices": [
      "The result alone classifies every subtype of leukemia",
      "The variant proves a bacterial sepsis diagnosis",
      "The variant supports a clonal myeloproliferative process in the appropriate context",
      "The variant is the same as BCR::ABL1"
    ],
    "answer": 2,
    "rationale": "JAK2 V617F is an important clonal marker in several myeloproliferative neoplasms. Diagnosis still integrates blood counts, morphology, and other findings; it is not BCR::ABL1."
  },
  {
    "id": "BB-B-057",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Which statement correctly distinguishes target amplification from signal amplification?",
    "choices": [
      "Signal amplification synthesizes a full patient genome",
      "Target amplification increases copies of target sequence; signal amplification increases reporter signal without necessarily copying target",
      "Target amplification detects only proteins",
      "Both always require a DNA gel"
    ],
    "answer": 1,
    "rationale": "The distinction is what gets multiplied: nucleic acid target versus measurable signal. Neither category necessarily requires gels or whole-genome synthesis."
  },
  {
    "id": "BB-B-058",
    "domain": "Molecular Foundations",
    "level": 1,
    "question": "A PCR assay is designed to amplify an RNA target directly through a DNA intermediate. Which enzyme generates that intermediate?",
    "choices": [
      "Restriction enzyme",
      "DNA ligase",
      "Exonuclease I",
      "Reverse transcriptase"
    ],
    "answer": 3,
    "rationale": "Reverse transcriptase copies RNA into cDNA for subsequent PCR. Ligase joins strands; restriction enzymes cut DNA; exonucleases degrade DNA termini."
  },
  {
    "id": "BB-B-059",
    "domain": "Quality & Laboratory Practice",
    "level": 4,
    "question": "A DNA extraction's yield is acceptable, but multiple samples fail PCR while a purified positive control passes. What is a plausible batch-level explanation?",
    "choices": [
      "DNA concentration alone confirms successful amplification",
      "Inhibitor carryover during extraction",
      "The positive control proves all patient samples are valid",
      "All patient targets are absent by definition"
    ],
    "answer": 1,
    "rationale": "Successful positive control with failed sample assays can implicate inhibitors not represented in the control. Yield alone does not assess amplifiability or target status."
  },
  {
    "id": "BB-B-060",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "An oligonucleotide array has many independent probes targeting hundreds of variants. What is its core analytical principle?",
    "choices": [
      "Direct measurement of protein catalytic velocity",
      "PCR-free visualization of chromosomes at the microscope",
      "Parallel sequence-specific hybridization to immobilized probes",
      "Sorting cells by morphology"
    ],
    "answer": 2,
    "rationale": "Microarrays query many loci via specific target-probe binding. They do not inherently measure protein enzymatic activity, cell morphology, or microscopic karyotypes."
  },
  {
    "id": "BB-B-061",
    "domain": "Methods & Instrumentation",
    "level": 5,
    "question": "A target region has coverage depth of 8x in an assay validated for 100x minimum for confident variant exclusion. Which action is appropriate?",
    "choices": [
      "Interpret low depth as a deletion without copy-number analysis",
      "Ignore the assay's coverage threshold",
      "Report it as definitively reference",
      "Flag the region as insufficiently covered for a confident negative call"
    ],
    "answer": 3,
    "rationale": "Coverage below validation requirements limits sensitivity for variants. It is not automatically evidence of no variant or a deletion and should be addressed as a QC limitation."
  },
  {
    "id": "BB-B-062",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "A specimen carries an F8 inversion suspected in severe hemophilia A. Which general assay strategy is needed?",
    "choices": [
      "A method validated for the relevant structural rearrangement",
      "Only serum glucose testing",
      "An RNA virus antigen screen",
      "A SNP-only assay that cannot detect inversions"
    ],
    "answer": 0,
    "rationale": "Structural inversions require methods that can detect rearrangement architecture. Single-base-only assays and unrelated screens can miss the causative change."
  },
  {
    "id": "BB-B-063",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A hybridization assay produces numerous false-positive probe signals. Which adjustment is most likely to reduce weak mismatched binding?",
    "choices": [
      "Remove all negative controls",
      "Use completely unrelated probes",
      "Increase wash stringency within validated parameters",
      "Decrease all wash temperatures drastically"
    ],
    "answer": 2,
    "rationale": "Increasing appropriate stringency removes less-stable nonspecific hybrids. Excessively permissive washes retain background; removing controls does not solve it."
  },
  {
    "id": "BB-B-064",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "In an HBA deletion analysis, two samples have identical total hemoglobin concentrations but distinct genotypes. What explains why molecular testing remains useful?",
    "choices": [
      "Hemoglobin concentration always identifies the precise deletion breakpoint",
      "Every carrier is equally symptomatic",
      "Genotypes cannot be studied from DNA",
      "Genotypes and clinical expression are not perfectly determined by one hematologic measurement"
    ],
    "answer": 3,
    "rationale": "Molecular testing identifies underlying allele structure even when phenotypes overlap. A single concentration does not establish genotype or deletion breakpoint."
  },
  {
    "id": "BB-B-065",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A validation set shows a PCR assay detects 49 of 50 known positives. How should sensitivity be reported from this set?",
    "choices": [
      "100% sensitivity in all patient populations",
      "No valid performance can ever be estimated",
      "98% observed positive agreement with uncertainty",
      "49%"
    ],
    "answer": 2,
    "rationale": "49/50 = 98% observed sensitivity or positive agreement for the tested set, but sample size and case mix limit certainty. It is not 49% or proof of universality."
  },
  {
    "id": "BB-B-066",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "Why are paired-end NGS reads valuable in variant analysis?",
    "choices": [
      "They remove all PCR duplicates automatically",
      "They make reference genomes unnecessary",
      "They directly measure protein abundance",
      "They provide sequence information from both ends of a library fragment, aiding mapping"
    ],
    "answer": 3,
    "rationale": "Paired-end information supports alignment and structural-event evaluation. Duplicate handling, protein quantification, and reference use remain separate concerns."
  },
  {
    "id": "BB-B-067",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A laboratory receives a specimen with mismatched identifiers between tube and requisition. What should occur before molecular analysis?",
    "choices": [
      "Run assay and assign results later by memory",
      "Choose the tube label without documentation",
      "Assume matching birthdays establish identity",
      "Resolve identity discrepancy under accessioning policy"
    ],
    "answer": 3,
    "rationale": "Identity mismatches pose serious reporting risk and require documented resolution. Unverified assumptions or retrospective matching are unsafe."
  },
  {
    "id": "BB-B-068",
    "domain": "Quality & Laboratory Practice",
    "level": 2,
    "question": "An extraction yields 40 microliters of DNA at 25 ng/microliter. What is the total recovered DNA mass?",
    "choices": [
      "625 ng",
      "1,000 ng",
      "65 ng",
      "10,000 ng"
    ],
    "answer": 1,
    "rationale": "Total mass = concentration x volume = 25 ng/microliter x 40 microliters = 1,000 ng. The alternatives reflect incorrect arithmetic."
  },
  {
    "id": "BB-B-069",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A disorder is caused by biallelic pathogenic variants in a nuclear gene. Both parents each carry one variant. What finding in the child is most consistent with disease?",
    "choices": [
      "Two pathogenic variants in trans",
      "A variant only in mitochondrial DNA",
      "One normal allele from each parent only",
      "All variants inherited only from the father in every case"
    ],
    "answer": 0,
    "rationale": "Recessive disease usually needs pathogenic alleles on both gene copies (in trans). Two normal copies or mitochondrial-only findings do not establish this nuclear biallelic mechanism."
  },
  {
    "id": "BB-B-070",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A reaction uses 0.5 microliters of 10 micromolar primer in 20 microliters total. What is the final primer concentration?",
    "choices": [
      "2.5 micromolar",
      "0.25 micromolar",
      "5 micromolar",
      "0.025 micromolar"
    ],
    "answer": 1,
    "rationale": "Final concentration = 10 x 0.5/20 = 0.25 micromolar. The other options are tenfold or twentyfold errors."
  },
  {
    "id": "BB-B-071",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "After stem-cell transplantation, recipient-specific STR alleles increase from 2% to 25% in serial samples. What is the most appropriate immediate laboratory interpretation?",
    "choices": [
      "An automatic diagnosis of a bacterial infection",
      "No identifiable change",
      "Increasing recipient chimerism that warrants clinical correlation",
      "Complete donor-only engraftment"
    ],
    "answer": 2,
    "rationale": "The recipient contribution rose significantly and needs clinical interpretation with specimen lineage and context. It is not donor-only, unchanged, or microbial evidence."
  },
  {
    "id": "BB-B-072",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "Fragile X syndrome molecular evaluation must consider large CGG repeats and methylation. Which limitation applies to simple short-amplicon PCR?",
    "choices": [
      "It identifies every expansion size with equal reliability",
      "It detects disease through protein staining alone",
      "It always measures methylation directly",
      "Very large expansions and methylation status may require specialized complementary methods"
    ],
    "answer": 3,
    "rationale": "FMR1 full mutations can challenge conventional PCR and require appropriate sizing and methylation methods. Routine short-amplicon PCR cannot be assumed comprehensive."
  },
  {
    "id": "BB-B-073",
    "domain": "Clinical Interpretation",
    "level": 5,
    "question": "An assay has analytic specificity for a resistance gene but clinicians request a susceptibility interpretation. What is most important?",
    "choices": [
      "Report resistance to every antimicrobial",
      "Know how detection of that gene correlates with phenotype and document limits",
      "Assume all genes are expressed identically",
      "Treat analytic specificity as clinical sensitivity"
    ],
    "answer": 1,
    "rationale": "Analytic gene detection and predicted phenotype are not interchangeable. Interpretation needs validated genotype-phenotype correlations and limitations."
  },
  {
    "id": "BB-B-074",
    "domain": "Methods & Instrumentation",
    "level": 5,
    "question": "In a bisulfite-specific methylation assay, a conversion-control non-CpG cytosine remains cytosine. What is the primary concern?",
    "choices": [
      "The organism has no DNA",
      "Polymerase cannot use thymine",
      "Confirmed high methylation at every CpG",
      "Incomplete bisulfite conversion"
    ],
    "answer": 3,
    "rationale": "Persistence of normally converted non-CpG cytosine can flag incomplete conversion and confound methylation inference. It does not establish universal methylation or absence of DNA."
  },
  {
    "id": "BB-B-075",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A report identifies CYP2C19 poor-metabolizer status for a drug dependent on CYP2C19 activation. What is the best next interpretive step?",
    "choices": [
      "Diagnose hereditary cancer from the phenotype",
      "Consult drug-specific, current prescribing and pharmacogenomic guidance",
      "Apply the same dose change to every medication",
      "Assume CYP2C19 affects no prescribed drugs"
    ],
    "answer": 1,
    "rationale": "Genotype consequences and alternatives are medication-specific and depend on up-to-date prescribing guidance. One phenotype cannot dictate universal doses or cancer diagnosis."
  },
  {
    "id": "BB-B-076",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "In FISH, a split-apart probe pattern is observed where a fused locus usually produces overlapping signals. What might this indicate?",
    "choices": [
      "Protein phosphorylation only",
      "Higher serum viral load without further testing",
      "Rearrangement involving that locus",
      "Complete RNA degradation"
    ],
    "answer": 2,
    "rationale": "Break-apart FISH signal separation can indicate locus rearrangement. It does not directly assess phosphorylation, RNA quality, or viral-load magnitude."
  },
  {
    "id": "BB-B-077",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "A tissue donor and recipient differ at many HLA loci. What is the main clinical reason for molecular HLA typing?",
    "choices": [
      "Confirm RNA extraction yield",
      "Evaluate histocompatibility and support transplant matching",
      "Determine all inherited metabolic disorders",
      "Identify antimicrobial resistance genes"
    ],
    "answer": 1,
    "rationale": "HLA typing helps establish compatibility for transplantation. It is not a universal screen for genetic disease or microbiologic resistance."
  },
  {
    "id": "BB-B-078",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A viral-load value changes from 2.0 x 10^4 to 4.0 x 10^4 copies/mL on repeat testing. What is the approximate log10 change?",
    "choices": [
      "10 log10 increase",
      "2.0 log10 increase",
      "1.0 log10 decrease",
      "0.30 log10 increase"
    ],
    "answer": 3,
    "rationale": "A twofold rise corresponds to log10(2) = 0.301. One or more whole-log changes are 10-fold or greater changes, not twofold."
  },
  {
    "id": "BB-B-079",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A patient with suspected Duchenne muscular dystrophy has a normal targeted sequence test covering small variants only. What additional genetic mechanism should be evaluated?",
    "choices": [
      "Exonic deletion or duplication in DMD",
      "No further testing is ever useful",
      "Only a single HLA-B allele",
      "Only bacterial transduction"
    ],
    "answer": 0,
    "rationale": "Large DMD copy-number variants are a common disease mechanism that sequence-only assays can miss. Copy-number analysis complements small-variant sequencing."
  },
  {
    "id": "BB-B-080",
    "domain": "Molecular Foundations",
    "level": 3,
    "question": "A woman with an X-linked recessive pathogenic allele has an unaffected male partner. What proportion of their sons is expected to inherit the allele if she is heterozygous?",
    "choices": [
      "0%",
      "100%",
      "50%",
      "25%"
    ],
    "answer": 2,
    "rationale": "Each son receives the maternal X; a heterozygous carrier transmits the allele to half of sons. The father contributes Y to sons, so the other probabilities do not apply."
  },
  {
    "id": "BB-B-081",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "A hot-start DNA polymerase is used in a PCR assay. What problem is it intended to reduce?",
    "choices": [
      "Premature nonspecific extension during reaction setup",
      "Separation of chromosomal homologs",
      "All amplification after heating",
      "Conversion of dsDNA to RNA"
    ],
    "answer": 0,
    "rationale": "Hot-start reagents inhibit polymerase before activation, reducing low-temperature mispriming. They still support desired amplification after activation."
  },
  {
    "id": "BB-B-082",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "A ligase chain reaction targets a known single-base variant. What provides allele discrimination?",
    "choices": [
      "Efficient ligation generally requires correctly matched adjacent oligonucleotides at the junction",
      "Uncontrolled DNA fragmentation",
      "Protein antibody avidity only",
      "Counting whole chromosomes"
    ],
    "answer": 0,
    "rationale": "Ligation efficiency is sensitive to base pairing at the junction, making LCR useful for specific variants. It is not antibody-based or chromosome counting."
  },
  {
    "id": "BB-B-083",
    "domain": "Molecular Foundations",
    "level": 2,
    "question": "Which ribosomal function relies on complementary pairing between a tRNA anticodon and an mRNA codon?",
    "choices": [
      "Joining DNA Okazaki fragments",
      "Adding methyl groups to promoter DNA",
      "Recognition of the correct amino acid during translation",
      "Changing chromosome ploidy"
    ],
    "answer": 2,
    "rationale": "Anticodon-codon recognition helps decode mRNA into amino-acid sequence. Ligase handles Okazaki joining; DNA methylation and ploidy are separate processes."
  },
  {
    "id": "BB-B-084",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A clinical lab uses a respiratory molecular panel that can detect both influenza A and influenza B. What is the benefit of an assay's separate targets?",
    "choices": [
      "It makes specimen collection unimportant",
      "It measures antiviral drug concentration",
      "It can identify which viral type is represented in a positive sample",
      "It proves mixed infections never occur"
    ],
    "answer": 2,
    "rationale": "Distinct targets support viral differentiation, with co-detection possible. Targeting does not remove preanalytical requirements or measure drug levels."
  },
  {
    "id": "BB-B-085",
    "domain": "Clinical Interpretation",
    "level": 3,
    "question": "A resistance assay detects a variant linked to reduced susceptibility to a particular antiviral. What should a report avoid?",
    "choices": [
      "Claiming universal resistance to all antiviral drug classes",
      "Explaining the variant-drug relationship",
      "Listing assay targets and limitations",
      "Using current interpretive guidance"
    ],
    "answer": 0,
    "rationale": "Resistance interpretation is variant- and drug-specific. It should not be generalized across all drug classes; relevant context and limitations belong in the report."
  },
  {
    "id": "BB-B-086",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "A genomic DNA extraction from paraffin-embedded tissue yields highly fragmented DNA. What should the assay designer prioritize?",
    "choices": [
      "A 15-kb PCR target only",
      "Amplicon sizes compatible with short available fragments",
      "No extraction quality assessment",
      "Use of RNA polymerase instead of DNA polymerase"
    ],
    "answer": 1,
    "rationale": "FFPE material is often fragmented and chemically damaged, making shorter PCR targets more successful. Long amplicons and omitted QC increase failure risk."
  },
  {
    "id": "BB-B-087",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "A laboratory wants to separate single-stranded DNA fragments that differ by one nucleotide. Which separation approach is most suitable?",
    "choices": [
      "Standard light microscopy of the DNA",
      "Density measurement of the PCR tube",
      "Denaturing polyacrylamide or high-resolution capillary electrophoresis",
      "Low-percentage agarose gel only"
    ],
    "answer": 2,
    "rationale": "Denaturing PAGE and high-resolution capillary systems separate near-identical fragment sizes. Routine low-percentage agarose offers poorer single-base resolution."
  },
  {
    "id": "BB-B-088",
    "domain": "Clinical Interpretation",
    "level": 4,
    "question": "In a hereditary breast cancer evaluation, a variant is classified as 'uncertain significance.' What is the best clinical interpretation?",
    "choices": [
      "Insufficient evidence exists to classify it as pathogenic or benign, so avoid treating it as a confirmed disease-causing finding",
      "It guarantees the patient will develop cancer",
      "It is definitively pathogenic",
      "It is definitively benign"
    ],
    "answer": 0,
    "rationale": "A VUS lacks enough evidence for a definitive clinical-risk classification. It should not be managed as a proven pathogenic allele without other appropriate evidence."
  },
  {
    "id": "BB-B-089",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "What determines the boundaries of a conventional PCR amplicon?",
    "choices": [
      "The binding positions and orientation of the forward and reverse primers",
      "The electrophoresis voltage after cycling",
      "Only the sample's protein concentration",
      "Only the total size of the human genome"
    ],
    "answer": 0,
    "rationale": "Primer locations define the amplified interval. Genomic size, protein concentration, and subsequent voltage do not specify start and end positions."
  },
  {
    "id": "BB-B-090",
    "domain": "Quality & Laboratory Practice",
    "level": 5,
    "question": "A sequencing run reports a clinically important variant at an amplicon end with low base quality and no reverse-strand support. What is the best approach?",
    "choices": [
      "Report pathogenic status solely from the initial call",
      "Exclude the patient's clinical history permanently",
      "Assume end-of-read positions are always reliable",
      "Review quality and confirm according to validated procedures before reporting"
    ],
    "answer": 3,
    "rationale": "Low quality and poor strand support elevate artifact risk. A clinical interpretation should follow confirmation and review procedures rather than assume validity."
  },
  {
    "id": "BB-B-091",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "A lab tests a gene transcript by RT-qPCR and gets amplification in a no-RT control. What is the most likely concern?",
    "choices": [
      "Perfectly RNA-specific amplification",
      "Genomic DNA contamination",
      "Absence of all contamination",
      "An enzymatically active ribosome"
    ],
    "answer": 1,
    "rationale": "No-RT amplification indicates DNA may be serving as template, since cDNA was not made. A properly RNA-specific assay should investigate this signal."
  },
  {
    "id": "BB-B-092",
    "domain": "Methods & Instrumentation",
    "level": 2,
    "question": "A Northern blot includes a loading control RNA transcript. Why?",
    "choices": [
      "Confirm all RNA is absent",
      "Measure number of chromosomes",
      "Measure patient temperature during collection",
      "Assess relative RNA loading and sample variation"
    ],
    "answer": 3,
    "rationale": "Reference transcripts help interpret expression signals by considering loading. They do not directly assess chromosome number or specimen temperature."
  },
  {
    "id": "BB-B-093",
    "domain": "Molecular Foundations",
    "level": 2,
    "question": "A deletion of two nucleotides occurs near the beginning of a coding region. Which outcome is expected if no compensation occurs?",
    "choices": [
      "No change to translation reading frame",
      "Frameshift of downstream codons",
      "Copy-number gain of the entire chromosome",
      "Always synonymous substitution"
    ],
    "answer": 1,
    "rationale": "Removal of two bases shifts the triplet reading frame, generally altering downstream protein sequence. It is not silent by definition and does not imply chromosome gain."
  },
  {
    "id": "BB-B-094",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A quality-control chart shows six consecutive values trending upward within control limits. What is the most appropriate quality-management response?",
    "choices": [
      "Discard all trend data",
      "Evaluate for systematic drift rather than waiting for a limit violation",
      "Immediately edit previous patient reports without investigation",
      "Assume a trend proves the target is positive"
    ],
    "answer": 1,
    "rationale": "Trends may signal impending system changes and merit review before out-of-control status. Uninvestigated report changes or ignored trends are inappropriate."
  },
  {
    "id": "BB-B-095",
    "domain": "Molecular Foundations",
    "level": 3,
    "question": "A DNA repair assay requires removal of an incorrect base without immediately cutting the sugar-phosphate backbone at every position. Which enzyme class fits the initial base-removal step?",
    "choices": [
      "DNA ligase",
      "Reverse transcriptase",
      "RNA polymerase II",
      "DNA glycosylase"
    ],
    "answer": 3,
    "rationale": "DNA glycosylases cleave the base-sugar bond in base-excision repair. Ligase seals breaks; RNA polymerase and reverse transcriptase synthesize nucleic acids."
  },
  {
    "id": "BB-B-096",
    "domain": "Quality & Laboratory Practice",
    "level": 3,
    "question": "A technologist changes gloves but then carries a rack of amplified PCR tubes into the pre-PCR clean area. Why is this unsafe?",
    "choices": [
      "Amplicons can contaminate clean surfaces and reagents despite clean gloves",
      "PCR products cannot contaminate future PCRs",
      "Amplified DNA loses all charge",
      "Gloves sterilize every exposed surface"
    ],
    "answer": 0,
    "rationale": "PCR amplicons are potent contamination sources. New gloves do not prevent contamination carried on racks, tubes, and surfaces."
  },
  {
    "id": "BB-B-097",
    "domain": "Clinical Interpretation",
    "level": 2,
    "question": "Which genetic marker is usually most informative when comparing individuals from the same maternal lineage?",
    "choices": [
      "Mitochondrial DNA alone always uniquely differentiates relatives",
      "Y-STR in every female",
      "Single ABO allele as a unique identifier",
      "Autosomal STR profile rather than mtDNA sequence alone"
    ],
    "answer": 3,
    "rationale": "Maternal relatives can share mtDNA haplotypes, whereas a multilocus autosomal STR profile is generally more discriminating. Y-STR applies to paternal male lineages; ABO is not unique."
  },
  {
    "id": "BB-B-098",
    "domain": "Methods & Instrumentation",
    "level": 5,
    "question": "A molecular technologist receives an NGS negative result for a region with systematically low depth and an intact high-quality control. Which conclusion is defensible?",
    "choices": [
      "The run may pass globally while that individual region remains uninterpretable",
      "All variants require no depth information",
      "Passing controls eliminate all bioinformatic artifacts",
      "Every base in every patient is confidently negative"
    ],
    "answer": 0,
    "rationale": "Global QC does not substitute for region-level callability. Poor coverage can invalidate local negative conclusions despite otherwise acceptable sequencing."
  },
  {
    "id": "BB-B-099",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A patient has qPCR Cq 28, while a same-run calibrated comparator with tenfold more target has Cq 24.7. Which observation is most consistent?",
    "choices": [
      "Higher target always has a higher Cq",
      "A 28-cycle difference per tenfold change",
      "About 3.3 cycles per tenfold change",
      "No relationship between Cq and target amount"
    ],
    "answer": 2,
    "rationale": "At near-100% efficiency, tenfold concentration corresponds to roughly 3.32 cycles; more target reaches threshold sooner. Other interpretations reverse or discard the relationship."
  },
  {
    "id": "BB-B-100",
    "domain": "Methods & Instrumentation",
    "level": 3,
    "question": "A heterozygous SNP is seen as two clean peaks at the same position in bidirectional Sanger sequencing. What interpretation is reasonable?",
    "choices": [
      "A frameshift in every case",
      "Proof of an entire chromosome deletion",
      "Mixed bases consistent with heterozygosity, assuming sample and assay quality",
      "Failure of all polymerases"
    ],
    "answer": 2,
    "rationale": "Two superimposed bases at one site in quality reads can indicate a heterozygous substitution. It does not imply frameshift, whole-chromosome deletion, or complete reaction failure."
  }
];
