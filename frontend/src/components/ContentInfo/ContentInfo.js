import React from "react";
import "./ContentInfo.css";

/**
 * ReplayIcon — circular replay/rewind icon rendered as inline SVG.
 *
 * Figma source: "Replay" icon component (Forma + Vector layers).
 * Rendered as inline SVG — consistent with RecordIcon, AudioSubtitlesIcon,
 * and ScheduleIcon in this file — to remove any dependency on external asset
 * files that are not available from the Figma API.
 *
 * Contract:
 *   Inputs:  size (number px, default 32), dark (bool — dark stroke for light bg)
 *   Outputs: <svg> element, aria-hidden="true"
 *   Errors:  none (pure render, no I/O)
 *   Side effects: none
 */
// PUBLIC_INTERFACE
function ReplayIcon({ size = 32, dark = false }) {
  /** Replay icon (inline SVG). `dark` renders it in dark colour for light backgrounds. */
  const stroke = dark ? "#282828" : "#ffffff";
  const fill = dark ? "#282828" : "#ffffff";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="ci-icon ci-icon--replay"
    >
      {/* Circular arrow (Forma layer) — counter-clockwise arc */}
      <path
        d="M16 6 A10 10 0 1 0 26 16"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrowhead at open end of arc (Vector layer) */}
      <polyline
        points="22,10 26,16 20,16"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Centre play-from-start indicator */}
      <circle cx="16" cy="16" r="2" fill={fill} />
    </svg>
  );
}

/**
 * RecordIcon — circular record button icon rendered as inline SVG.
 *
 * Contract:
 *   Inputs:  size (number px, default 32), dark (bool)
 *   Outputs: <svg> element, aria-hidden="true"
 *   Errors:  none
 *   Side effects: none
 */
// PUBLIC_INTERFACE
function RecordIcon({ size = 32, dark = false }) {
  /** Record icon. `dark` renders it in a dark colour for light backgrounds. */
  const fill = dark ? "#282828" : "#ffffff";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="ci-icon ci-icon--record"
    >
      {/* Outer circle outline */}
      <circle cx="16" cy="16" r="11" stroke={fill} strokeWidth="2.5" fill="none" />
      {/* Inner filled record dot */}
      <circle cx="16" cy="16" r="6" fill="#FF4444" />
    </svg>
  );
}

/**
 * AudioSubtitlesIcon — audio and subtitles icon rendered as inline SVG.
 *
 * Contract:
 *   Inputs:  size (number px, default 32), dark (bool)
 *   Outputs: <svg> element, aria-hidden="true"
 *   Errors:  none
 *   Side effects: none
 */
// PUBLIC_INTERFACE
function AudioSubtitlesIcon({ size = 32, dark = false }) {
  /** Audio & Subtitles icon. `dark` renders it in dark colour for light backgrounds. */
  const fill = dark ? "#282828" : "#ffffff";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="ci-icon ci-icon--audio-subtitles"
    >
      {/* Speech bubble (audio) */}
      <path
        d="M3 5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V14C21 15.1 20.1 16 19 16H13L9 20V16H5C3.9 16 3 15.1 3 14V5Z"
        fill={fill}
        fillOpacity="0.9"
      />
      {/* Subtitle lines */}
      <rect x="16" y="21" width="13" height="2" rx="1" fill={fill} fillOpacity="0.9" />
      <rect x="16" y="25" width="10" height="2" rx="1" fill={fill} fillOpacity="0.9" />
    </svg>
  );
}

/**
 * ScheduleIcon — calendar/schedule icon for the "Programar" button.
 *
 * Contract:
 *   Inputs:  size (number px, default 40), dark (bool)
 *   Outputs: <svg> element, aria-hidden="true"
 *   Errors:  none
 *   Side effects: none
 */
