import { Template } from "./types";

const recommendationLetter: Template = {
  id: "recommendation-letter",
  title: "Recommendation Letter",
  description: "Request professional recommendations",
  category: "Work",
  popularity: 65,
  isNew: true,
  glimpse:
    "A formal letter template to request a recommendation from a supervisor, professor, or employer.",
  fields: [
    { name: "requesterName", label: "Your Name", type: "text" },
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    {
      name: "relationship",
      label: "Your Relationship (e.g., Professor, Manager)",
      type: "text",
    },
    { name: "purpose", label: "Purpose of Recommendation", type: "textarea" },
    {
      name: "achievements",
      label: "Key Achievements/Qualities",
      type: "textarea",
    },
    { name: "duration", label: "Duration of Association", type: "text" },
    { name: "contactInfo", label: "Your Contact Information", type: "text" },
  ],
  template: `To,
{{recipientName}}

Date: {{currentDate}}

Subject: Request for Recommendation Letter

Dear {{recipientName}},

I hope this message finds you well. I am writing to kindly request a letter of recommendation from you, as my {{relationship}}, for the purpose of {{purpose}}.

During our association of {{duration}}, I have strived to demonstrate qualities such as:
{{achievements}}

Your recommendation would greatly enhance my application and provide valuable insight into my skills and character. If you need any additional information, please let me know.

Thank you very much for considering my request.

Sincerely,
{{requesterName}}
{{contactInfo}}`,
};

export default recommendationLetter;
