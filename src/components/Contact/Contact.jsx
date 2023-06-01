import { Row, Col, Divider } from "antd";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const refForm = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_424sgvy",
        "template_xznv8bg",
        refForm.current,
        "hHGqyFNAHXtKxqj8v"
      )
      .then(
        () => {
          window.alert("message sent!");
          window.location.reload(false);
        },
        (e) => {
          window.alert("something went wrong");
          console.log(e);
        }
      );
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={refForm}>
      <Divider className="contact-divider">Leave a Message!</Divider>
      <Row align="center" gutter={8} className="form-row">
        <Col className="col-name" xs={18} md={8} lg={6} xl={4}>
          <label htmlFor="name">Name</label>
          <input className="input" id="name" type="text" name="name" />
        </Col>
        <Col className="col-email" xs={18} md={8} lg={6} xl={4}>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            id="email"
            type="email"
            name="email"
            required
          />
        </Col>
      </Row>
      <Row align="center" gutter={8} className="form-row">
        <Col className="col-subject" xs={18} md={16} lg={12} xl={8}>
          <label htmlFor="subject">Subject</label>
          <input className="input" id="subject" name="subject" type="text" />
        </Col>
      </Row>
      <Row align="center" gutter={8} className="form-row">
        <Col className="col-message" xs={18} md={16} lg={12} xl={8}>
          <label htmlFor="message">Message</label>
          <textarea className="input" id="message" name="message" required />
        </Col>
      </Row>
      <Row align="center" gutter={8} className="form-row">
        <Col xs={18} md={16} lg={12} xl={8}>
          <button className="btn-submit" type="submit">
            Send a message!
          </button>
        </Col>
      </Row>
    </form>
  );
};
export default Contact;
