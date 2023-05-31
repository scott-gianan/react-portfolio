import { Row, Col, Divider } from "antd";
import "./Contact.scss";

const Contact = () => {
  return (
    <form className="form">
      <Divider className="contact-divider">Leave a Message!</Divider>
      <Row align="center">
        <Col className="col-name" xs={18} md={14} lg={8}>
          <label htmlFor="name">Name</label>
          <input className="input" id="name" type="text" />
        </Col>
      </Row>
      <Row align="center">
        <Col className="col-email" xs={18} md={14} lg={8}>
          <label htmlFor="email">Email</label>
          <input className="input" id="email" type="email" required />
        </Col>
      </Row>
      <Row align="center">
        <Col className="col-message" xs={18} md={14} lg={8}>
          <label htmlFor="message">Message</label>
          <textarea className="input" id="message" required />
        </Col>
      </Row>
      <Row align="center">
        <Col xs={18} md={14} lg={8}>
          <button className="btn-submit" type="submit">
            Send a message!
          </button>
        </Col>
      </Row>
    </form>
  );
};
export default Contact;
