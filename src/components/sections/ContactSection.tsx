import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="text-center bg-neutral-100 px-0 py-[60px]" id="contact">
      <h2 className="text-2xl mb-5">Need More Info or Help?</h2>
      <p className="text-[#666] mb-5">
        If you have any additional questions or need help with your application,
        feel free to reach out.
      </p>
      <p className="mb-2.5">
        For inquiries or support, please email us at:{" "}
        <a href="mailto:support@cpvs.com" className="text-[#2B4570]">
          support@cpvs.com
        </a>
      </p>
      <p className="text-[#666]">
        Our team will get back to you as soon as possible.
      </p>
    </section>
  );
};

export default ContactSection;
