export const data = {
    body: [
        { component: "title", text: "PACU Handover" },
        { component: "line" },
        {
            component: "table", tableHead: ["", ""], tableData: [
                ["General", "ID (age/sex) \n - Procedure and type of anesthetic \n - Most responsible physician \n - Allergies \n - Significant PMHx/medications"],
                ["Anesthetics", "Anesthetics given \n - NMBA reversed? (Y / N) \n - Intubation (easy / hard, # of attempts)"]
                ["Other", "Significant intra-op events \n - Abx given/time \n - Fluids (in: pRBC, crystalloids; out: UOP, EBL) \n - Foley? (Y / N) \n - Lines (gauge / location) \n - Post-op pain management"]
            ]
        },
        { component: "line" },
        { component: "quiz", question: "", options: [""], answer: "" },
    ]
};