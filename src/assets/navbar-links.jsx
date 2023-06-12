import {
  ProjectOutlined,
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  ProfileOutlined,
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
    key: "/about",
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
  {
    label: (
      <a
        href="https://drive.google.com/file/d/168UFUvb7IUl7E0bvWFPKihxaDqLpWMCe/view"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    ),
    key: "resume",
    icon: <ProfileOutlined />,
  },
];
