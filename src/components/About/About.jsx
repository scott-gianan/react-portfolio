//from packages
import { Row, Col, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//assets
import { skillIcons } from "../../assets/skill-icons";
//styling
import "./About.scss";
const Skills = () => {
  return (
    <>
      <Row align="center" className="about-animate">
        <Divider className="divider">Things about me</Divider>
        <Col xs={22} md={18} lg={10}>
          <p className="about-me-text">
            As a web developer, I embody a passion for continuous learning and
            an unwavering dedication to my craft. Through my commitment to
            self-improvement, I actively seek out resources, engage in coding
            exercises, and participate in collaborative projects to expand my
            skill set. I am driven by the desire to create efficient,
            user-centric web experiences that seamlessly merge aesthetics with
            functionality. With a blend of curiosity, determination, and a
            growth mindset, I am poised to make a meaningful impact in the
            dynamic world of web development.
          </p>
        </Col>
      </Row>
      <Divider className="divider about-animate">Technologies Used:</Divider>
      <Row align="center">
        <Col xs={24} md={18} lg={10}>
          <div className="skills-container">
            {skillIcons.map((icon) => {
              return (
                <div className="icon-container about-animate" key={icon.id}>
                  <FontAwesomeIcon
                    icon={icon.icon}
                    color={icon.color}
                    className="icon"
                  />
                  <p>{icon.label}</p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Skills;

<div className="skills-container">
  {skillIcons.map((icon) => {
    return (
      <div className="icon-container" key={icon.id}>
        <FontAwesomeIcon icon={icon.icon} color={icon.color} className="icon" />
        <p>{icon.label}</p>
      </div>
    );
  })}
</div>;
