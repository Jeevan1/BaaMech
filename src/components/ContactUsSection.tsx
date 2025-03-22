import ContactUsForm from './ContactUsForm';
import SectionHeading from './SectionHeading';
import { MdOutlineContactPhone } from 'react-icons/md';

const ContactUsSection = () => {
  return (
    <div className="bg-white" id="contact">
      <div className="container py-20">
        <SectionHeading title="Contact Us" icon={MdOutlineContactPhone} />
        <h2 className="mt-6 text-center text-2xl font-bold text-accent md:text-3xl lg:text-5xl">
          Get in Touch with Us.
        </h2>
        <p className="text-md m-auto mt-4 max-w-5xl text-center font-semibold text-gray-500 md:text-lg">
          We&apos;d love to hear from you! If you have any questions, feedback,
          or concerns, please don&apos;t hesitate to get in touch with us. You
          can reach us through the following contact information:
        </p>
        <div className="pt-10">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
