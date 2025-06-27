import { Template } from "./types";

const experienceCertificate: Template = {
  id: "experience-certificate",
  title: "Experience Certificate",
  description:
    "Certify an employee's work experience and tenure at an organization.",
  category: "Work",
  popularity: 68,
  isNew: true,
  glimpse:
    "A formal certificate issued by an employer to confirm an employee’s period of service and conduct.",
  fields: [
    { name: "employeeName", label: "Employee Name", type: "text" },
    { name: "employeeId", label: "Employee ID", type: "text" },
    { name: "designation", label: "Designation", type: "text" },
    { name: "organization", label: "Organization Name", type: "text" },
    { name: "joiningDate", label: "Joining Date", type: "date" },
    { name: "relievingDate", label: "Relieving Date", type: "date" },
    { name: "remarks", label: "Remarks (optional)", type: "textarea" },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
    { name: "date", label: "Date of Issue", type: "date" },
  ],
  template: `
[Company Letterhead]

Date: {{date}}

To Whom It May Concern,

This is to certify that Mr./Ms. {{employeeName}} (Employee ID: {{employeeId}}) was employed with {{organization}} as a {{designation}} from {{joiningDate}} to {{relievingDate}}.

During their tenure, {{employeeName}} performed their duties diligently and maintained good conduct. {{remarks}}

We wish them all the best in their future endeavors.

Sincerely,
{{issuerName}}
{{issuerDesignation}}
{{organization}}
`,
};

export default experienceCertificate;
