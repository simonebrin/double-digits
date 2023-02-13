import Head from "next/head";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Navbar from "components/navbar";
import Image from "next/image";

export default function News() {
  return (
    <>
      <Navbar />
      <div className={styles.latest}>
        <h1 className={styles.sixthFont}>NEWS</h1>
      </div>
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
 

      {/* <h1 className={`${styles.fourthFont} ${styles.centered}`}>
        Dancing Across America
      </h1>

      <div>
        <div className={styles.centered}>
          <img src="/dancing.png" alt="kids dancing" width={711} height={367} />
        </div>
        <div>
          <p className={`${styles.thirdFont} ${styles.center}`}>
            Kids all over the country are dancing at the prom. We heard their
            stories. Who will you take? Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <h2 className={styles.fifthFont}>
        <Link href="/">Back to home</Link>
      </h2> */}
    </>
  );
}
