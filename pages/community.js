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

      <div className={styles.containers}>
  <img src="/boyface.jpeg" alt="Avatar"/>
  <p>Hello. How are you today?</p>
        <span className={styles.timeRight}>11:00</span>
</div>

<div className={styles.containerDarker}>
  <img src="/girlface.jpeg" alt="Avatar" className={styles.containerRight} />
  <p>Hey! I'm fine. Thanks for asking!</p>
        <span className={styles.timeLeft}>11:01</span>
</div>

<div className={styles.containers}>
  <img src="/boyface.jpeg" alt="Avatar"/>
  <p>Sweet! So, what do you wanna do today?</p>
        <span className={styles.timeRight}>11:02</span>
</div>

<div className={styles.containerDarker}>
        <img src="/girlface.jpeg" alt="Avatar" className={styles.containerRight} />
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
        <span className={styles.timeLeft}>11:05</span>
</div>

      <h2 className={styles.fifthFont}>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
