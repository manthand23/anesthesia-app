export const data = {
    body: [
        { component: "title", text: "Basics of Mechanical Ventilation" },
        { component: "line" },
        { component: "para", bold: "Pressure control: ", text: "Set inspiratory pressure applied per breath."},
        { component: "para", bold: "Volume control: ", text: "Set tidal volume per breath."},
        { component: "para", bold: "Trigger: ", text: "What initiates the breath (i.e. pressure vs flow)?"},
        { component: "para", bold: "Limit: ", text: "What determines the volume given (i.e. patient vs ventilator)?"},
        { component: "para", bold: "Cycle: ", text: "What determines the end of a breath (i.e. flow vs time)?"},
        { component: "para", bold: "Tidal volume: ", text: "The volume of air expired in one breath (typically ~6mL/kg)."},
        { component: "para", bold: "Minute ventilation: ", text: "The total volume of air inhaled or exhaled in one minute. Tidal volume x RR."},
        { component: "para", bold: "I:E ratio: ", text: "Ratio of time spent in inspiratory phase:expiratory phase. Normally 1:2 but can be decreased (e.g. 1:3) for patients with obstructive lung disease to reduce risk of hyperinflation."},
        { component: "para", bold: "Positive End-Expiratory Pressure (PEEP): ", text: "Maintains patency of small airways with positive pressure at the end of exhalation; ↓ preload, ↑ ICP."},
        { component: "para", bold: "Compliance: ", text: "ΔVolume/ΔPressure"},
        { component: "line" },

        { component: "heading", text: "Basic Ventilation Settings" },

        { component: "para", bold: "Volume Control (VC): ", text: "Set VT and RR; machine delivers this minute ventilation at a constant flow rate."},
            { component: "para", bold: "Advantages: ", text: "Delivers a guaranteed tidal volume."},
            { component: "para", bold: "Disadvantages: ", text: "Associated with higher inspiratory pressures and barotrauma"},
        { component: "para", bold: "Pressure-Control Ventilation (PCV): ", text: "Set inspiratory pressure and RR; machine delivers this pressure for a specified inspiratory time."},
            { component: "para", bold: "Advantages: ", text: "Associated with lower inspiratory pressures and lowers barotrauma risk."},
            { component: "para", bold: "Disadvantages: ", text: "Tidal volume varies with changing lung compliance (e.g. insufflation, patient positioning, changes in muscle relaxation)."},
        { component: "para", bold: "Pressure-Control Ventilation with Volume Guarantee (PCV-VG): ", text: "Machine delivers set tidal volume at minimum required inspiratory pressure and is adjusted breath-by-breath. Guarantees a minimum minute ventilation while minimizing risk of barotrauma. Common ventilation mode intraoperatively."},
        { component: "para", bold: "Synchronized Intermittent Mandatory Ventilation (SIMV): ", text: "Machine synchronizes with patient’s breathing pattern and delivers ventilator breaths between patient-triggered breaths to achieve a minimum minute ventilation. Ventilator breaths can be delivered with volume or pressure control."},
        { component: "para", bold: "Pressure-Support Ventilation (PSV): ", text: "Ventilator supports each patient-triggered breath with set pressure; machine does not initiate breaths (prolonged periods of apnea will lead trigger safety-net ventilator-initiated breath). Can be used with CPAP for improved alveolar recruitment."},
            { component: "para", bold: "Advantages: ", text: "Can be used for patients who can spontaneously breathe but require intubation (e.g. altered mental status, intra-op procedures where mechanical ventilation is not required), prior to extubation/transitioning from mechanical ventilation to sponta- neous ventilation."},
            { component: "para", bold: "Disadvantages: ", text: "Not appropriate for unstable/fatigued/apneic patients."},

       
        { component: "line" },

        { component: "quiz", question: "", options: [""], answer: "" },
    ]
};