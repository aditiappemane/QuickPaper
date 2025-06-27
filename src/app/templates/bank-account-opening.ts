import { Template } from "./types";

const bankAccountOpening: Template = {
  id: "bank-account-opening",
  title: "Bank Account Opening Letter",
  description: "Request to open a new bank account at your preferred branch.",
  category: "Finance",
  popularity: 75,
  isNew: true,
  glimpse:
    "A formal request letter for opening a new bank account at a branch.",
  fields: [
    { name: "applicantName", label: "Your Full Name", type: "text" },
    { name: "address", label: "Your Address", type: "text" },
    { name: "contactNumber", label: "Contact Number", type: "text" },
    { name: "email", label: "Email Address", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "bankName", label: "Bank Name", type: "text" },
    {
      name: "accountType",
      label: "Account Type",
      type: "select",
      options: ["Savings", "Current", "Salary", "Student"],
    },
    { name: "branchName", label: "Branch Name", type: "text" },
    {
      name: "initialDeposit",
      label: "Initial Deposit Amount (₹)",
      type: "number",
    },
    {
      name: "idProof",
      label: "ID Proof Type",
      type: "select",
      options: [
        "Aadhaar Card",
        "Passport",
        "Voter ID",
        "Driving License",
        "PAN Card",
      ],
    },
    { name: "idNumber", label: "ID Proof Number", type: "text" },
  ],
  template: `
To,
The Branch Manager
{{branchName}} Branch
{{bankName}}

Date: {{date}}

Subject: Request for Opening a New {{accountType}} Account

Respected Sir/Madam,

I, {{applicantName}}, residing at {{address}}, wish to open a new {{accountType}} account at your {{branchName}} branch of {{bankName}}. Please find my details below:

- Full Name: {{applicantName}}
- Address: {{address}}
- Contact Number: {{contactNumber}}
- Email: {{email}}
- Account Type: {{accountType}}
- Initial Deposit: ₹{{initialDeposit}}
- ID Proof: {{idProof}} (No: {{idNumber}})

I am enclosing self-attested copies of my {{idProof}} and other required documents for your verification.

I kindly request you to process my application at the earliest. Please let me know if any further information or documentation is required.

Thank you for your assistance.

Yours faithfully,
{{applicantName}}
Contact: {{contactNumber}}
Email: {{email}}
`,
};

export default bankAccountOpening;
