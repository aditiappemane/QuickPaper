import { Template } from "./types";

const offerLetter: Template = {
  id: "offer-letter",
  title: "Offer Letter",
  description: "Officially offer a job position to a candidate.",
  category: "Work",
  popularity: 63,
  isNew: true,
  glimpse:
    "A formal letter template for extending a job offer to a selected candidate.",
  fields: [
    { name: "candidateName", label: "Candidate's Name", type: "text" },
    { name: "position", label: "Position Offered", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "joiningDate", label: "Proposed Joining Date", type: "date" },
    { name: "salary", label: "Salary/Compensation", type: "text" },
    { name: "hrContact", label: "HR Contact Name", type: "text" },
    { name: "hrEmail", label: "HR Contact Email", type: "text" },
    { name: "date", label: "Date", type: "date" },
  ],
  template: `
[Company Letterhead]

Date: {{date}}

To,
{{candidateName}}

Subject: Offer of Employment

Dear {{candidateName}},

We are pleased to offer you the position of {{position}} at {{company}}. Your skills and experience will be a valuable addition to our team.

Your employment will commence on {{joiningDate}}. The annual compensation for this role will be {{salary}}. Further details regarding benefits, reporting structure, and company policies will be provided upon your joining.

Please confirm your acceptance of this offer by replying to this email or contacting our HR representative, {{hrContact}}, at {{hrEmail}}.

We look forward to welcoming you to {{company}}.

Sincerely,
{{hrContact}}
HR Department
{{company}}
`,
};

export default offerLetter;
