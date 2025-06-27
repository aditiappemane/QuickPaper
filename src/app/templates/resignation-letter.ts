import { Template } from "./types";

const resignationLetter: Template = {
  id: "resignation-letter",
  title: "Resignation Letter",
  description: "Resign gracefully and professionally",
  category: "Work",
  popularity: 90,
  isNew: false,
  glimpse: "Professional resignation notice with proper notice period.",
  fields: [
    { name: "employeeName", label: "Your Name", type: "text" },
    { name: "managerName", label: "Manager's Name", type: "text" },
    { name: "position", label: "Your Position", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "lastWorkingDay", label: "Last Working Day", type: "date" },
    { name: "reason", label: "Reason for Resignation", type: "textarea" },
  ],
  template: `[Your Name]
[Your Address]
[City, State, Zip Code]
[Email Address]
[Phone Number]
[Date]

{{managerName}}
[Manager's Position]
{{company}}
[Company Address]
[City, State, Zip Code]

Dear {{managerName}},

Please accept this letter as formal notification that I am resigning from my position as {{position}} at {{company}}. My last day of employment will be {{lastWorkingDay}}.

{{reason}}

I would like to express my gratitude for the opportunities I've had during my time at {{company}}. I've learned a great deal and appreciate the support I've received.

Please let me know how I can assist during this transition period. I'm committed to ensuring a smooth handover of my responsibilities.

Thank you for your understanding.

Sincerely,
{{employeeName}}`,
};

export default resignationLetter;
