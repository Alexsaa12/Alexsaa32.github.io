import Image from "next/image";
import styles from "./page.module.css";
import Homebg from "./home/components/homebg";
import Links from "./Navigesn/links";
import Hading from "./home/components/hading";
import Useer from "./home/components/Userstate";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["container"]}>
        <div className={styles["homebg"]}>
          <div className={styles["hebg"]}>
            <Homebg />
          </div>
          <div className={styles["hading"]}>
            <div className={styles["ultrsa"]}>
                 <Hading />
            </div>
          </div>

          <Useer />
      
        </div>
        <Links />
      </div>
    </main>
  );
}
