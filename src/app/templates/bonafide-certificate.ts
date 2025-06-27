import { Template } from "./types";

const bonafideCertificate: Template = {
  id: "bonafide-certificate",
  title: "Bonafide Certificate",
  description:
    "Request a bonafide certificate from your institution for academic or official purposes.",
  category: "Student",
  popularity: 85,
  isNew: true,
  glimpse: "Certificate request for academic or official purposes.",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "studentId", label: "Student ID", type: "text" },
    { name: "course", label: "Course/Program", type: "text" },
    { name: "institutionName", label: "Institution Name", type: "text" },
    { name: "institutionAddress", label: "Institution Address", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "purpose", label: "Purpose for Certificate", type: "textarea" },
  ],
  template: `
To,
The Principal
{{institutionName}}
{{institutionAddress}}

Date: {{date}}

Subject: Request for Bonafide Certificate

Respected Sir/Madam,

I, {{studentName}} (Student ID: {{studentId}}), am a student of {{course}} at your esteemed institution. I kindly request you to issue a bonafide certificate for the following purpose:

{{purpose}}

I would appreciate it if you could process my request at the earliest. Please let me know if any further information or documentation is required.

Thank you for your assistance.

Yours sincerely,
{{studentName}}
Student ID: {{studentId}}
`,
};

export default bonafideCertificate;
