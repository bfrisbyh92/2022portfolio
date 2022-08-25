import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import profilePicture from "../assets/img/profile-jpeg.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="/">
              <img
                src={profilePicture}
                alt="profile"
                className="profilePicture2"
              ></img>
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/brendan-frisby/" rel="noreferrer" target="_blank">
                <img src={navIcon1} alt="linkedinIcon" />
              </a>
              <a href="https://www.facebook.com/BrendanFriz/">
                <img src={navIcon2} alt="facebookIcon" />
              </a>
              <a href="https://github.com/bfrisbyh92" rel="noreferrer" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
