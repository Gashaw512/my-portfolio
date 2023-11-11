
import { Col, Image, Row } from "react-bootstrap";
import profile from "../../Assets/robot.png";

const AboutHeader = () => {
  return (
    <Row className="home-header">
      <Col md={5} style={{ paddingBottom: 20 }}>
        <Image
          src={profile}
          roundedCircle
          width={200}
          height={300}
          alt="Profile picture"
        />
        {/* </Tilt> */}
      </Col>
      <Col md={7} >
        <h1 style={{ paddingBottom: 15 }} className="about-heading">
          Who Am I{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            ?
          </span>
        </h1>

        <p className="about-description">
          Hello! I'M
          <strong className="main-name"> Gashaw Kidanu,</strong> a
          result-oriented and self-motivated Software Engineer with an emphasis
          in full stack development and Cyber security. Expert in React JS, Vue JS,
          Node JS, Laravel, and SQL.
        </p>
      </Col>
    </Row>
  );
};
export default AboutHeader;
