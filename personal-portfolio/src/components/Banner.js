import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Web Developer", "UI/UX Designer"];
  const period = 2000;

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
      ? fullText.substring(0, text.length - 2)
      : fullText.substring(0, text.length + 2);

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
                    I am a passionate Full-Stack Software Engineer. I have two
                    objectives. Be the best software engineer I can be and the
                    second is make a difference where I can along the way.
                    Growth is important to me and I know that if I continue to
                    practice daily, I will continue growing my skills. So that
                    is exactly what I do! Please check out my projects and{" "}
                    <a href="https://github.com/bfrisbyh92">Github profile.</a>
                    <a
                      href="https://github.com/bfrisbyh92/2022portfolio/blob/afc6ef2c5812dfa9c8279e5b42454c84f7c86551/personal-portfolio/src/assets/img/BHF%20Resume.docx"
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
                  </p>
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Software Engineer" , "Web Developer", "UI/UX Designer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
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
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
