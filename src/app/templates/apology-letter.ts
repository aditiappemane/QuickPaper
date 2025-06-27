import { Template } from "./types";

const apologyLetter: Template = {
  id: "apology-letter",
  title: "Apology Letter",
  description:
    "Express a sincere apology for mistakes or misunderstandings in personal or professional settings.",
  category: "Work",
  popularity: 58,
  isNew: true,
  glimpse:
    "A formal template for sincerely apologizing to a colleague, manager, client, or friend.",
  fields: [
    { name: "senderName", label: "Your Name", type: "text" },
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    {
      name: "relationship",
      label: "Relationship (e.g., Manager, Colleague, Friend)",
      type: "text",
    },
    {
      name: "incident",
      label: "What Happened / Reason for Apology",
      type: "textarea",
    },
    { name: "impact", label: "Impact of the Mistake", type: "textarea" },
    { name: "resolution", label: "How You Are Fixing It", type: "textarea" },
    { name: "promise", label: "Your Promise for the Future", type: "textarea" },
    { name: "date", label: "Date", type: "date" },
  ],
  template: `
Date: {{date}}

To,
{{recipientName}}

Subject: Apology for {{incident}}

Dear {{recipientName}},

I am writing to sincerely apologize for {{incident}}. As your {{relationship}}, I understand that my actions may have caused {{impact}}.

I take full responsibility for my mistake, and I want to assure you that I am already taking steps to address the issue: 
{{resolution}}

Please accept my heartfelt apologies. I value our relationship and will do my best to make sure this does not happen again. {{promise}}

Thank you for your understanding and patience.

Sincerely,
{{senderName}}
`,
};

export default apologyLetter;
