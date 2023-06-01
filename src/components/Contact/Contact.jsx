import { Row, Col, Divider, notification, Spin } from "antd";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const refForm = useRef();
  const [api, contextHolder] = notification.useNotification();

  const handleOnChange = (event) => {
    setFormData((prevData) => {
      const newData = {
        ...prevData,
        [event.target.name]: event.target.value,
      };
      return newData;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading((loading) => !loading);
    const response = await emailjs.sendForm(
      "service_424sgvy",
      "template_xznv8bg",
      refForm.current,
      "hHGqyFNAHXtKxqj8v"
    );
    if (response.text === "OK") {
      api.success({
        message: `Message Sent`,
        description:
          "Thank you for reaching out. I will be in touch with you soon.",
        placement: "top",
        duration: 3,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsLoading((loading) => !loading);
    } else {
      api.error({
        message: `Something went wrong.`,
        description: "Kindly send your message again.",
        placement: "top",
        duration: 3,
      });
      setIsLoading((loading) => !loading);
    }
  };

  return (
    <>
      {contextHolder}
      <form className="form" onSubmit={handleSubmit} ref={refForm}>
        <Divider className="contact-divider">Leave a Message!</Divider>
        <Row align="center" gutter={8} className="form-row">
          <Col className="col-name" xs={18} md={8} lg={6} xl={4}>
            <label htmlFor="name">Name</label>
            <input
              className="input"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
            />
          </Col>
          <Col className="col-email" xs={18} md={8} lg={6} xl={4}>
            <label htmlFor="email">Email</label>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              onChange={handleOnChange}
              value={formData.email}
              required
            />
          </Col>
        </Row>
        <Row align="center" gutter={8} className="form-row">
          <Col className="col-subject" xs={18} md={16} lg={12} xl={8}>
            <label htmlFor="subject">Subject</label>
            <input
              className="input"
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleOnChange}
            />
          </Col>
        </Row>
        <Row align="center" gutter={8} className="form-row">
          <Col className="col-message" xs={18} md={16} lg={12} xl={8}>
            <label htmlFor="message">Message</label>
            <textarea
              className="input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Row>
        <Row align="center" gutter={8} className="form-row">
          <Col xs={18} md={16} lg={12} xl={8}>
            {isLoading && <Spin size="large" className="spinner" />}
            {!isLoading && (
              <button className="btn-submit" type="submit">
                Send a message!
              </button>
            )}
          </Col>
        </Row>
      </form>
    </>
  );
};
export default Contact;
