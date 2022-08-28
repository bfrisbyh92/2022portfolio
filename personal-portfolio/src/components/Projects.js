import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import kryptlow from "../assets/img/kryptlow.png";
import coinhub from "../assets/img/coinhub.png";
import goodtimes from "../assets/img/goodtimes.png";
import oldPortfolio from "../assets/img/oldPortfolio.png";
import newPortfolio from "../assets/img/newPortfolio.png";
import p2 from "../assets/img/p2.png";
import uber from "../assets/img/uber.png";
import signal from "../assets/img/signal.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Kryptlow",
      description:
        "A React Web3 app with a built-in connection to Ethereum blockchain. Includes a smart contract written in Solidity. Styled with Tailwind.css.",
      imgUrl: kryptlow,
      github: "https://github.com/bfrisbyh92/Kryptlow",
      link: "https://kryptlow.netlify.app/",
      tags: ["react", "web", "all"],
    },
    {
      title: "'Signal Clone'",
      description:
        "A clone of the app Signal made using React-Native and Expo. Firebase for authentication and real time messages.",
      imgUrl: signal,
      github: "https://signal3-45484.web.app/",
      link: "https://signal3-45484.web.app/",
      tags: ["react", "mobile", "all"],
    },
    {
      title: "Uber Clone",
      description:
        "A clone of the Uber passenger app.  Made with many different API's provided by Google. Tailwind for CSS. React-Native build made using Expo.",
      imgUrl: uber,
      github: "https://github.com/bfrisbyh92",
      link: "https://expo.dev/@bfrisbyh92/uber-clone",
      tags: ["react", "mobile", "all"],
    },
    {
      title: "Coinhub",
      description:
        "A crypto price tracking app that allows you to add coins to favorites/watchlists. A React/Firebase web app.",
      imgUrl: coinhub,
      github: "https://github.com/bfrisbyh92",
      link: "https://coinhub7.netlify.app/",
      tags: ["react", "web", "all"],
    },
    {
      title: "GoodTimes",
      description:
        "A Social Media app. I tracked the time spent with Wakatime and finished with 45+ hours total between two repositories. Please check it out!",
      imgUrl: goodtimes,
      tags: ["react", "web", "all"],
    },
    {
      title: "Project Two",
      description:
        "This was P2 at General Assembly's Immersive. I struggled in the beginning. Sharing because I love growth and so much has occured since then!",
      imgUrl: p2,
      tags: ["web", "all"],
    },
    {
      title: "Old Portfolio",
      description:
        "I am very split between portfolios right now. My old one was amazing and Sanity.io made updates very easy!",
      imgUrl: oldPortfolio,
      tags: ["react", "web", "all"],
    },
    {
      title: "New Portfolio",
      description: "This same portfolio your viewing now. Credit to the author in readme. My own edits of the code available in my repository.",
      imgUrl: newPortfolio,
      tags: ["react", "web", "all"],
    },
  ];

  return (
    <section className="project" id="projects">
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
                    push myself every build.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="all">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="react">React.js</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="web">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="mobile">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="all">All</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="react">
                        <Row>
                          {/* {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          React */}

                           {/* // Goodtimes */}
                          <Col size={12} sm={6} md={4} lg={3}>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://goodtimes7.netlify.app"
                              target="_blank"
                            >
                              GoodTimes Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/GoodTimes"
                              target="_blank"
                            >
                              GoodTimes Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[4].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[4].title}</h4>
                                <span>{projects[4].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Coinhub */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://coinhub7.netlify.app"
                              target="_blank"
                            >
                              Coinhub Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/crypto-prices"
                              target="_blank"
                            >
                              Coinhub Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[3].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[3].title}</h4>
                                <span>{projects[3].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Kryptlow */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://kryptlow.netlify.app/"
                              target="_blank"
                            >
                              Kryptlow Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/Kryptlow"
                              target="_blank"
                            >
                              Kryptlow Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[0].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[0].title}</h4>
                                <span>{projects[0].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Old Portfolio */}
                          <Col size={12} sm={6} md={4} lg={3}>
                           <a
                              align="center"
                              rel="noreferrer"
                              href="https://brendanfrisby.netlify.app/"
                              target="_blank"
                            >
                              Old Portfolio Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/frontend_portfolio"
                              target="_blank"
                            >
                              Old Portfolio Client Code
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/backend_portfolio"
                              target="_blank"
                            >
                              Old Portfolio Backend Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[6].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[6].title}</h4>
                                <span>{projects[6].description}</span>
                              </div>
                            </div>
                          </Col>

                          <Col size={12} sm={6} md={4} lg={3}>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://brendanhayesfrisby.netlify.app"
                              target="_blank"
                            >
                              This portfolios link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/2022portfolio"
                              target="_blank"
                            >
                              This portfolios code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={newPortfolio} />
                              <div className="proj-txtx">
                                <h4>{projects[7].title}</h4>
                                <span>{projects[7].description}</span>
                              </div>
                            </div>
                          </Col>

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="web">
                        <Row>
  {/* // Goodtimes */}
                          <Col size={12} sm={6} md={4} lg={3}>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://goodtimes7.netlify.app"
                              target="_blank"
                            >
                              GoodTimes Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/GoodTimes"
                              target="_blank"
                            >
                              GoodTimes Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[4].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[4].title}</h4>
                                <span>{projects[4].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Coinhub */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://coinhub7.netlify.app"
                              target="_blank"
                            >
                              Coinhub Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/crypto-prices"
                              target="_blank"
                            >
                              Coinhub Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[3].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[3].title}</h4>
                                <span>{projects[3].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Kryptlow */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://kryptlow.netlify.app/"
                              target="_blank"
                            >
                              Kryptlow Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/Kryptlow"
                              target="_blank"
                            >
                              Kryptlow Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[0].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[0].title}</h4>
                                <span>{projects[0].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Old Portfolio */}
                          <Col size={12} sm={6} md={4} lg={3}>
                           <a
                              align="center"
                              rel="noreferrer"
                              href="https://brendanfrisby.netlify.app/"
                              target="_blank"
                            >
                              Old Portfolio Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/frontend_portfolio"
                              target="_blank"
                            >
                              Old Portfolio Client Code
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/backend_portfolio"
                              target="_blank"
                            >
                              Old Portfolio Backend Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[6].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[6].title}</h4>
                                <span>{projects[6].description}</span>
                              </div>
                            </div>
                          </Col>

                         {/* // Project 2 Blog */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/project-2"
                              target="_blank"
                            >
                              Project #2 Code - no longer hosted
                            </a>
                            <br></br>
                            <div className="proj-imgbx">
                              <img
                                size="inherit"
                                alt="projectImg"
                                src={projects[5].imgUrl}
                              />
                              <div className="proj-txtx">
                                <h4>{projects[5].title}</h4>
                                <span>{projects[5].description}</span>
                              </div>
                            </div>
                          </Col>

                          <Col size={12} sm={6} md={4} lg={3}>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://brendanhayesfrisby.netlify.app"
                              target="_blank"
                            >
                              This portfolios link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/2022portfolio"
                              target="_blank"
                            >
                              This portfolios code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={newPortfolio} />
                              <div className="proj-txtx">
                                <h4>{projects[7].title}</h4>
                                <span>{projects[7].description}</span>
                              </div>
                            </div>
                          </Col>

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="mobile">
                        <Row>
                                                   {/* // Uber Clone */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://expo.dev/@bfrisbyh92/uber-clone"
                              target="_blank"
                            >
                              Uber Clone Link(expo)
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/uber-clone"
                              target="_blank"
                            >
                              Uber Clone Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[3].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[3].title}</h4>
                                <span>{projects[3].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Signal Clone */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://signal3-45484.web.app/"
                              target="_blank"
                            >
                              "Signal" Clone Web Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://signal3-45484.web.app/"
                              target="_blank"
                            >
                              Signal Clone Mobile Link(expo)
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/signal-clone"
                              target="_blank"
                            >
                              Signal Clone Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[1].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[1].title}</h4>
                                <span>{projects[1].description}</span>
                              </div>
                            </div>
                          </Col>
                          
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="all">
                        <Row>
                          {/* // Goodtimes */}
                          <Col size={12} sm={6} md={4} lg={3}>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://goodtimes7.netlify.app"
                              target="_blank"
                            >
                              GoodTimes Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/GoodTimes"
                              target="_blank"
                            >
                              GoodTimes Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[4].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[4].title}</h4>
                                <span>{projects[4].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Coinhub */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://coinhub7.netlify.app"
                              target="_blank"
                            >
                              Coinhub Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/crypto-prices"
                              target="_blank"
                            >
                              Coinhub Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[3].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[3].title}</h4>
                                <span>{projects[3].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Kryptlow */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://kryptlow.netlify.app/"
                              target="_blank"
                            >
                              Kryptlow Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/Kryptlow"
                              target="_blank"
                            >
                              Kryptlow Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[0].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[0].title}</h4>
                                <span>{projects[0].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Old Portfolio */}
                          <Col size={12} sm={6} md={4} lg={3}>
                           <a
                              align="center"
                              rel="noreferrer"
                              href="https://brendanfrisby.netlify.app/"
                              target="_blank"
                            >
                              Old Portfolio Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/frontend_portfolio"
                              target="_blank"
                            >
                              Old Portfolio Client Code
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/backend_portfolio"
                              target="_blank"
                            >
                              Old Portfolio Backend Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[6].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[6].title}</h4>
                                <span>{projects[6].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Uber Clone */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://expo.dev/@bfrisbyh92/uber-clone"
                              target="_blank"
                            >
                              Uber Clone Link(expo)
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/uber-clone"
                              target="_blank"
                            >
                              Uber Clone Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[3].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[3].title}</h4>
                                <span>{projects[3].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Signal Clone */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://signal3-45484.web.app/"
                              target="_blank"
                            >
                              "Signal" Clone Web Link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://signal3-45484.web.app/"
                              target="_blank"
                            >
                              Signal Clone Mobile Link(expo)
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/signal-clone"
                              target="_blank"
                            >
                              Signal Clone Code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={projects[1].imgUrl} />
                              <div className="proj-txtx">
                                <h4>{projects[1].title}</h4>
                                <span>{projects[1].description}</span>
                              </div>
                            </div>
                          </Col>

                          <Col size={12} sm={6} md={4} lg={3}>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://brendanhayesfrisby.netlify.app"
                              target="_blank"
                            >
                              This portfolios link
                            </a>
                            <br></br>
                            <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/2022portfolio"
                              target="_blank"
                            >
                              This portfolios code
                            </a>
                            <div className="proj-imgbx">
                              <img alt="projectImg" src={newPortfolio} />
                              <div className="proj-txtx">
                                <h4>{projects[7].title}</h4>
                                <span>{projects[7].description}</span>
                              </div>
                            </div>
                          </Col>

                          {/* // Project 2 Blog */}
                          <Col size={12} sm={6} md={4} lg={3}>
                          <a
                              align="center"
                              rel="noreferrer"
                              href="https://github.com/bfrisbyh92/project-2"
                              target="_blank"
                            >
                              Project #2 Code - no longer hosted
                            </a>
                            <br></br>
                            <div className="proj-imgbx">
                              <img
                                size="inherit"
                                alt="projectImg"
                                src={projects[5].imgUrl}
                              />
                              <div className="proj-txtx">
                                <h4>{projects[5].title}</h4>
                                <span>{projects[5].description}</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        alt="background"
        className="background-image-right"
        src={colorSharp2}
      ></img>
    </section>
  );
};
