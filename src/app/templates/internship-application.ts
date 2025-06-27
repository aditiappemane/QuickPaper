import { Template } from "./types";

const internshipApplication: Template = {
  id: "internship-application",
  title: "Internship Application",
  description: "Apply for internships formally",
  category: "Work",
  popularity: 80,
  isNew: false,
  glimpse: "Formal application letter for internship opportunities.",
  fields: [
    { name: "applicantName", label: "Your Name", type: "text" },
    { name: "email", label: "Email Address", type: "text" },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "position", label: "Internship Position", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "duration", label: "Duration", type: "text" },
    { name: "skills", label: "Relevant Skills / Experience", type: "textarea" },
    { name: "objective", label: "Objective / Motivation", type: "textarea" },
  ],
  template: `To,
The HR Manager
{{company}}

Date: {{currentDate}}

Subject: Application for Internship Position ({{position}})

Respected Sir/Madam,

I, {{applicantName}}, am writing to express my keen interest in the {{position}} internship at {{company}} for a duration of {{duration}}.

Objective:
{{objective}}

Relevant Skills/Experience:
{{skills}}

I believe this opportunity will help me enhance my skills and contribute meaningfully to your organization. I am attaching my resume for your reference.

Thank you for considering my application. I look forward to your positive response.

Sincerely,
{{applicantName}}
Email: {{email}}
Phone: {{phone}}`,
};

export default internshipApplication;
