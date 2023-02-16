import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function News() {
  return (
    <>
      <Navbar />
      <div className={styles.cover}>
        <img
          className={styles.cover}
          src="/newnews.png"
          alt="news cover image"
          width={1110}
          height={445}
        />
      </div>
      {/* <div className={styles.latest}>
        <h1 className={styles.sixthFont}>NEWS</h1>
      </div> */}
      <div className={styles.row}>
        <div className={styles.column}>
          <img
            src="/superbowl.jpg"
            alt="superbowl screenshot"
            width={1250}
            height={833}
          />
        </div>
        <div className={styles.column}>
          <h1 className={styles.fourthFont}>Super Bowl LVII</h1>
          <p className={styles.thirdFont}>
            Kansas City Chiefs win the Super Bowl!
          </p>
        </div>
      </div>

      <div className={styles.rowRight}>
        <div className={styles.columnRight}>
          <img
            src="/rihanna.png"
            alt="Rihanna Super Bowl"
            width={627}
            height={447}
          />
        </div>
        <div className={styles.columnRightText}>
          <h1 className={styles.secondFont}>Rihanna Takes the Stage</h1>
          <p className={styles.firstFont}>
            We rate Rihanna's Super Bowl performance
          </p>
        </div>
      </div>

      <h2 className={styles.fifthFont}>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
