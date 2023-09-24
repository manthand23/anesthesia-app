export const data = {
    body: [
        { component: "title", text: "Hypoventilation and Hypoxemia" },
        { component: "line" },
        {component: "para", bold: "Risk factors for hypoventilation"},
        { component: "bullets", text: ["Prolonged sedation period", "Opioid-induced respiratory depression", "OSA", "Obesity hypoventilation syndrome"] },
        { component: "line" },

        {component: "para", bold: "Causes of hypoxemia"},

        {
            component: "table", tableData: [
                ["Artifact \n - Incorrect probe position\n - Nail polish", "Hypoventilation \n - ↓ Tidal volume\n -  ↓  RR \n - Displaced/obstructed ETT, kinked line, equipment failure\n - Post-extubation: prolonged NMB, opioids, high spinal"],
                ["↓ PO2 \n - ↓ FiO2\n - If on 100% FiO2: machine O2 failure\n - or gas mismatch", "↓ O2 Delivery \n - Diffusion problem (e.g. COPD, ILD)\n - Methemoglobinemia, carboxyhemo-globin"],
                ["V/Q Mismatch \n - Aspiration\n - Bronchospasm\n - Mainstem intubation\n - Embolism (air, fat, plaque, amniotic fluid) \n - Pneumo/hemothorax \n - Atelectasis\n - PMHx (e.g. asthma, COPD, ILD, CHF, pneumonia)\n - Patient positioning", "↑ O2 consumption\n - MH\n - Sepsis\n - Thyroid storm/thyrotoxicosis"]  
            ]
        },

        { component: "heading", text: "" },
        { component: "bullets", text: [""] },
        { component: "photo", src: 1 },
        { component: "bullets", text: [""] },
        {component: "para", bold: "", text: ""},
        { component: "photo", src: 2 },
        { component: "quiz", question: "", options: [""], answer: "" },
    ]
};