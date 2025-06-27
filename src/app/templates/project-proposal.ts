import { Template } from "./types";

const projectProposal: Template = {
  id: "project-proposal",
  title: "Project Proposal",
  description:
    "Submit project proposals for academic or organizational approval.",
  category: "Work",
  popularity: 60,
  isNew: false,
  glimpse:
    "A formal template for submitting detailed project proposals in organizations or academics.",
  fields: [
    { name: "proposerName", label: "Your Name", type: "text" },
    {
      name: "proposerDesignation",
      label: "Your Designation/Role",
      type: "text",
    },
    { name: "projectTitle", label: "Project Title", type: "text" },
    {
      name: "teamMembers",
      label: "Team Members (comma separated)",
      type: "text",
    },
    { name: "department", label: "Department/Division", type: "text" },
    { name: "organization", label: "Organization Name", type: "text" },
    { name: "recipient", label: "Recipient/Committee Name", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "objective", label: "Project Objective", type: "textarea" },
    { name: "scope", label: "Project Scope", type: "textarea" },
    { name: "timeline", label: "Proposed Timeline", type: "text" },
    { name: "budget", label: "Estimated Budget (₹)", type: "number" },
    { name: "contact", label: "Contact Information", type: "text" },
  ],
  template: `
To,
{{recipient}}
{{department}}, {{organization}}

Date: {{date}}

Subject: Project Proposal – {{projectTitle}}

Respected Sir/Madam,

I, {{proposerName}} ({{proposerDesignation}}), from the {{department}}, am pleased to submit the proposal for the project titled "{{projectTitle}}". The following team members will be involved: {{teamMembers}}.

Project Objective:
{{objective}}

Project Scope:
{{scope}}

Proposed Timeline: {{timeline}}
Estimated Budget: ₹{{budget}}

We believe this project will significantly benefit {{organization}} and align with our strategic goals. Kindly review the proposal and let us know if further details are required.

Thank you for your consideration.

Sincerely,
{{proposerName}}
Contact: {{contact}}
`,
};

export default projectProposal;
