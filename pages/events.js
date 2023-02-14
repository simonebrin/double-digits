import Head from "next/head";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Navbar from "components/navbar";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <Navbar />
      <div className={styles.cover}>
        <img
          className={styles.cover}
          src="/eventscover.png"
          alt="events cover image"
          width={1156}
          height={464}
        />
      </div>
      {/* <div className={styles.latest}>
        <h1 className={styles.sixthFont}>NEWS</h1>
      </div> */}
      <div className={styles.row}>
        <div className={styles.column}>
          <img
            src="/volunteer.jpeg"
            alt="teens volunteering"
            width={1250}
            height={833}
          />
        </div>
        <div className={styles.column}>
          <h1 className={styles.secondFont}>Teens Everywhere are Volunteering</h1>
          <p className={styles.firstFont}>
            Arrange for your class to volunteer
          </p>
        </div>
      </div>

      <div className={styles.rowRight}>
        <div className={styles.columnRight}>
          <img
            src="/zoom.jpeg"
            alt="teen on zoom"
            width={627}
            height={447}
          />
        </div>
        <div className={styles.columnRightText}>
          <h1 className={styles.fourthFont}>US Teenager Zoom</h1>
          <p className={styles.thirdFont}>
            We're hosting a teens across America zoom!
          </p>
        </div>
      </div>

      <h2 className={styles.fifthFont}>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
