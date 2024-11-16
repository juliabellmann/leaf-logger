import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --text-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --bg-color: #ccdad5;
    --accentcolor: #254f41;
    --bg-medium:rgba(255, 196, 0, 0.5);
    --bg-low: rgba(21, 255, 0, 0.5);
    --border-radius-button: 10px;
    --border-radius-input: 5px;

    --nav-height: 50px;

  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-color);
    text-align: center;
    padding: 0 10px;
    margin-bottom: 60px;
  }

  main {
    /* width: 375px; */
  }

`;
