import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(68, 68, 68);
    color: rgb(255, 255, 255);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  input.standard {
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 3em;
  }
  
  input.standard:focus::placeholder {
    color: transparent;
  }

  button.standard {
    align-items: center;
    appearance: none;
    background-clip: padding-box;
    background-color: initial;
    background-image: none;
    border-style: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    flex-direction: row;
    flex-shrink: 0;
    font-family: Eina01, sans-serif;
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    line-height: 24px;
    margin: 0;
    min-height: 64px;
    outline: none;
    overflow: visible;
    padding: 19px 26px;
    pointer-events: auto;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    width: auto;
    word-break: keep-all;
    z-index: 0;
  }

  @media (min-width: 768px) {
    button.standard {
      padding: 19px 32px;
    }
  }

  button.standard:before,
  button.standard:after {
    border-radius: 80px;
  }

  button.standard:before {
    background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }

  button.standard:after {
    background-color: initial;
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    content: "";
    display: block;
    left: 4px;
    overflow: hidden;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 100ms ease-out;
    z-index: -1;
  }

  button.standard:hover:not(:disabled):before {
    background: linear-gradient(
      92.83deg,
      rgb(255, 116, 38) 0%,
      rgb(249, 58, 19) 100%
    );
  }

  button.standard:hover:not(:disabled):after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  button.standard:active:not(:disabled) {
    color: #ccc;
  }

  button.standard:active:not(:disabled):before {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  }

  button.standard:active:not(:disabled):after {
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    left: 4px;
    right: 4px;
    top: 4px;
  }

  button.standard:disabled {
    cursor: default;
    opacity: 0.24;
  }
`;
