import React, { useState } from "react";
import styles from "./ContentInfoScreen.module.css";

/**
 * useImageStatus — lightweight hook to detect whether a background image URL
 * loaded successfully.  Returns "loaded" | "error" | "pending".
 *
 * This keeps the fallback logic in one reusable place and out of render logic.
 */
function useImageStatus(src) {
  const [status, setStatus] = useState("pending");

  React.useEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    const img = new window.Image();
    img.onload = () => setStatus("loaded");
    img.onerror = () => setStatus("error");
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return status;
}

// PUBLIC_INTERFACE
export default function ContentInfoScreen() {
  /**
   * Pixel-precise implementation of Figma node 1:539 (OTT App - Content Info).
   *
   * Layout contract (from Figma globalVars):
   *  - Frame: 1920 × 1080 px
   *  - image layer (1:540):  absolute, 0 0, 1920 × 1080 — background PNG
   *  - GradientHorizontalFull (1:541): absolute, 0 0, 1920 × 1080 — SVG gradient overlay
   *  - MetadataInfoPanel (1:542): column layout, x:96 y:108, width:1150, gap:49px
   *  - SystemDate (1:543): absolute, x:1724 y:55, 100 × 90
   *
   * Background images are applied via inline styles so that process.env.PUBLIC_URL
   * is resolved at runtime only. url() inside CSS modules would cause css-loader
   * to attempt build-time resolution and fail for dynamically-constructed paths.
   *
   * When the background PNG is unavailable (assets not yet served / rate-limited
   * Figma download), a CSS gradient closely matching the Figma dark-cinematic
   * palette is shown instead.  The gradient overlay SVG similarly falls back to
   * a CSS gradient.  Both fallbacks are defined in CSS class .bgFallback /
   * .gradientFallback and swapped in via className when the image status is
   * "error" or "pending".
   *
   * Inputs: none
   * Outputs: JSX — full-viewport OTT content-info screen
   * Side effects: Image preload probes via useImageStatus hook
   * Errors: Image load failures are handled silently with CSS fallbacks
   */
  const publicUrl = process.env.PUBLIC_URL || "";

  const bgSrc = `${publicUrl}/assets/node-1-539/background.png`;
  // User-provided PNG is placed at public/assets/node-1-539/background.png
  // and served at /assets/node-1-539/background.png at runtime via CRA public folder.
  const gradientSrc = `${publicUrl}/assets/node-1-539/gradient_horizontal_full.svg`;

  const bgStatus = useImageStatus(bgSrc);
  const gradStatus = useImageStatus(gradientSrc);

  // Only supply the inline background-image once we know the asset exists.
  const bgStyle =
    bgStatus === "loaded"
      ? { backgroundImage: `url(${bgSrc})` }
      : {};

  const gradientStyle =
    gradStatus === "loaded"
      ? { backgroundImage: `url(${gradientSrc})` }
      : {};

  // Combine base class with fallback class when asset is unavailable.
  const bgClass = [
    styles.bg,
    bgStatus !== "loaded" ? styles.bgFallback : "",
  ]
    .filter(Boolean)
    .join(" ");

  const gradientClass = [
    styles.gradient,
    gradStatus !== "loaded" ? styles.gradientFallback : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={styles.stage}
      aria-label="Content info screen"
    >
      {/* ── Background image layer (1:540) ── */}
      <div className={bgClass} style={bgStyle} aria-hidden="true" />

      {/* ── Gradient overlay layer (1:541) ── */}
      <div className={gradientClass} style={gradientStyle} aria-hidden="true" />

      {/* ── SystemDate (1:543) — top-right, x:1724 y:55 ── */}
      <div className={styles.systemInfo} aria-label="System time and date">
        <div className={styles.clock}>20:44</div>
        <div className={styles.date}>7 abr.</div>
      </div>

      {/* ── MetadataInfoPanel (1:542) — left panel, x:96 y:108 ── */}
      <main className={styles.panel} aria-label="Content information">

        {/* Frame 29360 → Frame 29354: channel row */}
        <div className={styles.channelRow}>
          {/* ChannelAdaptable: channel number (right-aligned) + channel name */}
          <div className={styles.channelNumber} aria-label="Channel number">
            242
          </div>
          <div className={styles.channelName} aria-label="Channel name">
            TNT
          </div>
        </div>

        {/* Frame 29359 → Program Name */}
        <h1 className={styles.title}>Gladiador II</h1>

        {/* Frame 29352 → Frame 29355: metadata row */}
        <div className={styles.metaRow} aria-label="Content metadata">
          <span className={styles.metaText}>Gladiator II</span>
          <span className={styles.divider} aria-hidden="true">|</span>
          <span className={styles.metaText}>2 h 28 min</span>
          <span className={styles.divider} aria-hidden="true">|</span>
          <span className={styles.metaText}>Acción, aventura, drama</span>
          <span className={styles.divider} aria-hidden="true">|</span>
          {/* Tag/AgeRestriction */}
          <span className={styles.ageChip} aria-label="Age rating">
            + 16 Años
          </span>
        </div>

        {/* Frame 29356: timestamp / action row */}
        <div className={styles.actionRow} aria-label="Scheduling and actions">
          {/* Tag/TimeStamp — MÁS TARDE (green) */}
          <span className={styles.laterChip} aria-label="Watch later">
            MÁS TARDE
          </span>

          {/* Hour group: 20:00 – 22:20 */}
          <span className={styles.timeRange} aria-label="Broadcast time">
            20:00&nbsp;‑&nbsp;22:20
          </span>

          <span className={styles.actionDivider} aria-hidden="true">|</span>

          {/* Icon: Replay */}
          <span className={styles.iconBtn} aria-label="Replay" title="Replay">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
          </span>

          <span className={styles.actionDivider} aria-hidden="true">|</span>

          {/* Icon: Record */}
          <span className={styles.iconBtn} aria-label="Record" title="Record">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="8"/>
            </svg>
          </span>
        </div>

        {/* TextBox3Lines: description */}
        <p className={styles.description}>
          Lucio es obligado a entrar en el Coliseo después de que su hogar sea
          conquistado por los tiránicos emperadores que ahora dirigen Roma con
          puño de hierro. Con la ira en su corazón y el futuro del Imperio en
          juego, Lucio debe mirar hacia atrás para encontrar fuerza y devolver
          la gloria de Roma a su pueblo.
        </p>

        {/* PanelButtons group */}
        <div className={styles.actions} aria-label="Actions">
          {/* PanelButtons On (focused) — Programar */}
          <button className={styles.primaryBtn} type="button">
            Programar
          </button>
          {/* PanelButtons Off states */}
          <button className={styles.secondaryBtn} type="button">
            <span className={styles.secondaryBtnIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
              </svg>
            </span>
          </button>
          <button className={styles.secondaryBtn} type="button">
            <span className={styles.secondaryBtnIcon} aria-hidden="true">
              {/* AudioSubtitles icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </span>
          </button>
          <button className={styles.secondaryBtn} type="button">
            <span className={styles.secondaryBtnIcon} aria-hidden="true">
              {/* Reminder icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6.5-6v-5.5c0-3.07-2.14-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68C7.14 4.86 5 7.43 5 10.5V16l-2 2v1h17v-1l-2-2z"/>
              </svg>
            </span>
          </button>
          <button className={styles.secondaryBtn} type="button">
            <span className={styles.secondaryBtnIcon} aria-hidden="true">
              {/* Unfavourite icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </span>
          </button>
          <button className={styles.secondaryBtn} type="button">
            <span className={styles.secondaryBtnIcon} aria-hidden="true">
              {/* Block icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.68L5.68 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.68l11.22-11.22C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
              </svg>
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
