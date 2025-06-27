import { Template } from "./types";

const simpleResignationLetter: Template = {
  id: "simple-resignation-letter",
  title: "Simple Resignation Letter",
  description:
    "Formally resign from your position with a professional, straightforward letter.",
  category: "Work",
  popularity: 67,
  isNew: true,
  glimpse:
    "A concise, professional resignation letter for any job or position.",
  fields: [
    { name: "employeeName", label: "Your Name", type: "text" },
    { name: "employeeAddress", label: "Your Address", type: "text" },
    { name: "employeeEmail", label: "Your Email", type: "text" },
    { name: "employeePhone", label: "Your Phone Number", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "managerName", label: "Manager's Name", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    { name: "jobTitle", label: "Your Job Title", type: "text" },
    { name: "lastWorkingDay", label: "Last Working Day", type: "date" },
    {
      name: "gratitude",
      label: "Thank You/Gratitude Statement",
      type: "textarea",
    },
    {
      name: "transitionOffer",
      label: "Transition Offer (optional)",
      type: "textarea",
    },
  ],
  template: `
{{employeeName}}
{{employeeAddress}}
Email: {{employeeEmail}}
Phone: {{employeePhone}}

Date: {{date}}

{{managerName}}
{{company}}
{{companyAddress}}

Dear {{managerName}},

Please accept this letter as formal notice of my resignation from my position as {{jobTitle}} at {{company}}. My last working day will be {{lastWorkingDay}}.

{{gratitude}}

{{transitionOffer}}

Thank you for your support and understanding.

Sincerely,
{{employeeName}}
`,
};

export default simpleResignationLetter;
