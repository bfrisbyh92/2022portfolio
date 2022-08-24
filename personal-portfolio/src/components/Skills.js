import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import apiImage from "../assets/img/skills/api.png";
import djangoImage from "../assets/img/skills/django.png";
import cssImage from "../assets/img/skills/css.png";
import figmaImage from "../assets/img/skills/figma.png";
import nodeImage from "../assets/img/skills/node.png";
import reduxImage from "../assets/img/skills/redux.png";
import jsImage from "../assets/img/skills/js.png";
import reactImage from "../assets/img/skills/react.png";
import bootstrapImage from "../assets/img/skills/bootstrap.png";
import sqlImage from "../assets/img/skills/sql.png";
import mongodbImage from "../assets/img/skills/mongodb.jpg";
import sassImage from "../assets/img/skills/sass.png";
import materialImage from "../assets/img/skills/material-ui.png";
import gitImage from "../assets/img/skills/git.png";
import pythonImage from "../assets/img/skills/python.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am constantly building and learning more. Here is a list of //
                some of the technologies I'm familiar with.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactImage} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={pythonImage} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={apiImage} alt="Image" />
                  <h5>API's</h5>
                </div>
                <div className="item">
                  <img src={jsImage} alt="Image" />
                  <h5>Vanilla Javascript</h5>
                </div>
                <div className="item">
                  <img src={figmaImage} alt="Image" />
                  <h5>Figma</h5>
                </div>
              </Carousel>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={nodeImage} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={djangoImage} alt="Image" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={cssImage} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={bootstrapImage} alt="Image" />
                  <h5>Bootstrap CSS</h5>
                </div>
                <div className="item">
                  <img src={materialImage} alt="Image" />
                  <h5>Material-UI</h5>
                </div>
              </Carousel>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={sassImage} alt="Image" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={reduxImage} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={gitImage} alt="Image" />
                  <h5>Git Version Control</h5>
                </div>
                <div className="item">
                  <img src={mongodbImage} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sqlImage} alt="Image" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
