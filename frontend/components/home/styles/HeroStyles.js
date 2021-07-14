import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  margin-bottom: var(--spacer-double);
  padding: 0 var(--spacer);
  @media (min-width: 800px) {
    height: calc(100vh - 15.27778rem);
  }

  #span-left {
    text-align: left;
  }

  .hero {
    .round-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 0.5px solid var(--border-color);
    }

    .button-arrow {
      display: inline-flex;

      .arrow-svg {
        margin: auto;
        width: 2vw;
        height: 2vw;
        transform: rotate(90deg);
      }
    }

    @media (min-width: 768px) {
      display: block;
      padding-right: 0;
    }

    .p-ab {
      position: absolute;
      bottom: 0;
      left: var(--spacer);
    }

    .p-ab-right {
      position: absolute;
      bottom: 0;
      right: var(--spacer);
    }

    .text-large {
      font-family: var(--primary-font);
      font-weight: 500;
      font-size: 5.5vw;
      text-transform: uppercase;
      line-height: 0.9;
      letter-spacing: -0.07em;
    }
  }
`;
