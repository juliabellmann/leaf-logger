import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --text-font: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    --bg-color: #f2f2f2;
    --bg-color-btn: #fff;
    --accent-color: #15352b;
    --bg-navbar: var(--accent-color);
    --confirm: #78f184;
    --deny: #b73333;
    --border-radius-button: 10px;
    --border-radius-input: 5px;

    --min-width-med: 768px;

    --nav-height: 60px;

    --width-btn: 48px;
    --height-btn: var(--width-btn);

    --padding: 10px;

  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-color);
    color: black;
    text-align: center;
    margin: 0;
    margin-bottom: calc(var(--nav-height) + 20px);
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
    width: 100vw;
    min-height: 100vh;
  }
`;
