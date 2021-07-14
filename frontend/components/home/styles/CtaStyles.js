import styled from 'styled-components';

export const CtaContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 5.5rem);
`;

export const CtaInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  .small-img-cont {
    margin: 2.22222rem auto;
    transform-origin: top center;
    overflow: hidden;
    position: relative;
  
    @media (max-width: 500px) {
      max-width: 90vw;
    }

    @media (max-width: 999px) {
      width: 66.66667%;
    }

    @media (min-width: 1000px) {
      width: 25.166667vw;
    }
  }

  .cta__p {
    max-width: 43.72222rem;
    display: inline-block;
    text-transform: uppercase;
    line-height: 1.3;
    text-align: center;
    font-size: 1.25rem;
  }
`;

export const CtaTitle = styled.h1`
  text-align: center;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: normal;
`;

