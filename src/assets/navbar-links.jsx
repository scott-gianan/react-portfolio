import {
  ProjectOutlined,
  HomeOutlined,
  ToolOutlined,
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
    label: <Link to="/skills">Skills</Link>,
    key: "/skills",
    icon: <ToolOutlined />,
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