// PUBLIC_INTERFACE
function ScheduleIcon({ size = 40, dark = false }) {
  /** Schedule / calendar icon for action buttons. */
  const stroke = dark ? "#282828" : "#ffffff";
  const dotFill = dark ? "#282828" : "#ffffff";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="6" y="9" width="28" height="24" rx="3" stroke={stroke} strokeWidth="2.5" />
      <rect x="13" y="5" width="3" height="8" rx="1.5" fill={dotFill} />
      <rect x="24" y="5" width="3" height="8" rx="1.5" fill={dotFill} />
      <line x1="6" y1="17" x2="34" y2="17" stroke={stroke} strokeWidth="2.5" />
    </svg>
  );
}

/**
 * ContentInfo — Full-screen OTT Content Info screen.
 *
 * Implements Figma node 0:539 "Content Info" (1920 × 1080).
 * Displays:
 *  - Background: poster image when bgImageUrl is provided; CSS cinematic
 *    gradient fallback (ci-bg--fallback) otherwise.
 *  - System date/time in top-right corner
 *  - Channel + programme metadata panel (top-left)
 *  - Movie description paragraph
 *  - Action buttons row (Programar, Replay, Record × 3, Audio & Subtitles)
 *
 * Contract:
 *   Inputs:  bgImageUrl (string, optional) — URL of the background poster.
 *            Defaults to REACT_APP_BG_IMAGE_URL env var, or "" (CSS fallback).
 *   Outputs: full-screen <div> with nested layout elements
 *   Errors:  none (pure render; no external I/O)
 *   Side effects: none
 *
 * Background image note:
 *   The Figma poster PNG (content-info-bg.png) could not be retrieved from the
 *   Figma API (file returns 404). When a real poster URL is available, supply it
 *   via REACT_APP_BG_IMAGE_URL in .env or via the bgImageUrl prop. The CSS
 *   ci-bg--fallback class provides a cinematic dark gradient in the meantime.
 */
