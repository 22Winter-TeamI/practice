import React from "react";
import styles from "../css/MainMenuBar.module.css";
import Logo from "../images/logo.svg";

export default function MainMenuBar() {
  return (
    <div className={styles.menuBar}>
      <nav className={styles.menuBar__mainMenu}>
        <ul>
          <li>
            <a>
              <img src={Logo} />
            </a>
          </li>
          <li>
            <a href="/">Remove background</a>
          </li>
          <li>
            <a href="/">Convert painting style</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <button>Log in</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
