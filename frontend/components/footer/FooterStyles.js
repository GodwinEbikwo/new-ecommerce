import styled from 'styled-components';

export const FooterStyles = styled.footer`
  border-top: 0.5px solid var(--border-color);
  overflow: hidden;
  position: relative;

  @media (min-width: 800px) {
    padding: 0 var(--golden-ratio);
  }

  .arrow-svg {
    width: 1.528vw;
    height: 2.5vw;
    margin-top: 0.2em;
  }

  .fn6 {
    font-size: 32.25vw;
    line-height: 0.3em;
    letter-spacing: -0.015em;
    padding-bottom: 13vw;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    @media (min-width: 800px) {
      font-size: 32.9vw;
    }
  }
`;

export const FooterInner = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 1024px) {
    min-height: calc(100vh - 36.27778rem);
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  gap: 1.5em;
  margin: 25px var(--golden-ratio) 15px var(--golden-ratio);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    margin: 55px 0 35px 0;
    padding: 10px 0;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacer);
  text-align: left;

  @media (min-width: 940px) {
    padding: var(--spacer)
  }

  @media (min-width: 1200px) {
    text-align: left;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1;
  }
`;

export const MenuFooter = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 2rem;

  li {
    padding: 0.5rem 0;
  }
`;


export const Form = styled.form`
  margin-top: var(--golden-ratio);
  position: relative;
`;

export const FormFields = styled.div`
  .control-g {
    display: grid;
    grid-row-gap: 0.5rem;
    row-gap: 0.5rem;

    @media (min-width: 768px) {
      display: flex;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .control {
    width: 100%;
    height: 50px;
    border-radius: initial;
    position: relative;
    border-bottom: 1px solid var(--border-color);
  }

  .control-label {
    padding-bottom: 3rem;
  }

  .footer-input {
    width: 100%;
    height: 50px;
    border: 0;
    background: none;
    padding: 0;
    outline: none;
    letter-spacing: var(--ls-medium);
    @media (min-width: 768px) {
      padding-right: 80px;
    }
  }
`;
