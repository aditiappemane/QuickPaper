import { Template } from "./types";

const professionalReferenceLetter: Template = {
  id: "professional-reference-letter",
  title: "Professional Reference Letter",
  description:
    "Provide a formal reference for a colleague, employee, or professional contact.",
  category: "Work",
  popularity: 66,
  isNew: true,
  glimpse:
    "A formal letter template to endorse a candidate’s skills, character, and achievements for a new role or opportunity.",
  fields: [
    { name: "referrerName", label: "Your Name", type: "text" },
    { name: "referrerPosition", label: "Your Position/Title", type: "text" },
    {
      name: "referrerCompany",
      label: "Your Company/Organization",
      type: "text",
    },
    { name: "referrerAddress", label: "Your Address", type: "text" },
    { name: "referrerContact", label: "Your Email or Phone", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    { name: "recipientPosition", label: "Recipient's Position", type: "text" },
    {
      name: "recipientCompany",
      label: "Recipient's Company/Organization",
      type: "text",
    },
    { name: "recipientAddress", label: "Recipient's Address", type: "text" },
    { name: "subject", label: "Subject (optional)", type: "text" },
    { name: "candidateName", label: "Candidate's Name", type: "text" },
    {
      name: "relationship",
      label: "Your Relationship to Candidate",
      type: "text",
    },
    { name: "duration", label: "Duration Known", type: "text" },
    { name: "skills", label: "Key Skills/Strengths", type: "textarea" },
    {
      name: "achievements",
      label: "Notable Achievements/Examples",
      type: "textarea",
    },
    { name: "conclusion", label: "Closing Endorsement", type: "textarea" },
  ],
  template: `
{{referrerName}}
{{referrerPosition}}
{{referrerCompany}}
{{referrerAddress}}
Contact: {{referrerContact}}

Date: {{date}}

{{recipientName}}
{{recipientPosition}}
{{recipientCompany}}
{{recipientAddress}}

Subject: {{subject || ("Professional Reference for " + candidateName)}}

Dear {{recipientName}},

I am pleased to provide this reference for {{candidateName}}, whom I have known as a {{relationship}} for the past {{duration}}.

During this time, {{candidateName}} consistently demonstrated {{skills}}. For example, {{achievements}}

I am confident that {{candidateName}} will bring the same level of commitment and excellence to your organization. {{conclusion}}

If you require any further information, please feel free to contact me.

Sincerely,
{{referrerName}}
{{referrerPosition}}
{{referrerCompany}}
`,
};

export default professionalReferenceLetter;
