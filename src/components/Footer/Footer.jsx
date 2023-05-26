import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
//styles
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>Scott Russell R. Gianan</p>
      <a target="_blank" href="https://github.com/" rel="noreferrer">
        LinkedIn
      </a>
      <span> | </span>
      <a target="_blank" href=" https://www.linkedin.com/" rel="noreferrer">
        Github
      </a>
    </footer>
  );
};

export default Footer;
