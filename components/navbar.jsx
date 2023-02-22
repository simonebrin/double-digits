import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/news.png";
import NavItem from "../components/navitem";
import styles from "../styles/Home.module.css";

const MENU_LIST = [
  { source: "/newsog.png", width: "60", href: "/news" },
  { source: "/communityog.png", width: "112", href: "/community" },
  { source: "/eventsog.png", width: "95", href: "/events" },
];

const Navbar = () => {
  return (
    <header className={styles.navHeader}>
      <nav className={styles.nav}>
        <div className={styles.navleft}>
          <Link href="/">
            <img
              // className={styles.navleft}
              src="/dbldig.png"
              alt="double digits text"
              width={215}
            />
          </Link>
        </div>
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
