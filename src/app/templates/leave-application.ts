import { Template } from "./types";

const leaveApplication: Template = {
  id: "leave-application",
  title: "Leave Application",
  description: "Request time off professionally.",
  category: "Student",
  popularity: 95,
  isNew: false,
  glimpse: "Formal letter for academic leave requests.",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "studentId", label: "Student ID", type: "text" },
    { name: "course", label: "Course/Program", type: "text" },
    { name: "departmentName", label: "Department Name", type: "text" },
    { name: "universityName", label: "University Name", type: "text" },
    { name: "date", label: "Date", type: "date" },
    {
      name: "leaveType",
      label: "Leave Type",
      type: "select",
      options: ["Medical", "Personal", "Academic"],
    },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "endDate", label: "End Date", type: "date" },
    { name: "reason", label: "Reason for Leave", type: "textarea" },
  ],
  template: `
To,
The Head of Department
{{departmentName}}
{{universityName}}

Date: {{date}}

Subject: Application for Leave of Absence

Respected Sir/Madam,

I, {{studentName}} (Student ID: {{studentId}}), a student of the {{course}} program, hereby request leave of absence from {{startDate}} to {{endDate}} due to {{reason}}.
Type of leave: {{leaveType}}

I assure you that I will complete all pending assignments and coursework immediately upon my return. I have attached supporting documents where applicable.

Thank you for considering my request.

Sincerely,
{{studentName}}
Student ID: {{studentId}}
`,
};

export default leaveApplication;
