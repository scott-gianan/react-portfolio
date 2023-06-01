//react
import { Link, NavLink } from "react-router-dom";
//components
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
//styling
import "./Home.scss";
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//assets
import { nameArray, jobArray } from "../../assets/text-array";

const Home = () => {
  return (
    <>
      <Row justify="center" className="row" align="middle">
        <Col xs={22} lg={12} md={18}>
          <div className="home-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters strArray={nameArray} idx={1} />
              </h1>
              <h1>
                <AnimatedLetters strArray={jobArray} idx={20} />
              </h1>
              <br />
              <p>
                Passionate for learning and self improvement, I'm a person who
                loves making and breaking stuff on the web
              </p>
            </div>
          </div>
          <div className="home-link-container">
            <NavLink to="/contact" reloadDocument>
              <FontAwesomeIcon
                className="icon-link"
                icon={faEnvelope}
                color="#896b49"
              />
            </NavLink>
            <a
              href="https://www.linkedin.com/in/scott-russell-gianan-784b3b214/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="icon-link"
                icon={faLinkedin}
                color="#0072b1"
              />
            </a>
            <a
              href="https://github.com/scott-gianan"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="icon-link"
                icon={faGithub}
                color="#171515"
              />
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
