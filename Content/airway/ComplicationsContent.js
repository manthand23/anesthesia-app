export const data = {
    body: [
        { component: "title", text: "Complications and Emergencies" },
        { component: "line" },
        {component: "para", bold: "General strategies for anticipated difficult intubation:"},
        { component: "bullets", text: ["Have a plan and be ready to call for help immediately; have backup equipment in room.", "Use an alternative anesthetic technique (i.e. regional, local) if appropriate.", "Perform awake intubation (patient maintains own airway until intubated). (See Vortex approach and ASA difficult airway algorithm.)"] },
        { component: "line" },

        {component: "para", bold: "Reasons for rapid deterioration/sudden cardiac arrest while intubated/ventilated: DOPES"},
        {component: "para", text: "D - Displaced ETT"},
        {component: "para", text: "O - Obstruction of ETT (secretions/mucous plug)"},
        {component: "para", text: "P - Pneumothorax / PE"},
        {component: "para", text: "E - Equipment failure"},
        {component: "para", text: "S - Stacking breaths (hyperinflation in asthma/COPD patients)"},

        { component: "line" },
        {component: "para", bold: "Diagnostic steps", text: "(process of elimination to determine source). Correlate clinically and with other monitors."},
        {component: "para", text: "1.  Turn FiO2 to 100%."},
        {component: "para", text: "2.  Switch off ventilator and initiate manual ventilation (equipment malfunction)."},
        {component: "para", text: "3.  Inspect entire circuit from anesthetic machine to patient ETT (leaks, kinks)."},
        {component: "para", text: "4.  Auscultate breath sounds bilaterally (pneumothorax, breath stacking)."},
        {component: "para", text: "5.  Suction down ETT (secretions/mucous plug)."},
        {component: "para", text: "6.  Disconnect ETT circuit (auto-PEEP; allow full exhalation)"},
        { component: "line" },

        { component: "heading", text: "Anaphylaxis" },
        {component: "para", bold: "Definition: ", text: "A systemic allergic/hypersensitivity reaction to antigen leading to sudden release of inflammatory mediators by mast cell/basophil degranulation." },
        {component: "para", bold: "Signs/symptoms: ", text: " ↓↓ BP,  ↑ HR, ↓ O2, ↓ ETCO2, high peak airway pressures, shark fin (obstructive) waveform on capnography, dyspnea/wheezing, rash/urticaria." }, 
        {component: "para", bold: "Complications: ", text: " Shock, cardiac/respiratory arrest." },
        {component: "para", bold: "Potential antigens: ", text: " NMBAs, abx, sugammadex, latex products, blood products, IV contrast." },
        {component: "para", bold: "Management: ", text: " Remove potential causal agents, epinephrine (10-100mcg IV bolus, increase dose q2min until clinical improvement), adequate fluid resuscitation, treat bron-chospasm (SABAs, 4-8 puffs), early intubation (if not already and signs of angioedema/severe anaphylaxis), hemodynamic and ventilatory support and monitoring." }, 
    
        { component: "line" },

        { component: "heading", text: "Aspiration" },
        {component: "para", bold: "Definition: ", text: "Inhalation of gastric contents into the trachea and lung." },
        {component: "para", bold: "Signs/symptoms: ", text: " ↓ O2, ↓ HR, laryngospasm, bronchospasm." },
        {component: "para", bold: "Complications: ", text: " Chemical pneumonitis, pneumonia, empyema, ARDS, cardiac arrest." }, 
        {component: "para", bold: "Risk factors: ", text: " Emergency surgery, GERD, pregnancy, trauma, DM, recent food intake, bowel obstruction, obesity." },
        {component: "para", bold: "Prevention: ", text: " Abide by NPO guidelines, ↑ gastric motility (e.g. metoclopromide), ↓gastric acidity (e.g. ranitidine), prophylactic anti-emetics, RSI, NG tube." },
        {component: "para", bold: "Management: ", text: " Suction pharynx/trachea, R tilt to limit spread, 100% FiO2, CPAP/PEEP with lung protective strategies, bronchodilators; empiric abx NOT indicated unless signs of infection are evident." },

        { component: "line" },

        { component: "heading", text: "Bronchospasm" },
        {component: "para", bold: "Definition: ", text: "A reversible involuntary smooth muscle contraction in the bron-chi leading to narrowed airways mediated by vagal innervation." },
        {component: "para", bold: "Signs/symptoms: ", text: " ↓ O2, ↓ ETCO2, high peak airway pressures, shark fin (obstructive) waveform on capnography, dyspnea/wheezing, ↑ expiratory time, ↓ tidal volumes if pressure control ventilation." },
        {component: "para", bold: "Complications: ", text: " Breath stacking/auto-PEEP (bronchospastic patients who develop sud-den ↓↓ BP may be air-trapping)." },
        {component: "para", bold: "Risk factors: ", text: " Asthma, smoking, cold air, inhaled irritants, tracheal intubation/extubation." },
        {component: "para", bold: "Prevention: ", text: " Pre-op prophylactic SABA/steroids, adherence to COPD/asthma therapy, topical lidocaine, ensure adequate anesthesia during intubation/extubation." }, 
        {component: "para", bold: "Management: ", text: " 100% FiO2 with manual bag ventilation, change I:E ratio to allow for ade-quate exhalation, nebulized SABA (salbutamol, 6-8 puffs), IV steroids (e.g. methylprednis-olone 1mg/kg IV), deepen anesthetic (ketamine and sevo/isoflurane have bronchodilatory properties)."},

        { component: "line" },

        { component: "heading", text: "Laryngospasm" },
        {component: "para", bold: "Definition: ", text: "Partial/complete airway obstruction from laryngeal closure reflex (despite inspiratory attempts) due to chemical or mechanical stimuli." },
        {component: "para", bold: "Signs/symptoms: ", text: "↓ O2, ↓ HR, suprasternal indrawing, accessory muscle use, paradoxi-cal breathing, stridor or silent chest." },
        {component: "para", bold: "Complications: ", text: "Negative pressure pulmonary edema, cardiac/respiratory failure. " },
        {component: "para", bold: "Risk factors: ", text: "Pediatric patients, recent URTI, cigarette smoke exposure, emergency surgery, insufficient depth of anesthesia (higher risk during induction and emergence), oropharyngeal secretions." },
        {component: "para", bold: "Prevention: ", text: " Consider delaying elective surgery 2-3w after URTI, apply topical lidocaine, ensure adequate anesthesia before intubation, extubate when deep or fully awake." },
        {component: "para", bold: "Management: ", text: " Continuous positive airway pressure with 100% FiO2 with well-fitting mask and jaw thrust, suction secretions, deepen anesthetic with propofol, use paralytic (succi-nylcholine IV or IM), provide ventilatory support (consider reintubation if needed)." },

        { component: "line" },

        { component: "heading", text: "Status Asthmaticus" },
        {component: "para", bold: "Definition: ", text: "Extreme asthma exacerbation that is unresponsive to SABAs. " },
        {component: "para", bold: "Signs/symptoms: ", text: "↓ O2, ↑↑ RR, ↑HR, prolonged expiration, stridor/wheeze/silent chest, accessory muscle use, suprasternal indrawing." },
        {component: "para", bold: "Complications: ", text: "Altered mental status, pneumothorax, cardiac/respiratory failure. " },
        {component: "para", bold: "Risk factors: ", text: "PMHx hospitalization/ED for asthma, signs of inadequately-controlled asth-ma, URTI, cold air, inhaled irritants." },
        {component: "para", bold: "Management: ", text: "100% FiO2, IV SABAs, IV steroids, IV magnesium sulfate, ketamine or sevo/isoflurane, Heliox, monitor lytes (K+) and fluids. (Intubation is often not required in status asthmaticus and irritates the airway; it is usually reserved for impending respiratory failure." },



        { component: "line" },

        { component: "heading", text: "Pneumothorax" },
        {component: "para", bold: "Definition: ", text: "Gas in the pleural space leading to compression/collapsing of the lung." }, 
        {component: "para", bold: "Signs/symptoms: ", text:"↑ peak inspiratory pressures, ↓ O2, ↓ BP, ↑ HR, narrowed pulse pres-sure, decreased/asymmetrical breath sounds, tracheal deviation." },
        {component: "para", bold: "Complications: ", text: "Tension pneumothorax, cardiac/respiratory arrest." },
        {component: "para", bold: "Risk factors: ", text: "Trauma, COPD, spine or thoracic surgery." },
        {component: "para", bold: "Management: ", text: "Check for mainstem intubation, 100% FiO2, stat U/S for lung sliding or CXR, needle decompression if hemodynamically unstable, thoracostomy, watchful waiting/supportive care if stable." },

        { component: "line" },

        { component: "heading", text: "Can't intubate, can't oxygenate" },
        {component: "para", bold: "Definition: ", text: "A difficult airway that is unable to be intubated or ventilated by BMV." },
        {component: "para", bold: " Signs/symptoms:  ", text: "Failed intubation and ventilation, ↓ O2, cyanosis, respiratory failure." },
        {component: "para", bold: "Complications:  ", text: "Brain damage, death." },
        {component: "para", bold: "Risk factors:  ", text: "Hx of difficult BMV/airway, predictors of difficult BMV/airway." },
        {component: "para", bold: "Prevention:  ", text: "Identify at-risk patients, announce airway plan to team; have a Plan A  (laryngoscopy), Plan B (alternate intubating technique), Plan C (supraglottic airway), Plan D (surgical airway) or wake patient if possible. Have all airway equipment available and ready." },
        {component: "para", bold: " Management:  ", text: "Limit intubation attempts (usually 3 attempts to minimize airway trauma), optimize between attempts (e.g. change position, call for expert, change blade/device), attempt SGA insertion, optimize BMV, oral/nasal airway, surgical airway (cricothyrotomy).(See Vortex approach and ASA difficult airway algorithm.)" },
    

        { component: "line" },
        { component: "heading", text: "Vortex Approach to Emergency Airway Management" },
        {component: "para", text: "“The Vortex implementation tool is based on the premise that there are only three upper airway ‘lifelines’ (non-surgical techniques) by which alveolar oxygen delivery can be es-tablished and confirmed: face mask, supraglottic airway and endotracheal tube. If a ‘best effort’ at each of these three lifelines is unsuccessful then a can’t intubate, can’t oxygenate situation (CICO) situation exists and ‘CICO Rescue’ (emergency front-of-neck access) must be initiated."},
        {component: "para", text: "“Completion of a ‘best effort’ at any of the three upper airway lifelines without being able to restore alveolar oxygen delivery mandates spiral movement inward towards the next lifeline. The circular arrangement of the three lifelines on the tool means that airway management can be initiated using any lifeline and proceed to the remaining ones in whatever sequence is judged most appropriate in the clinical circumstances. A list of five categories of optimisation, applying equally to each of the three lifelines, is provided to prompt consideration of the available options for maximising success during a best effort at any lifeline."},
        {component: "para", text: "“Completion of best efforts at all three lifelines without restoring alveolar oxygen delivery culminates in spiral movement to the centre zone of the tool, representing the need to initiate CICO Rescue. Conversely, confirmation of alveolar oxygen delivery using any of the three lifelines, results in outward movement into the circumferential ‘Green Zone’. The Green Zone prompts recognition of the opportunity to re-oxygenate, gather resources and develop a strategy, that arises whenever alveolar oxygen delivery is able to be established. The Green Zone is also visible in the centre of the tool to remind clinicians that, when all three lifelines have been unsuccessful, CICO Rescue also restores alveolar oxygen delivery and provides the same opportunities.”"},
        {component: "para", text: "Read more at http://vortexapproach.org"},

        { component: "photo", src: 8 },

        { component: "line" },
        { component: "heading", text: "ASA Difficult Airway Algorithm" },
        { component: "photo", src: 9 },




        { component: "line" },

        { component: "quiz", question: "", options: [""], answer: "" },
    ]
};