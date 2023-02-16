import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Community() {
  return (
    <>
      <Navbar />
      <div className={styles.cover}>
        <img
          className={styles.cover}
          src="/newcommunity.png"
          alt="community cover image"
          width={1110}
          height={445}
        />
      </div>

      <div>
        <p className={`${styles.sixthFont} ${styles.center}`}>
          A place to chat...
        </p>
      </div>
      <div className={styles.centered}>
        <img src="/forum.png" alt="forum screenshot" width={623} height={596} />
      </div>

      <h2 className={styles.fifthFont}>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
