/* eslint-disable @next/next/no-img-element */
import { SingInButton } from "../SingInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
}
