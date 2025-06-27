export type TemplateField = {
  name: string;
  label: string;
  type: "text" | "textarea" | "date" | "number";
};

export type Template = {
  id: string;
  title: string;
  description: string;
  category: string;
  fields: TemplateField[];
  template: string;
};

export const templates: Template[] = [
  {
    id: "leave-application",
    title: "Leave Application",
    description: "Request time off with a formal leave letter template.",
    category: "Student",
    fields: [
      { name: "yourName", label: "Your Name", type: "text" },
      { name: "reason", label: "Reason", type: "textarea" },
      { name: "fromDate", label: "Start Date", type: "date" },
      { name: "toDate", label: "End Date", type: "date" },
    ],
    template: `
Dear Sir/Madam,

I am {{yourName}}, and I would like to request leave from {{fromDate}} to {{toDate}} due to {{reason}}.

Sincerely,
{{yourName}}
`,
  },
  {
    id: "resignation-letter",
    title: "Resignation Letter",
    description: "Resign from your job professionally and politely.",
    category: "Work",
    fields: [
      { name: "yourName", label: "Your Name", type: "text" },
      { name: "position", label: "Your Position", type: "text" },
      { name: "lastWorkingDay", label: "Last Working Day", type: "date" },
      { name: "reason", label: "Reason (optional)", type: "textarea" },
    ],
    template: `
Dear Sir/Madam,

I, {{yourName}}, hereby submit my resignation from the position of {{position}}. My last working day will be {{lastWorkingDay}}. {{reason}}

Thank you for the opportunities and support.

Sincerely,
{{yourName}}
`,
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate Request",
    description: "Request a bonafide certificate from your institution.",
    category: "Student",
    fields: [
      { name: "yourName", label: "Your Name", type: "text" },
      { name: "course", label: "Course/Program", type: "text" },
      { name: "purpose", label: "Purpose", type: "textarea" },
    ],
    template: `
To Whom It May Concern,

This is to request a bonafide certificate for {{yourName}}, enrolled in {{course}}, for the purpose of {{purpose}}.

Thank you.
`,
  },
  {
    id: "internship-application",
    title: "Internship Application",
    description: "Apply for internships with a formal application letter.",
    category: "Work",
    fields: [
      { name: "yourName", label: "Your Name", type: "text" },
      { name: "position", label: "Internship Position", type: "text" },
      { name: "company", label: "Company Name", type: "text" },
      { name: "duration", label: "Duration", type: "text" },
    ],
    template: `
Dear Sir/Madam,

I am {{yourName}} and I wish to apply for the position of {{position}} at {{company}} for a duration of {{duration}}.

Looking forward to your response.

Sincerely,
{{yourName}}
`,
  },
  {
    id: "bank-account-opening",
    title: "Bank Account Opening Letter",
    description: "Request to open a new bank account with a formal letter.",
    category: "Finance",
    fields: [
      { name: "yourName", label: "Your Name", type: "text" },
      { name: "accountType", label: "Account Type", type: "text" },
    ],
    template: `
To The Branch Manager,

I am {{yourName}} and I would like to request the opening of a {{accountType}} account at your branch.

Thank you.
`,
  },
];
