export const data = {
    body: [
        { component: "title", text: "Immediate Pre-Op Assessment" },
        /*{ component: "heading", text: "Identify and quantify concerns to adapt your anesthetic management:" },*/
        { component: "bullets", text: ["May be ordered in pre-op to assess patient condition and potential ways to optimize before surgery. Labs can be redone just prior to surgery if indicated.", "Always consider if pre-op testing is truly beneficial to patient care before ordring, especially for asymptomatic patients undergoing low-risk surgery.", "See https://choosingwiselycanada.org/anesthesiology for details."]},
        {
            component: "table", tableHead: ["Investigation", "Indications"], tableData: [
                ["CBC", "- Major surgery requiring group & screen or match\n- Malignancy\n- Chronic CV, respiratory, renal, hepatic disease\n- Suspected or known anemia or coagulopathy\n- Patient <1y/o"],
                ["INR/PTT", "- Anticoagulation therapy\n- Suspected or known coagulopathy\n- Hepatic disease"],
                ["Lytes/creatinine", "- Therapies affecting lytes (e.g. diuretics)\n- HTN\n- Diabetes\n- Renal, adrenal, or pituitary disease"],
                ["Fasting glucose", "- Diabetes"],
                ["β-HCG", "- Potentially pregnant women"],
                ["ECG/Echo", "- Suspected or known CAD, arrhythmias, PVD, other CV or structural disease; valvular disease or heart failure\n - For asymptomatic patients with clinical risk factors having intermediate/high-risk surgeries"],
                ["CXR", "- Part of oncological workup/surgery\n - Acute/chronic cardiorespiratory disease if it will change management"]
            ]
        },
    ]

}