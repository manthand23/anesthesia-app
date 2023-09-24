import line from "../../Components/line";

export const data = {
    body: [
        { component: "title", text: "Complications and Emergencies" },
        { component: "line" },
        { component: "heading", text: "Auto-PEEP/Dynamic Hyperinflation" },
        { component: "para", bold: "Definition: ", text: "Occurs when the lungs do not fully deflate and leads to air-trapping; this increases the dead space ventilation and V/Q mismatch." },
        { component: "para", bold: "Signs/Symptoms: ", text: "Expiratory flow does not reach zero, ↓ BP, ↓ SpO2, ↓ ETCO2, wheezing." },
        { component: "para", bold: "Complications: ", text: "Hemodynamic instability, baro/volutrauma, ↑ work of breathing."},
        { component: "para", bold: "DDx: ", text: "Bronchospasm (especially in asthma, COPD patients), pulmonary edema, pneumothorax,aspiration/ secretions, obstructed filters/tubing, ↑ RR."},
        { component: "para", bold: "Risk factors: ", text: "Asthma, COPD, short expiratory time in ventilatory settings."},
        { component: "para", bold: "Management: ", text: "Check for circuit malfunction, immediately disconnect patient from the ventilator and allow full expiration before reconnecting, ↓ tidal volume and ↑ I:E, treat underlying cause."},

        { component: "line" },
        { component: "heading", text: "Myocardial Ischemia/Infarction" },
        { component: "para", bold: "Definition: ", text: "Decreased blood flow to the heart from CAD/plaque rupture (type I) or oxygen supply-demand mismatch (type II) leading to myocardial ischemia." },
        { component: "para", bold: "Signs/Symptoms: ", text: "ST elevation/depression, unexplained ↑ HR or ↓ BP, arrhythmias, new Q waves, new LBBB." },
        { component: "para", bold: "Complications: ", text: "Cardiogenic shock, cardiac arrest."},
        { component: "para", bold: "DDx: ", text: "Cardiac tamponade, arrhythmia, PE."},
        { component: "para", bold: "Risk factors: ", text: "CAD/CHF and associated risk factors, vascular surgeries, major abdominal/ thoracic/ENT surgeries, significant bleeding/anemia."},
        { component: "para", bold: "Management: ", text: "Varies significantly based on many factors such as reason for surgery/ urgency, type of surgery, patient condition and PMHx, timing and severity of ischemic event (e.g. before incision vs open abdomen), possible reasons for myocardial ischemia (and whether management would change), among others. General principles include maximizing myocardial oxygenation and decreasing demand. Consult cardiology for disposition and follow-up care if possible.", component:"line", component:"bullets", text: ["Two very simplistic examples:", "e.g. ASA2, pre-incision, post-intubation, elective operation, new ECG changes -> consult with cardiology, surgical team regarding best management plan (e.g. proceed or reschedule surgery, disposition)", "e.g. ASA5E, trauma surgery -> patient would not survive without surgical intervention regardless; optimize myocardial and hemodynamic stability while minimizing surgical insult/time if possible. Management of acute ischemia/infarction most likely will occur after the surgery with cardiology in CCU/ICU."]},

        { component: "line" },
        { component: "quiz", question: "", options: [""], answer: "" },
    ]
};