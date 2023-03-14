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
    source: "/communityhover.png",
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

        /* <svg className={styles.hamburger}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg> */
      
