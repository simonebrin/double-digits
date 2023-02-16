import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const NavItem = ({ source, width, href }) => {

  return (
    <Link class={styles.nav__link} href={href} style={{paddingLeft: "15px"}}>
          <Image src={source} width={width} height="30"/>
     </Link>
  );
};

export default NavItem;
