import { Template } from "./types";

const scholarshipApplication: Template = {
  id: "scholarship-application",
  title: "Scholarship Application Letter",
  description:
    "Formally request a scholarship or financial aid from an institution.",
  category: "Student",
  popularity: 64,
  isNew: true,
  glimpse:
    "A formal letter template for students to apply for scholarships or financial assistance.",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "studentId", label: "Student ID", type: "text" },
    { name: "course", label: "Course/Program", type: "text" },
    { name: "institution", label: "Institution Name", type: "text" },
    { name: "academicYear", label: "Academic Year", type: "text" },
    { name: "scholarshipName", label: "Scholarship Name", type: "text" },
    { name: "reason", label: "Reason for Applying", type: "textarea" },
    { name: "achievements", label: "Academic Achievements", type: "textarea" },
    { name: "familyIncome", label: "Annual Family Income (₹)", type: "number" },
    { name: "date", label: "Date", type: "date" },
  ],
  template: `
To,
The Scholarship Committee
{{institution}}

Date: {{date}}

Subject: Application for {{scholarshipName}} for the Academic Year {{academicYear}}

Respected Sir/Madam,

I, {{studentName}} (Student ID: {{studentId}}), am a student of {{course}} at {{institution}}. I am writing to apply for the {{scholarshipName}} for the academic year {{academicYear}}.

Reason for applying:
{{reason}}

Academic achievements:
{{achievements}}

My annual family income is ₹{{familyIncome}}. I have attached all required documents for your reference.

I kindly request you to consider my application for the scholarship. Thank you for your time and consideration.

Yours sincerely,
{{studentName}}
Student ID: {{studentId}}
`,
};

export default scholarshipApplication;
