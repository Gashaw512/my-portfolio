
import Particle from "../Particle";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";
const Contact = () => {
  return (
    <section className="contact_section">
      <Particle />
      <Container className="contact_content">
        <ContactHeader/>
        <ContactForm />
      </Container>
    </section>
  );
};
export default Contact;
