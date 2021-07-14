import styled from 'styled-components';

export const CartBox = styled.aside`
  outline: none;
  position: fixed;
  background-color: var(--green);
  height: 100vh;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 590px;
  bottom: 0;
  transform: translate3d(100%, 0, 0);
  transition: transform 1.2s cubic-bezier(0.77, 0, 0.18, 1) 0.1s;
  will-change: transform;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: var(--spacer);

  ${(props) =>
    props.open &&
    `transform: translate3d(0, 0, 0); 
    transition: transform 1s cubic-bezier(.76,0,.24,1);
    cursor: pointer;`};

  @media (max-width: 767px) {
    min-width: 100%;
  }

  p {
    color: var(--text-black);
    letter-spacing: var(--ls-medium);
  }

  .header-container {
    border-bottom: 2px double var(--button-black);
    .c-header_line {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0;
      transform: scaleX(0);
      transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);

      &.is-inview {
        transform: scaleX(1);
      }
    }

    .cart-header {
      flex-direction: column;
      text-transform: uppercase;
      padding-bottom: 0.5vw;
      color: var(--text-black);

      .cart-title {
        @media (min-width: 800px) {
          font-size: 4vw;
          line-height: 0.8;
        }
      }
      .cart-empty {
        margin: var(--golden-ratio) 0;
        margin-bottom: 0.5rem;
        margin-left: 0.4em;
        line-height: 1.2;
        color: var(--text-black);
      }
    }
    .button_label {
      position: absolute;
      right: var(--spacer);
      top: var(--spacer);
      cursor: pointer;
    }
  }

  .scroll-container {
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  footer {
    align-items: center;

    h1 {
      margin: 0.5rem 0;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      letter-spacing: normal;
      color: var(--text-black);
    }

    p {
      margin: 1rem 0;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      font-weight: 400;
    }
  }
`;
