
import Particle from "../Particle";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section className="contact_section">
      <Particle />
      <div className="contact_content">
        <ContactHeader/>
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
