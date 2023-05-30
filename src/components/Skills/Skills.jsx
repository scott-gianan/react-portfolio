//from packages
import { Row, Col, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNode,
  faSass,
  faBootstrap,
  faPhp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
//styling
import "./Skills.scss";
const Skills = () => {
  return (
    <>
      <div className="container">
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" className="icon" />
        <p>React</p>
      </div>

      <FontAwesomeIcon icon={faHtml5} color="#F06529" />
      <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
      <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
      <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
      <FontAwesomeIcon icon={faSass} color="#CD6799" />

      <FontAwesomeIcon icon={faNode} color="#3c873a" />
      <FontAwesomeIcon icon={faPhp} color="#474A8A" />

      <FontAwesomeIcon icon={faGitAlt} color="#474A8A" />
      <FontAwesomeIcon icon={faGithub} color="#474A8A" />
    </>
  );
};

export default Skills;
