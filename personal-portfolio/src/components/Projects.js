import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Kryptlow",
      description:
        "A React Web3 app with a built-in connection to Ethereum blockchain. Includes a smart contract written in Solidity. Styled with Tailwind.css.",
      imgUrl: projImg1,
      github: "https://github.com/bfrisbyh92",
      link: "https://kryptlow.netlify.app/"
    },
    {
      title: "'Signal Clone'",
      description: "A clone of the app Signal made using React-Native and Expo. Firebase for authentication and real time messages.",
      imgUrl: projImg2,
      github: "https://github.com/bfrisbyh92",
      link: "https://signal3-45484.web.app/"
    },
    {
      title: "Uber Clone",
      description: "A clone of the Uber passenger app.  Made with many different API's provided by Google. Tailwind for CSS. React-Native build made using Expo.",
      imgUrl: projImg3,
      github: "https://github.com/bfrisbyh92",
      link: "https://expo.dev/@bfrisbyh92/uber-clone"
    },
    {
      title: "Coinhub",
      description: "A crypto price tracking app that allows you to add coins to favorites/watchlists. A React/Firebase web app.",
      imgUrl: projImg1,
      github: "https://github.com/bfrisbyh92",
      link: "https://coinhub7.netlify.app/"
    },
    {
      title: "GoodTimes",
      description: "A Social Media app. I tracked the time spent with Wakatime and finished with 45+ hours total between two repositories. Please check it out!",
      imgUrl: projImg2,
    },
    {
      title: "Project Two",
      description: "This was P2 at General Assembly's Immersive. I struggled in the beginning. Sharing because I love growth and so much has occured since then!",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have an infinite list of future projects I'd like to
                    create. I try to make each project a bit more complex and
                    push myself every build. Please take a peek at my work!.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React.js</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">All</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
