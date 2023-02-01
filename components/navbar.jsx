import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/news.png";
import NavItem from "../components/navitem";
import styles from "../styles/Home.module.css";

const MENU_LIST = [
    // {Image: "/news.png", href: "/news"},
  { source: "/news.png", width: "60", href: "/news" },
    { source: "/events.png", width: "100", href: "/events" },
  { source: "/community.png", width: "117", href: "/community" },
//   { source: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.navHeader}>
      <nav className={styles.nav}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.navMenuBar}
        >
        </div>
        <div className={`${navActive ? "active" : ""} navMenuList`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
