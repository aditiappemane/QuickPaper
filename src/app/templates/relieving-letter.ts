import { Template } from "./types";

const relievingLetter: Template = {
  id: "relieving-letter",
  title: "Relieving Letter",
  description:
    "Officially confirm an employee’s release from duties after resignation.",
  category: "Work",
  popularity: 56,
  isNew: true,
  glimpse:
    "A formal letter issued by the employer to confirm an employee’s resignation and release.",
  fields: [
    { name: "employeeName", label: "Employee Name", type: "text" },
    { name: "employeeId", label: "Employee ID", type: "text" },
    { name: "designation", label: "Designation", type: "text" },
    { name: "department", label: "Department", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "joiningDate", label: "Date of Joining", type: "date" },
    { name: "relievingDate", label: "Date of Relieving", type: "date" },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
    { name: "date", label: "Date of Issue", type: "date" },
  ],
  template: `
[Company Letterhead]

Date: {{date}}

To,
{{employeeName}}
Employee ID: {{employeeId}}
{{designation}}, {{department}}
{{company}}

Subject: Relieving Letter

Dear {{employeeName}},

This is to formally acknowledge receipt of your resignation letter and to confirm that you have been relieved from your duties as {{designation}} in the {{department}} department at {{company}}, effective from {{relievingDate}}.

We appreciate your contributions to the organization during your tenure from {{joiningDate}} to {{relievingDate}}. We wish you all the best in your future endeavors.

If you require any further information, please feel free to contact us.

Sincerely,
{{issuerName}}
{{issuerDesignation}}
{{company}}
`,
};

export default relievingLetter;
