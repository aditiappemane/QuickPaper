import { Template } from "./types";

const leaveApplication: Template = {
  id: "leave-application",
  title: "Leave Application",
  description: "Request time off professionally",
  category: "Student",
  popularity: 95,
  isNew: false,
  glimpse: "Formal letter for academic leave requests",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "studentId", label: "Student ID", type: "text" },
    { name: "course", label: "Course/Program", type: "text" },
    {
      name: "leaveType",
      label: "Leave Type",
      type: "select",
      options: ["Medical", "Personal", "Academic"],
    },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "endDate", label: "End Date", type: "date" },
    { name: "reason", label: "Reason", type: "textarea" },
  ],
  template: `[University Letterhead]

To,
The Head of Department
[Department Name]
[University Name]

Date: {{currentDate}}

Subject: Application for Leave of Absence

Respected Sir/Madam,

I, {{studentName}} (Student ID: {{studentId}}), a student of {{course}} program, hereby request leave of absence from {{startDate}} to {{endDate}}.

Reason for leave: {{reason}}
Type of leave: {{leaveType}}

I assure you that I will complete all pending assignments and coursework immediately upon my return. I have attached supporting documents where applicable.

Thank you for considering my request.

Sincerely,
{{studentName}}
{{studentId}}`,
};

export default leaveApplication;