// PUBLIC_INTERFACE
function ContentInfo({ bgImageUrl = process.env.REACT_APP_BG_IMAGE_URL || "" }) {
  /**
   * Content Info screen — Figma node 0:539.
   * Full-screen OTT detail view for movie/programme information.
   *
   * @param {string} [bgImageUrl] - Optional URL of the background poster image.
   */
  const bgStyle = bgImageUrl ? { backgroundImage: `url(${bgImageUrl})` } : {};

  return (
    <div className="ci-root" role="main" aria-label="Content Info">

      {/* ── Layer 0: Background image / fallback gradient ── */}
      <div
        className={`ci-bg${bgImageUrl ? "" : " ci-bg--fallback"}`}
        style={bgStyle}
        role="img"
        aria-label="Gladiador II movie background"
      />

      {/* ── Layer 1: Horizontal gradient overlay (darkens left side) ── */}
      <div className="ci-gradient-overlay" aria-hidden="true" />

      {/* ── System date/time — top-right corner (x:1724, y:55) ── */}
      <aside className="ci-system-date" aria-label="System time and date">
        <time className="ci-system-date__time" dateTime="20:44">20:44</time>
        <span className="ci-system-date__date">7 abr.</span>
      </aside>

      {/* ── Metadata info panel (x:96, y:108, w:1150) ── */}
      <section className="ci-panel" aria-label="Programme information">

        {/* ── Top group: channel · title · meta tags · schedule ── */}
        <div className="ci-panel__top">

          {/* Channel row: 242  TNT */}
          <div className="ci-channel-row" aria-label="Channel">
            <span className="ci-channel-number">242</span>
            <span className="ci-channel-name">TNT</span>
          </div>

          {/* Programme title */}
          <div className="ci-program-name-row">
            <h1 className="ci-program-name">Gladiador II</h1>
          </div>

          {/* Metadata block */}
          <div className="ci-meta-block">

            {/* Tags row: original title | duration | genre | age */}
            <div className="ci-meta-tags-row" role="list" aria-label="Programme details">
              <span className="ci-meta-text" role="listitem">Gladiator II</span>
              <span className="ci-meta-divider" aria-hidden="true">|</span>
              <span className="ci-meta-text" role="listitem">2 h 28 min</span>
              <span className="ci-meta-divider" aria-hidden="true">|</span>
              <span className="ci-meta-text" role="listitem">Acción, aventura, drama</span>
              <span className="ci-meta-divider" aria-hidden="true">|</span>
              <span
                className="ci-tag ci-tag--age"
                role="listitem"
                aria-label="Age restriction: 16 years and over"
              >
                + 16 Años
              </span>
            </div>

            {/* Schedule row: badge · time range · divider · replay · divider · record */}
            <div className="ci-time-row" aria-label="Broadcast schedule">

              {/* "MÁS TARDE" green badge */}
              <span className="ci-tag ci-tag--later">MÁS TARDE</span>

              {/* Time range */}
              <div className="ci-time-group" aria-label="From 20:00 to 22:20">
                <time className="ci-time" dateTime="20:00">20:00</time>
                <span className="ci-time-bar" aria-hidden="true"> - </span>
                <time className="ci-time" dateTime="22:20">22:20</time>
              </div>

              {/* Pipe divider */}
              <span className="ci-divider32" aria-hidden="true">|</span>

              {/* Replay icon button */}
              <button className="ci-icon-btn" aria-label="Replay" title="Replay">
                <ReplayIcon size={32} />
              </button>

              {/* Pipe divider */}
              <span className="ci-divider32" aria-hidden="true">|</span>

              {/* Record icon button */}
              <button className="ci-icon-btn" aria-label="Record" title="Record">
                <RecordIcon size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom group: description + action buttons ── */}
        <div className="ci-panel__bottom">

          {/* Movie synopsis — 3–4 lines (TextBox3Lines, w:925, h:117) */}
          <p className="ci-description">
            Lucio es obligado a entrar en el Coliseo después de que su hogar sea
            conquistado por los tiránicos emperadores que ahora dirigen Roma con puño
            de hierro. Con la ira en su corazón y el futuro del Imperio en juego,
            Lucio debe mirar hacia atrás para encontrar fuerza y devolver la gloria
            de Roma a su pueblo.
          </p>

          {/* Action buttons row (862 × 156 group) */}
          <div className="ci-actions" role="group" aria-label="Programme actions">

            {/* Button 1 — Programar (active/ON state: white circle) */}
            <button className="ci-btn ci-btn--active" aria-pressed="true" aria-label="Programar">
              <span className="ci-btn__icon">
                <ScheduleIcon size={40} dark={true} />
              </span>
              <span className="ci-btn__label">Programar</span>
            </button>

            {/* Button 2 — Replay (focused state: semi-transparent circle) */}
            <button className="ci-btn ci-btn--focused" aria-pressed="false" aria-label="Ver desde el principio">
              <span className="ci-btn__icon">
                <ReplayIcon size={40} />
              </span>
            </button>

            {/* Button 3 — Off/inactive */}
            <button className="ci-btn ci-btn--inactive" aria-pressed="false" aria-label="Opción 3">
              <span className="ci-btn__icon">
                <RecordIcon size={40} />
              </span>
            </button>

            {/* Button 4 — Off/inactive */}
            <button className="ci-btn ci-btn--inactive" aria-pressed="false" aria-label="Opción 4">
              <span className="ci-btn__icon">
                <RecordIcon size={40} />
              </span>
            </button>

            {/* Button 5 — Off/inactive */}
            <button className="ci-btn ci-btn--inactive" aria-pressed="false" aria-label="Opción 5">
              <span className="ci-btn__icon">
                <RecordIcon size={40} />
              </span>
            </button>

            {/* Button 6 — Audio & Subtitles (focused) */}
            <button className="ci-btn ci-btn--focused" aria-pressed="false" aria-label="Audio y subtítulos">
              <span className="ci-btn__icon">
                <AudioSubtitlesIcon size={40} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentInfo;
