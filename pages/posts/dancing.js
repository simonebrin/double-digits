import Head from "next/head";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Navbar from "components/navbar";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
      <Navbar />
      <div className={styles.centered}>
        <img src="/dancing.png" alt="kids dancing" width={711} height={367} />
      </div>
      <h1 className={`${styles.fourthFont} ${styles.centered}`}>
        Dancing Across America
      </h1>

      <div>
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
      </h2>
    </>
  );
}