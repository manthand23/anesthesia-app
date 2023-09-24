export const data = {
    body: [
        { component: "title", text: "CAS Standard Monitoring Guidelines" },
        { component: "line" },
        {
            component: "table", tableData: [
                ["Required continously: \n Oxygenation \n 1. Pulse oximeter \n \n Ventilation: \n 2. ET CO2 capnography \n 3. Agent-specific anesthetic gas monitor \n \n Circulation: \n 4. ECG \n 5. NIBP (q3 - 5 m)", "Available for use without delay: \n- Temperature probe \n- Peripheral nerve stimulator \n- Stethoscope \n \n Available without undue delay: \n- Spirometer for tidal volume \n- Manometer for ETT cuff pressure"],
            ]
        },
        { component: "heading", text: "Pulse Oximetry" },
        { component: "bullets", text: ["Provides an estimate of arterial oxygenation expressed as percent saturation", "Tracing can be used to assess HR, perfusion status, volume status (plethysmography variation index)", "Falsely-low SpO2: Methemoglobin (SpO2 approaches 85%; may be falsely higher or lower), nail polish, shivering, ↓ perfusion, misplaced sensor, IV dyes such as methylene blue.", "No effect on SpO2: HbF, HbS, bilirubin.", "Falsely-high SpO2: Carboxyhemoglobin, red nail polish."] },
        { component: "line" },
        { component: "heading", text: "Non-Invasive BP" },
        { component: "bullets", text: ["May be used with invasive monitoring techniques (e.g.art-line)"]},
        { component: "line" },
        { component: "heading", text: "ECG" },
        { component: "bullets", text: ["Usually 3 or 5 electrodes; defaults to monitoring lead II", "3 electrode: “White on the right, smoke (black) over fire (red).”", "5 electrode: “Snow (white) over trees (green); chocolate (brown) close to the heart.”"], 
            component: "bullets", text: ["White = R arm", "Black = L arm", "Red = L leg", "Green = R leg", "Brown = V5" ]},
        { component: "photo", src: 3 },
        { component: "line" },
        { component: "heading", text: "Capnography" },
        { component: "bullets", text: ["Waveform and numerical measurement of end-tidal concentration of CO2.", "ETCO2 is ~2-5mmHg lower than PaCO2 in healthy lungs (normal PaCO2 is 35-45mmHg). This gradient is due to mixing with anatomic, alveolar, or mechanical dead space air; the gradient is increased in diseased lungs and in cases of poor pulmonary perfusion.", "Reasons for increased ETCO2: Hypermetabolic states (e.g. MH, sepsis), sudden release of tourniquet, insufflation with CO2 (e.g. laparoscopic surgery), hypoventilation, rebreathing, saturated CO2 absorber.", "Reasons for decreased ETCO2: Hypometabolic states (e.g. hypothermia), decreased pulmonary blood flow (e.g. PE), hyperventilation, tubing leakage/kink, low cardiac output states."]},
        { component: "line" },
        
        { component: "photo", src: 4 },
        { component: "quiz", question: "", options: [""], answer: "" },
    ]
};