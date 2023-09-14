export const data = {
    body: [
        { component: "title", text: "Immediate Pre-Op Assessment" },
        { component: "bullets", text: ["Patients sometimes have a pre-op consult; can tailor pre-op assessment to most important issues."] },
        {
            // Set the header as simply the title for the table from the PDF
            component: "table", tableHead: ["Pre-operative assessment questions"], tableData: [
                ["General", "- ID (age/sex)\n- Procedure\n- ASA classification\n- Allergies\n- Medications\n- NPO status\n - Weight (for dosing, especially for pediatric patients)"],
                ["PMHx", "- Surgical/anesthetic Hx: PONV, difficult intubation, post-op delirium \n- CNS: Confusion/delirium, seizures, CVA/TIA, ↑ ICP, spinal cord injury, anxiety, MS, migraines \n- CVS: HTN, dyslipidemia, CHF, MI, CAD, pacemaker, valvular disease, dyshythmia, exercise tolerance\n- RESP: Asthma, COPD, recent URTI, OSA, pulm HTN\n- GI: GERD, hepatic disease, bowel obstruction\n- RENAL: Renal insufficiency, dialysis,\n- HEME: Anemia, coagulopathies, DVT/PE, transfusion hx\n- MSK: Arthritis, disease/trauma/radiation of cervical spine, myopathy, chronic pain\n- ENDO: DM, thyroid disease, adrenal suppression\n- Soc Hx: Pregnancy, EtOH/smoking/recreational drug hx\n- Focused cardiac/resp/neuro exam, vitals\n- Existing sensory/motor deficits\n- Examine back for spinal/epidural if indicated"],
                ["FHx", "- Malignant hyperthermia\n- Pseudocholinesterase deficiency"],
                ["Physical Exam", "- Mallampati classification\n- Oropharynx & airway assessment: inter-incisor gap, neck extension, thyromental distance, mandibular protrusion, upper lip bite test\n- Assess for difficult BMV: BONES (beard, obesity, no teeth, elderly, snoring/sleep apnea) "],
                ["Other", "- Existing dentition (loose, chipped, caps, dentures) - inform patient of risk of damage"],
            ]
        },
        { component: "heading", text: "NPO guidelines" },
        { component: "para", text: "8h: Solid/fatty foods\n6h: Formula/non-human milk/light meal\n4h: Breastmilk\n2h: Clear fluids" },

        /* The heading for this one is supposed to be underlined but who knows how to do that */
        { component: "heading", text: "Previous surgical/anesthetic/family Hx" },
        { component: "para", text: "PMHx of difficult BMV/intubation is one of the best predictors for future attempts. Check the previous anesthetic records and make a note for future reference." },
        {
            component: "table", tableHead: ["ASA Score"], tableData: [
                ["1", "Healthy", ""],
                ["2", "Mild systemic disease", "e.g. Well-controlled HTN, smoker regular ETOH"],
                ["3", "Severe systemic disease with functional limitation", "e.g. Poorly-controlled HTN w renal insufficiency, controlled COPD, fatty liver disease, severe obesity"],
                ["4", "Incapacitating disease with constant threat to life", "e.g. HTN w renal failure on dialysis, poorly-controlled COPD, cirrhosis w varices"],
                ["5", "Moribund, not expected to survive >24h without surgery", "e.g. Acute liver failure, ruptured AAA, massive trauma/hemorrhage"],
                ["6", "Declared brain dead", "Organ donor awaiting transplant"]
            ]
        },
        { component: "para", bold: "✷ ", text: "E added if emergent surgery (e.g. ASA 3E)" },

        /* Quiz stuff for Immediate here */


        { component: "title", text: "Mallampati Classification" },
        { component: "para", bold: "Mallampati classification: what can be visualized?" },
        {
            component: "table", tableHead: ["1", "2", "3", "4"], tableData: [
                ["Faucial pillars,soft palate, entire uvula", "Faucial pillars, soft palate partial uvula", "Soft palate only", "Hard palate only"],
            ]
        },

        { component: "photo", src: 1 },

        /* Quiz stuff for Mallam here */


        { component: "title", text: "Obstructive Sleep Apnea (OSA)" },

        /* All the first text stuff needs to be bolded */
        { component: "para", bold: "Definition: ", text: "Decreased or complete cessation of breathing during sleep. Sleep study showing apnea-hypopnea index (AHI) ≥15/hr, or ≥5 with symptoms or CV comorbidities." },
        { component: "para", bold: "Signs/symptoms: ", text: "↓ SpO2, intermittent hypoxia/hypercapnia." },
        { component: "para", bold: "Complications/comorbidities: ", text: "Systemic/pulmonary HTN, LVH, arrhythmias, cognitive impairment, increased susceptibility to respiratory depression, obesity hypoventilation syndrome." },

        { component: "para", bold: "Risk factors: STOP-BANG ", text: "(≥ 3 = high likelihood of OSA)" },
        /* The first letter needs to be bold and underlined */
        { component: "para", bold: "S", text: "noring" },
        { component: "para", bold: "T", text: "ired (daytime somnolence)" },
        { component: "para", bold: "O", text: "bserved periods of apnea" },
        { component: "para", bold: "P", text: "ressure (HTN)" },
        { component: "para", bold: "B", text: "MI > 35" },
        { component: "para", bold: "A", text: "ge > 50" },
        { component: "para", bold: "N", text: "eck circumference > 40cm" },
        { component: "para", bold: "G", text: "ender (male)" },

        { component: "para", bold: "Pre/intra-operative management: ", text: "Supplemental O2 and adequate pre-oxygenation, CPAP/BiPAP therapy preoperatively (ask patient to bring their own machine), opioid-spar- ing multimodal/regional techniques, reverse Trendelenburg positioning, extubation when awake." },

        { component: "para", bold: "Post-operative management: ", text: "Careful monitoring for apnea and cardiorespiratory complications (may require continuous oximetry monitoring overnight before discharge), supplemental O2, CPAP/BiPAP therapy, semi-upright or lateral position, opioid-sparing analgesia." },

        /* Quiz stuff */


        { component: "heading", text: "Severe Obesity" },

        { component: "para", bold: "Definition: ", text: "BMI ≥35" },

        { component: "para", bold: "Physiological changes: ", text: "↑CO, ↑GFR, ↑ total body weight/volume, ↑ metabolic rate, ↑ oxygen demands." },

        { component: "para", bold: "Complications: ", text: "Difficult BMV, rapid desaturation on induction, ↓ lung volumes, ↓ chest wall/diaphragm compliance (esp with Trendelenburg, pneumoperitoneum), obesity hypoventilation syndrome, OSA." },

        { component: "para", bold: "Pre/intra-operative management: ", text: "Continue CPAP/BiPAP if used at home, consider inherent risk of proposed surgery and assess cardiorespiratory status with appropriate investigations, avoid respiratory depressants, be aware of lipophilic drugs that may have delayed clearance in obese people (e.g. desflurane vs sevoflurane)." },

        { component: "para", bold: "Post-operative management: ", text: "Extubate when awake, optimal positioning, CPAP if used at home, careful monitoring for respiratory complications." },

        /* Quiz stuff */


        { component: "heading", text: "Diabetes Mellitus" },

        { component: "para", bold: "Physiological changes: ", text: "Autonomic dysfunction (orthostatic HTN, hypothermia), HTN, CAD, PVD, CKD, ↓ gastric motility, stiff joint syndrome, hypoglycemia." },

        { component: "para", bold: "Complications: ", text: "Silent MI, poorer wound healing, autonomic/peripheral neuropathy, stiff joint syndrome, “full” stomach." },

        { component: "para", bold: "Pre-operative management: ", text: "Take comprehensive hx (type I or II, glucose control, insulin-dependence, evidence of end-organ/autonomic dysfunction, airway exam, meds), measure glucose frequently, insulin infusion for more aggressive glycemic control, consider RSI if gastroparesis present, hold hypoglycemic agents while NPO and may need to reduce dose the night before procedure. " },

        { component: "para", bold: "Post-operative management: ", text: "Measure glucose frequently, monitor for post-op complications associated with end-organ damage, ensure basal insulin levels, dextrose infusion if hypoglycemic. " },

        /* Quiz stuff */


        { component: "heading", text: "COPD" },

        { component: "para", bold: "Physiological changes: ", text: "Obstructive lung disease, ↑ compliance, ↑ mucus secretions, V/Q mismatch, alveolar hypoventilation, ↓ gas transfer, pulmonary HTN." },

        { component: "para", bold: "Complications: ", text: "Bronchospasm, laryngospasm, hemodynamic instability, baro/volutrauma, auto-PEEP, post-op complications (e.g. infections, respiratory failure)." },

        { component: "para", bold: "Pre/intra-operative management: ", text: "Assess exercise tolerance and severity of disease, counsel on smoking cessation perioperatively, continue puffers until day of surgery, consider regional anesthesia, obtain baseline room air ABG pre-operatively, consider art line (serial ABGs for high-risk patients; comparison to baseline may help guide timing for extubation), positive pressure during preoxygenation." },

        { component: "para", bold: "Post-operative management: ", text: "Respiratory support and close monitoring, suctioning and physiotherapy to avoid sputum plugging, high risk patients should be monitored with ABGs and compared to baseline." },

        /* Quiz stuff */


    ]

}