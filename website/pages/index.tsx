import styles from "../src/siteLayout/ui/Home.module.css";
import { ListOfferings } from "../src/ListOfferings/ListOfferings";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>IDEA.DC5B</h1>
        <p className={styles.description}>You must have a head</p>
        <ListOfferings />
      </main>
    </div>
  );
}