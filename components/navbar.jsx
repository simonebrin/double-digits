import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/news.png";
import NavItem from "../components/navitem";
import styles from "../styles/Home.module.css";

const MENU_LIST = [
  { source: "/news.png", width: "60", href: "/news" },
  { source: "/community.png", width: "117", href: "/community" },
  { source: "/events.png", width: "100", href: "/events" },
];
const Navbar = () => {
  return (
    <header className={styles.navHeader}>
      <nav className={styles.nav}>
        <div className={styles.navMenuList}>
          {MENU_LIST.map((menu) => (
            <NavItem {...menu} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
