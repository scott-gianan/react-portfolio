//react
import { NavLink } from "react-router-dom";
//components
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
//styling
import "./Home.scss";
import { Col, Row } from "antd";
//assets
import { nameArray, jobArray } from "../../assets/text-array";

const Home = () => {
  return (
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
              Etiam auctor magna augue, sed scelerisque risus pharetra at. Donec
              sagittis odio in rutrum eleifend. Sed scelerisque magna eget est
              vehicula porta. Aliquam a nulla sit amet mi imperdiet sagittis.
            </p>
            <NavLink to="/contact" reloadDocument>
              <button className="flat-button">Contact Me</button>
            </NavLink>
            <button className="flat-button">Download CV</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
