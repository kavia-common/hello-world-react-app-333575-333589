import React from "react";
import styles from "./ContentInfoScreen.module.css";

// PUBLIC_INTERFACE
export default function ContentInfoScreen() {
  /** Pixel-precise implementation of Figma node 1:539 (OTT App - Content Info). */
  return (
    <div
      className={styles.stage}
      style={{ "--public-url": process.env.PUBLIC_URL || "" }}
      aria-label="Content info screen"
    >
      {/* Background layers (assets expected at /public/assets/...) */}
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.gradient} aria-hidden="true" />

      {/* Top-right clock/date */}
      <div className={styles.systemInfo} aria-label="System time and date">
        <div className={styles.clock}>20:44</div>
        <div className={styles.date}>7 abr.</div>
      </div>

      {/* Left metadata panel */}
      <main className={styles.panel} aria-label="Content information">
        <div className={styles.channelRow}>
          <div className={styles.channelLogo} aria-hidden="true">
            <div className={styles.logoCircle} />
          </div>
          <div className={styles.channelText}>
            <div className={styles.channelName}>HBO</div>
            <div className={styles.channelSub}>Canal 402</div>
          </div>
        </div>

        <h1 className={styles.title}>Gladiador II</h1>

        <div className={styles.metaRow} aria-label="Content metadata">
          <span className={styles.metaText}>2024</span>
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          <span className={styles.metaText}>Acción</span>
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          <span className={styles.metaText}>2h 18m</span>

          <span className={styles.spacer} />

          <span className={styles.chip} aria-label="Age rating">
            18 Años
          </span>
          <span className={styles.chip} aria-label="Watch later">
            Later
          </span>

          <span className={styles.iconGroup} aria-hidden="true">
            <span className={styles.icon}>⟲</span>
            <span className={styles.icon}>●</span>
          </span>
        </div>

        <p className={styles.description}>
          Años después de presenciar la muerte del venerado héroe Máximo a manos
          de su tío, Lucio se ve obligado a entrar en el Coliseo tras la
          conquista de su hogar por los tiránicos emperadores que ahora dirigen
          Roma con puño de hierro.
        </p>

        <div className={styles.actions} aria-label="Actions">
          <button className={styles.primaryBtn} type="button">
            Ver ahora
          </button>
          <button className={styles.secondaryBtn} type="button">
            Grabar
          </button>
          <button className={styles.secondaryBtn} type="button">
            Más info
          </button>
        </div>
      </main>
    </div>
  );
}
