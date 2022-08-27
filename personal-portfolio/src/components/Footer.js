import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import profilePicture from "../assets/img/profile-jpeg.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import githubImage from "../assets/img/nav-icon3.svg";
import githubSVG from "../assets/img/skills/github.svg";

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

            {/* Linkedin Below */}
              <a
                href="https://www.linkedin.com/in/brendan-frisby/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="linkedinIcon" />
              </a>

              {/* Facebook SVG Below */}
              <a
                href="https://www.facebook.com/BrendanFriz/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon2} alt="facebookIcon" />
              </a>

              <a
                href="https://github.com/bfrisbyh92"
                rel="noreferrer"
                target="_blank"
              >
                {/* Github SVG Below */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="white"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
            <p>@2022BrendanFrisby</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
