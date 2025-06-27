import { Template } from "./types";

const bonafideCertificate: Template = {
  id: "bonafide-certificate",
  title: "Bonafide Certificate",
  description: "Request certificates from institutions",
  category: "Student",
  popularity: 85,
  isNew: true,
  glimpse: "Certificate request for academic or official purposes.",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "studentId", label: "Student ID", type: "text" },
    { name: "course", label: "Course/Program", type: "text" },
    { name: "purpose", label: "Purpose", type: "textarea" },
  ],
  template: `To The Principal,
[Institution Name]
[Institution Address]

Date: {{currentDate}}

Subject: Request for Bonafide Certificate

Respected Sir/Madam,

I, {{studentName}} (Student ID: {{studentId}}), am a student of {{course}} at your esteemed institution. I am writing to request a bonafide certificate for the following purpose:

{{purpose}}

I kindly request you to issue the certificate at your earliest convenience. Please let me know if any additional information is required.

Thank you for your assistance.

Yours sincerely,
{{studentName}}
[Student ID: {{studentId}}]`,
};

export default bonafideCertificate;
