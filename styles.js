import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --text-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --bg-color: #f0f0f0;
    --accentcolor: #1a3d31;
    --bg-navbar: var(--accentcolor);
    --confirm: #78f184;
    --deny: #b73333;
    --border-radius-button: 10px;
    --border-radius-input: 5px;

    --min-width-med: 768px;

    --nav-height: 50px;

  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    text-align: center;
    margin-bottom: calc(var(--nav-height) + 20px);
    background-color: var(--bg-color);
    color: black;
  }

  main {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    min-height: 100vh;
  }

`;
