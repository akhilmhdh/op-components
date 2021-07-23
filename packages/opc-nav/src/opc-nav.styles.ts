import { css } from "lit-element";

export default css`
  .opc-nav-container h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  button,
  input {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    vertical-align: baseline;
    background: none;
  }

  .opc-nav-container button {
    cursor: pointer;
  }

  :host {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9;
    --opc-nav-transition--default: 120ms ease-in-out;
    --opc-title__font-size: 20px;
    --opc-nav-menu__spacing-size: 24px;
    --opc-nav-menu__link-color: #151515;
    --opc-nav-container__z-index: 9;
    --opc-nav-btn__padding: 16px;
    --opc-nav-btn__hover-color: #316dc11a;
    --opc-global--Heading--Font-Family: "Red Hat Display", Overpass "Arial";
    --opc-global--Font-Family: "Red Hat Text", Overpass, "Arial";
  }

  .opc-nav-container {
    display: flex;
    font-family: var(--opc-global--Font-Family);
    align-items: center;
    border: 1px solid #dddddd;
    z-index: var(--opc-nav-container__z-index, 9);
    background-color: #fff;
  }

  .opc-logo-container {
    padding: 0 var(--opc-nav-btn__padding);
  }

  .opc-nav-menu {
    padding: var(--opc-nav-btn__padding);
  }

  .opc-nav-menu ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .opc-nav-menu ul li a {
    font-family: var(--opc-global--Font-Family);
    text-decoration: none;
    color: var(--opc-nav-menu__link-color, #151515);
  }

  .opc-nav-menu ::slotted(a) {
    text-decoration: none;
    color: var(--opc-nav-menu__link-color, #151515);
  }

  .opc-nav-menu ul li:not(:last-child) {
    margin-right: var(--opc-nav-menu__spacing-size, 24px);
  }

  .opc-nav-icon-btn {
    border: 0;
    background: none;
    cursor: pointer;
  }

  .opc-nav-flex-grow {
    flex-grow: 1;
  }

  .opc-nav-search__form {
    display: flex;
    align-items: center;
    transition: var(--opc-nav-transition--default, 120ms ease-in-out);
    background: none;
  }

  .opc-nav-search__form:hover {
    background: var(--opc-nav-btn__hover-color);
  }

  .opc-nav-search__form:hover img {
    filter: invert(42%) sepia(13%) saturate(5058%) hue-rotate(187deg)
      brightness(85%) contrast(85%);
  }

  .opc-nav-search__btn {
    padding: var(--opc-nav-btn__padding);
  }

  .opc-nav-search__input {
    font-family: var(--opc-global--Heading--Font-Family);
    font-size: 16px;
    width: 0;
    opacity: 0;
    transition: var(--opc-nav-transition--default, 120ms ease-in-out);
    outline: none;
  }

  .opc-nav-search__input:required {
    box-shadow: none;
  }

  .opc-nav-search__input-active {
    opacity: 1;
    width: 20vw;
    max-width: 360px;
    padding-right: 20px;
  }

  .opc-nav-btn-container {
    display: flex;
    align-items: center;
  }

  .opc-nav-btn-container ::slotted(button),
  .opc-nav-btn-container button {
    padding: var(--opc-nav-btn__padding);
    border: 0;
    cursor: pointer;
    background: none;
    transition: var(--opc-nav-transition--default);
  }

  .opc-nav-btn-container ::slotted(button:hover),
  .opc-nav-btn-container button:hover,
  .opc-nav-btn-container ::slotted(button:active),
  .opc-nav-btn-container button:active {
    background: var(--opc-nav-btn__hover-color);
  }

  .opc-nav-btn-container button:hover img,
  .opc-nav-btn-container button:active img {
    filter: invert(42%) sepia(13%) saturate(5058%) hue-rotate(187deg)
      brightness(85%) contrast(85%);
  }
`;
