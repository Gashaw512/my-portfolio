import Tilt from "react-parallax-tilt";
import { Button, Form } from "react-bootstrap";
import { CDBIcon } from "cdbreact";
const ContactForm = () => {
  return (
    <Tilt
      className="inner_frm_container"
      style={{
        width: "30rem",
        // background:
        //   "url(https://mcdn.wallpapersafari.com/medium/0/47/wRcvI2.jpg)",
        // backgroundSize: "cover",
      }}
    >
      <div className="form_container ">
        <div className="mx-4 ">
          <div className="text-center mt-4 mb-4  form_title">
            <p className="h4"> Write to Me </p>
          </div>
          <Form className="form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("hello");
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Subject" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message (Remember. Short & sweet please !)"
                required
              />
            </Form.Group>
            <Button
              type="submit"
              style={{ width: "80%", alignItems: "center" }}
              className="btn-block mt-5 mx-auto btn-primary btn ctct_btn"
            >
              Send{"  "}
              <span style={{ paddingLeft: 5, position: "right" }}>
                {"   "}
                <CDBIcon far icon="paper-plane" />
              </span>
            </Button>
          </Form>
        </div>
      </div>
    </Tilt>
  );
};
export default ContactForm;
