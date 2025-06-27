import { Template } from "./types";

const salaryIncrement: Template = {
  id: "salary-increment",
  title: "Salary Increment Request",
  description: "Request a salary increment from your employer.",
  category: "Work",
  popularity: 59,
  isNew: true,
  glimpse:
    "A formal letter template to professionally request a salary raise from your manager or HR.",
  fields: [
    { name: "employeeName", label: "Your Name", type: "text" },
    { name: "employeeId", label: "Employee ID", type: "text" },
    { name: "designation", label: "Your Designation", type: "text" },
    { name: "department", label: "Department", type: "text" },
    { name: "managerName", label: "Manager's Name", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "currentSalary", label: "Current Salary", type: "text" },
    { name: "expectedSalary", label: "Expected Salary", type: "text" },
    { name: "justification", label: "Justification/Reasons", type: "textarea" },
    { name: "date", label: "Date", type: "date" },
  ],
  template: `
Date: {{date}}

To,
{{managerName}}
{{designation}}
{{company}}

Subject: Request for Salary Increment

Dear {{managerName}},

I am writing to formally request a review of my current salary. I have been working as a {{designation}} in the {{department}} department at {{company}}. My current salary is {{currentSalary}}.

{{justification}}

In light of my contributions and market standards, I would like to request a salary increment to {{expectedSalary}}. I am confident that my performance and dedication justify this request.

Thank you for considering my application. I look forward to your positive response.

Sincerely,
{{employeeName}}
Employee ID: {{employeeId}}
`,
};

export default salaryIncrement;
