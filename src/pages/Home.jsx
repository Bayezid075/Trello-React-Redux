import React from "react";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.textLayout}>
        <h1 className={styles.heading}>TRELLO BY BAYEZID</h1>
        <div className={styles.start}>Start Create Something Suspicious</div>
      </div>
    </div>
  );
}
