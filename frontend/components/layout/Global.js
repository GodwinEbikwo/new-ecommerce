import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --golden-ratio: 2.2rem;
  --max-width: 140rem;

  --primary-accent: #f3f2ec;
  --secondary-accent: #e3e4df;

  --primary-black: #111;
  --secondary-black: #333;
  --primary-white: #f8f8f8;

  --text-color: #161616;
  --warning: #e23737;

  --primary-font: 'Roslindale', 'Inter', 'Helvetica Neue', sans-serif;
  --secondary-font: 'Roslindale-Italic';
  --alt-font: 'ivypresto-display';

  --button-black: #111;
  --button-white: #f8f8f8;

  --fluid-type-min: 3rem;
  --fluid-type-max: 4rem;
  --fluid-type-target: 4vw;

  --btn-bs: 0 4px 14px 0 rgb(0 0 0 / 10%);
  --form-bs: 0 4px 50px 0 rgb(0 0 0 / 18%);

  --border-color: rgba(68, 67, 67, 0.2);

  --border-radius-small: 3px;
  --border-radius-medium: 5px;
  --border-radius-large: 30px;

  --ls-small: -0.02em;
  --ls-medium: -0.03em;
  --ls-large: -0.05em;

  --spacing-small: 10px;
  --spacing-medium: 20px;
  --spacing-large: 30px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
div,
button,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
img,
strong,
ol,
ul,
li,
form,
aside,
footer,
header,
input,
optgroup,
select,
textarea,
nav,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

li,
ul {
  list-style: none;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  background-color: var(--primary-accent);
  &:not(.has-scroll-init) {
    cursor: wait;
    overflow: hidden;
  }
}

html.has-scroll-smooth {
  overflow: hidden;
}

html.has-scroll-dragging {
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
}
.c-scrollbar:hover {
  transform: scaleX(1.45);
}

.c-scrollbar:hover,
.has-scroll-scrolling .c-scrollbar,
.has-scroll-dragging .c-scrollbar {
  opacity: 1;
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: grab;
}

.has-scroll-dragging .c-scrollbar_thumb {
  cursor: grabbing;
}

body {
  min-height: 100vh;
  font-kerning: none;
  transform: translateZ(0);
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  font-family: 'Inter', 'Helvetica Neue', -apple-system, sans-serif;
  line-height: 1.5;
  font-size: clamp(1.4rem, 1.5vw, 1.5rem);
  overscroll-behavior-y: none;
  color: var(--text-color);

  &.no-scroll {
    overflow-y: hidden;
    touch-action: none;
  }
}

a {
  text-decoration: none;
  color: inherit;
  letter-spacing: var(--ls-small);
}

h1 {
  font-family: var(--primary-font);
  font-weight: normal;
  font-size: clamp(
    var(--fluid-type-min, 1rem),
    calc(1rem + var(--fluid-type-target, 3vw)),
    var(--fluid-type-max, 1.3rem)
  );
}

h2,
h3,
h4,
p {
  letter-spacing: var(--ls-small);
  hyphens: auto;
  word-break: break-word;
}

.hide-for-mobile {
  display: unset;
  @media (max-width: 47.9375em) {
    display: none;
  }
}

.hide-for-desktop {
  display: unset;
  @media (min-width: 48em) {
    display: none;
  }
}

.split-parent {
  overflow: hidden;
}
.split-child {
  display: inline-block;
}

`;
