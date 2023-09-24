import components from "../../components";

export const data = {
    body: [
        { component: "title", text: "The Anesthetic Machine" },
        { component: "line" },
        { component: "bullets", text: ["Accurately mixes and monitors deliverance of air, oxygen, and anesthetic gases", "Scavenges/recycles unconsumed gasses", "Enables various ventilation strategies", "Operates as a semi-closed circuit:"] },
            {component: "bullets", text: ["Fresh gas flow is the rate at which fresh gas enters the ventilator system enters the circuit from the wall supply. Because the system is a semi-closed circuit, any fresh gas that enters must be balanced by the same amount of gas leaving."]},
                {component: "bullets", text: ["The concentration and flow rate of the gases can be set independently by the anesthesiologist (fresh gas control) or automatically by the machine if a certain end-tidal concentration is set (end-tidal control).", " Consider the gases:"]},
                    {component: "bullets", text: ["O2: a 70kg human consumes approx. 250mL/min of O2 at rest.", "CO2: resorbed by the CO2 absorber; not rebreathed.", "Anesthetic vapours: the machine will add anesthetic gases to maintain a steady concentration (when using end-tidal control)"]},
                {component:"bullets", text: ["Therefore, if flow is above 0.25L O2/min (often around 0.5L/min), there will be enough O2 for the patient and the other parameters are not a factor.", "For acute changes to the equilibrium in the circuit, increase the flow." ]},
                    {component: "bullets", text: [" Suppose the patient is breathing 40% FiO2 but desaturating. We need to increase to 100% FiO2 quickly. The ventilator will feed fresh gas of 100% O2 at the current flow rate. If flow is 0.5L/min, then it will take a long time to replace the gas within the circuit. If flow is 10L/min, then the circuit will rapidly equilibrate to contain 100% O2. However, this also means that 10L/min of gas is being vented away from the circuit.", "During maintenance, we may use low flows because we are not actively changing our gas parameters. We can increase flow during induction, emergence, and critical events."]},
        {component: "bullets", text: ["Inspired concentrations of gases from the circuit is what is inhaled by patient. This is determined by addition of gases to the circuit (the concentration and flow rate of the fresh gas flow), and by the elimination of gases by the patient (i.e. utilization of O2, redistribution of anesthetic gases to body tissues).", "End-tidal concentrations of gases (CO2, anesthetic agents (i.e. MAC)) entering the circuit are measured in the patient’s exhalation.", "When fresh gas flow rate is high, the gas in the circuit will be similar to the fresh gas flows, since it equilibrates quickly. When the fresh gas flow rate is low, the gas concentrations in the circuit (thus the inspired concentration) may be quite different from the fresh gas flow since it may be consumed/eliminated by the patient faster than is being added to the circuit."]},
        
        { component: "line" },
        { component: "heading", text: "Components of the machine: (see labelled images following)" },
        {component: "bullets", text: ["Bellows: Pushes air through the circuit when the ventilator is ON. Some models may not have visible bellows.", "Ventilator switch: Turns ventilator on/off. May be integrated into the monitors on some machines."]},
            {component: "bullets", text: ["MAN/SPON (left) - Used for spontaneously breathing patients or when bagging manually.", "VENT (right) – Ventilator is on."]}, 
        {component: "bullets", text: ["Adjustable pressure-limiting (APL) valve: Controls the maximum circuit pressure when the ventilator is OFF (i.e. set to MAN/SPON)."]},
            {component: "bullets", text: ["Spontaneously-ventilated patients: 0cm H2O", "Bagging by mask: <20 cm H2O (exceptions include emergencies like laryngospasm)", "Bagging by ETT: <40 cm H2O"]}, 
        {component: "bullets", text: ["Bag: For manual ventilation (OFF). This will move during spontaneous ventilation, or you can manually ventilate if the APL >0 cm H2O.", "Circuit: Tubing that connects the machine to the patient.", "Suction canister & suction", "CO2 absorber: Removes CO2 from the circuit. Contents will change colour as CO2 is removed; should be replaced as needed.", "Separate “wall” O2: Functions like a regular oxygen regulator and is NOT connected to the main circuit.", "Agent vaporizer: Contains the volatile anesthetic gas. Must be removed from machine prior to refilling.", "Suction switch: Turns suction on/off.", "Circuit O2 flush: Flushes O2 into the circuit at high flow. Has to be used with caution if the patient is connected to the circuit."]},

        { component: "line" },
        { component: "photo", src: 5 },
        { component: "line" },
        { component: "quiz", question: "", options: [""], answer: "" },
    ]
};