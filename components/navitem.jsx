import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const NavItem = ({ source, width, href, active }) => {

  return (
    <Link href={href}>
          <Image src={source} width={width} height="30"/>
     </Link>
  );
};

export default NavItem;
