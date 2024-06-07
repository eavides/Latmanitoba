import React, { useRef, useEffect } from "react";
import logom from "../../images/logo_lat.png";

function Cover({ t }) {
  return (
    <div className="cover__container">
      <div class="circle">
        <img src={logom} className="cover__logo" alt="logo manitoba"></img>
      </div>

      <h1 className="cover__name">LATINAS MANITOBA INC.</h1>
      <div className="cover__line"></div>
      <nav className="horizontal-menu">
        <ul>
          <li>
            <a href="/">{t("Home")}</a>
          </li>
          <li>
            <a href="#about">{t("About")}</a>
          </li>
          <li>
            <a href="#members">{t("Members")}</a>
          </li>
          <li>
            <a href="#contact">{t("Calendar")}</a>
          </li>
          <li>
            <a href="#blog">{t("Galery")}</a>
          </li>
          <li>
            <a href="#blog">{t("Contact")}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Cover;
