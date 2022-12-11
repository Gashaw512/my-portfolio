import { Col, Container, Image, Row } from "react-bootstrap";
import profile from "../../Assets/profile.jpg";
import Type from "./Typewriter";
import Tilt from "react-parallax-tilt";

const HomeHead=()=>{
    return(
        <Container className="home-content justify-content-center">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Gashaw Kidanu</strong>
            </h1>  
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}>
          <Tilt>
          <Image src={profile} roundedCircle width={200} height={300}  alt="Profile picture" />
          </Tilt>
          </Col>
        </Row>
       <Type /> 
      </Container> 
    )
}
export default HomeHead;