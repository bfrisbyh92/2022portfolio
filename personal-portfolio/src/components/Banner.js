import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import rocketSVG from "../assets/img/rocketSVG.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Web Developer", "Freelancer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 3)
      : fullText.substring(0, text.length + 3);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Brendan`} </h1>

                  <p>
                    A <strong>passionate</strong> full-stack software engineer.
                    I have two general objectives.
                    <br></br>
                    <br></br>
                    <strong>The first</strong> is to be a great software
                    engineer. That's a life-long commitment and takes up a huge
                    amount of my time.
                    <br></br>
                    <br></br>
                    <strong>The Second,</strong> make a difference anywhere I
                    can along my journey. What that means to me is actively
                    looking for opportunities to make a positive difference in
                    the lives of those around me.
                    <br></br>
                    <br></br>
                    I'm currently taking on freelance work from peers and
                    various platforms like Fiverr, Upwork, Freelancer. I am
                    looking for full-time employment in a challenging role that
                    will allow me to continue growing as a software engineer.
                    <br></br>
                    <br></br>
                    <strong>
                      Please check out my
                      <a href="https://brendanhayesfrisby.netlify.app/#projects">
                        {" "}
                        projects{" "}
                      </a>
                      and{" "}
                      <a href="https://github.com/bfrisbyh92">
                        Github profile!
                      </a>
                      <a
                        href="https://docs.google.com/document/d/1XSTf5B-4-TQRUT5eb1Qu7QT-YMJyU4vYC7v3LIdZqtc/edit?usp=sharing"
                        download="Brendan Frisby Resume"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          type="button"
                          className="btn btn-success btn-lg btn-block"
                        >
                          Download Resume
                        </button>
                      </a>
                    </strong>
                  </p>
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Software Engineer" , "Web Developer", "Freelancer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={rocketSVG} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
