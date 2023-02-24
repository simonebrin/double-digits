import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/news.png";
import NavItem from "../components/navitem";
import styles from "../styles/Home.module.css";

const MENU_LIST = [
  {
    source: "/dbldig.png",
    styling: "logo-right-align",
    width: "215",
    href: "/",
  },

  { source: "/newsog.png", styling: "news-hover", width: "60", href: "/news" },

  {
    source: "/communityog.png",
    styling: "community-hover",
    width: "112",
    href: "/community",
  },
  {
    source: "/eventsog.png",
    styling: "events-hover",
    width: "95",
    href: "/events",
  },
];

const Navbar = () => {
  return (
    <header className={styles.navHeader}>
      {MENU_LIST.map((menu) => (
        <NavItem {...menu} />
      ))}
    </header>
  );
};

export default Navbar;
