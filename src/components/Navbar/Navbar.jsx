//react
import { useState, useEffect } from "react";
//dependencies
import { Menu } from "antd";
//styling
import "./Navbar.scss";
//assets
import links from "../../assets/navbar-links";

const Navbar = () => {
  const [current, setCurrent] = useState(window.location.pathname);
  useEffect(() => {
    setCurrent(window.location.pathname);
  }, [current]);
  const onClick = (event) => {
    setCurrent(event.key);
  };
  return (
    <div className="navbar">
      <Menu
        className="menu"
        style={{ flex: "auto", minWidth: 0 }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        items={links}
      />
    </div>
  );
};
export default Navbar;
