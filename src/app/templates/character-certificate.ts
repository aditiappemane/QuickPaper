import { Template } from "./types";

const characterCertificate: Template = {
  id: "character-certificate",
  title: "Character Certificate",
  description:
    "Certify the good character and conduct of a student or employee.",
  category: "Student",
  popularity: 57,
  isNew: true,
  glimpse:
    "A formal certificate to attest to the good character and behavior of an individual.",
  fields: [
    { name: "personName", label: "Person's Name", type: "text" },
    { name: "personId", label: "Roll/Employee ID", type: "text" },
    { name: "courseOrDesignation", label: "Course/Designation", type: "text" },
    {
      name: "organization",
      label: "Institution/Organization Name",
      type: "text",
    },
    { name: "duration", label: "Duration of Association", type: "text" },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
    { name: "date", label: "Date of Issue", type: "date" },
  ],
  template: `
[Institution/Organization Letterhead]

Date: {{date}}

TO WHOM IT MAY CONCERN

This is to certify that Mr./Ms. {{personName}} (ID: {{personId}}) has been a {{courseOrDesignation}} at {{organization}} for the period of {{duration}}.

During this time, their conduct and character have been found to be good. To the best of our knowledge, there is nothing adverse against them.

This certificate is being issued upon their request for whatever purpose it may serve.

Sincerely,
{{issuerName}}
{{issuerDesignation}}
{{organization}}
`,
};

export default characterCertificate;
