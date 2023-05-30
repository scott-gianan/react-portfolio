import {
  ProjectOutlined,
  HomeOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/about">About</Link>,
    key: "/skills",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="/projects">Projects</Link>,
    key: "/projects",
    icon: <ProjectOutlined />,
  },
  {
    label: <Link to="/contact">Contact Me</Link>,
    key: "/contact",
    icon: <MailOutlined />,
  },
];
