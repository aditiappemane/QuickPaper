import { Template } from "./types";

const warningLetter: Template = {
  id: "warning-letter",
  title: "Warning Letter",
  description:
    "Formally address misconduct, policy violations, or performance issues.",
  category: "Work",
  popularity: 54,
  isNew: true,
  glimpse:
    "A formal letter template for issuing a warning to an employee, student, or team member.",
  fields: [
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    { name: "recipientId", label: "Employee/Student ID", type: "text" },
    { name: "designationOrClass", label: "Designation/Class", type: "text" },
    {
      name: "organization",
      label: "Organization/Institution Name",
      type: "text",
    },
    { name: "date", label: "Date", type: "date" },
    { name: "offense", label: "Nature of Offense/Violation", type: "textarea" },
    { name: "incidentDate", label: "Date of Incident", type: "date" },
    {
      name: "consequences",
      label: "Consequences if Repeated",
      type: "textarea",
    },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
  ],
  template: `
[Organization/Institution Letterhead]

Date: {{date}}

To,
{{recipientName}}
{{designationOrClass}}
ID: {{recipientId}}
{{organization}}

Subject: Warning Letter

Dear {{recipientName}},

This letter serves as a formal warning regarding the following matter:

Offense: {{offense}}
Date of Incident: {{incidentDate}}

Such conduct is a violation of our policies and is viewed very seriously. You are hereby advised to refrain from repeating this behavior in the future. If such an incident occurs again, {{consequences}}

Please treat this as an official warning and take corrective action immediately.

Sincerely,
{{issuerName}}
{{issuerDesignation}}
{{organization}}
`,
};

export default warningLetter;
