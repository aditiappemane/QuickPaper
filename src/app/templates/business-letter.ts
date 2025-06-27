import { Template } from "./types";

const businessLetter: Template = {
  id: "business-letter",
  title: "Business/Professional Letter",
  description:
    "Write formal business or official letters for any professional purpose.",
  category: "Work",
  popularity: 55,
  isNew: true,
  glimpse:
    "A versatile template for official requests, complaints, applications, or business communication.",
  fields: [
    { name: "senderName", label: "Your Name", type: "text" },
    { name: "senderAddress", label: "Your Address", type: "text" },
    {
      name: "senderCityStateZip",
      label: "Your City, State, Zip Code",
      type: "text",
    },
    { name: "senderEmail", label: "Your Email", type: "text" },
    { name: "senderPhone", label: "Your Phone Number", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    { name: "recipientTitle", label: "Recipient's Title", type: "text" },
    { name: "company", label: "Company/Organization", type: "text" },
    { name: "recipientAddress", label: "Recipient's Address", type: "text" },
    {
      name: "recipientCityStateZip",
      label: "Recipient's City, State, Zip Code",
      type: "text",
    },
    { name: "subject", label: "Subject", type: "text" },
    {
      name: "greeting",
      label: "Greeting (e.g., Dear Mr. Smith)",
      type: "text",
    },
    { name: "intro", label: "Introduction Paragraph", type: "textarea" },
    { name: "body", label: "Body Paragraph(s)", type: "textarea" },
    { name: "closing", label: "Closing Paragraph", type: "textarea" },
    {
      name: "complimentaryClose",
      label: "Complimentary Close (e.g., Sincerely)",
      type: "text",
    },
  ],
  template: `
{{senderName}}
{{senderAddress}}
{{senderCityStateZip}}
Email: {{senderEmail}}
Phone: {{senderPhone}}

Date: {{date}}

{{recipientName}}
{{recipientTitle}}
{{company}}
{{recipientAddress}}
{{recipientCityStateZip}}

Subject: {{subject}}

{{greeting}},

{{intro}}

{{body}}

{{closing}}

{{complimentaryClose}},
{{senderName}}
`,
};

export default businessLetter;
