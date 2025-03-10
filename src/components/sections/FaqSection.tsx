import React from "react";
import FaqItem from "@/components/ui-custom/FaqItem";
import Button from "@/components/ui-custom/Button";

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: "What documents do I need to submit for my visa application?",
      answer:
        "Required documents typically include a valid passport, completed application form, passport-sized photographs, proof of travel arrangements, and proof of financial means. Specific requirements may vary based on visa type.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule your appointment up to 24 hours before your scheduled time through your account dashboard.",
    },
    {
      question: "How long does it take to process my application?",
      answer:
        "Processing times vary depending on the type of service. Typically, visa applications take 3-5 business days, while passport services may take 2-4 weeks.",
    },
    {
      question:
        "Can I track my application status if I didn't create an account?",
      answer:
        "Yes, you can track your application using your application reference number and your passport number on our tracking page.",
    },
  ];

  return (
    <section className="px-0 py-[60px]" id="faq">
      <h2 className="text-2xl mb-[30px]">Have questions? We got answers.</h2>
      <div className="max-w-[800px] mx-auto my-0">
        {faqItems.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
        <div className="mt-5">
          <Button variant="link">All our FAQs</Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
