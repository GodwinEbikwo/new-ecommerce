import styled from 'styled-components';

export const GridContainer = styled.section`
  position: relative;
  margin-bottom: 6vw;
  @media only screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    padding-top: 3vw;
  }
`;

export const GridLeft = styled.aside`
  padding-top: var(--spacer-half);
  padding-left: var(--spacer);
  padding-right: var(--spacer);
  padding-bottom: 0;
  position: relative;

  .imgbox {
    display: inline-block;
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    transform: translateZ(0);
    will-change: position, transform;
  }
`;

export const ImgContainer = styled.div`
  background-color: var(--secondary-black);
  @media (min-width: 1444px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    gap: 1em;
  }
`;

export const GridRight = styled.aside`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding-top: 3vw;
  }
`;

export const StockIndicator = styled.p`
  width: 10px;
  height: 10px;
  background: ${(p) => p.color};
  border-radius: 50%;
  margin-left: 5px;
  display: inline-block;
`;

export const GRSticky = styled.div`
  padding: 0 var(--spacer);

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  .details-info {
    width: 100%;
    margin-bottom: var(--spacer);
    .ingredient {
      display: inline-block;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }

  .product-tooltip {
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
    display: block;
    @media (min-width: 768px) {
      display: inline-block;
    }

    .product-tooltip-icon {
      position: absolute;
      display: block;
      top: 50%;
      right: -27px;
      height: 18px;
      width: 18px;
      border-radius: 18px;
      background: var(--btn-color);
      transform: translateY(-50%);
      text-align: center;
      line-height: 18px;
    }
  }

  .tooltip {
    display: inline-block;
    border-bottom: 1px dotted var(--border-color);
    cursor: pointer;
    color: inherit;
    outline: none;
    text-decoration: none;
    position: relative;

    &:hover span {
      border-radius: 5px 5px;
      box-shadow: var(--btn-bs);
      position: absolute;
      left: 1em;
      top: 2em;
      z-index: 9;
      min-width: 270px;
      opacity: 1;

      @media (min-width: 768px) {
        min-width: 350px;
      }
      margin-left: 0;
    }

    span {
      margin-left: -999em;
      position: absolute;
      opacity: 0;
    }

    .classic {
      background: var(--bg);
      border: 1px solid var(--border-color);
      padding: 1em;
      line-height: 1.85;

      h3 {
        margin-bottom: 1rem;
        line-height: unset;
        font-size: 25px;
      }
    }

    a:hover {
      background: transparent;
    }
  }

  .p-description {
    width: 100%;
    padding-top: var(--spacer);
    border-top: 1px solid #fff;
    @media (max-width: 800px) {
      padding-top: var(--spacer-double);
    }

    h3 {
      letter-spacing: normal;
      font-size: 2rem;
      text-transform: uppercase;
      display: block;
      color: var(--green);
      margin-bottom: var(--spacer-half);
    }

    .p-description-right {
      margin-bottom: var(--spacer);
    }
  }
`;

export const GRButtons = styled.div`
  z-index: 2;
  margin-top: var(--spacer);
  text-align: center;
`;

export const BtnStyles = styled.div`
  button {
    position: relative;
    display: block;
    padding: 1.85rem 3rem;
    margin-top: 1rem;
    font-family: inherit;
    font-weight: 600;
    color: var(--text-black);
    text-align: center;
    width: 100%;
    letter-spacing: var(--ls-large);
    outline: none;
    background: var(--green);
    text-transform: uppercase;
  }

  .btn-styles-inner {
    & > * + * {
      background: var(--green);
    }
  }
`;

export const ProductName = styled.h2`
  line-height: 0.9;
  font-size: 10.181vw;
  text-transform: uppercase;
  letter-spacing: var(--ls-small);
  max-width: 65.5vw;

  @media (min-width: 800px) {
    max-width: 30.5vw;
    font-size: 5.181vw;
  }
`;

export const ProductDescription = styled.p`
  line-height: 1.8;
`;

export const PriceStyles = styled.h2`
  letter-spacing: var(--ls-small);
  text-transform: uppercase;
  text-align: right;
  padding-left: var(--spacer);
  color: var(--green);
  font-size: 10.181vw;

  @media (min-width: 800px) {
    font-size: 5.181vw;
  }
`;

export const InStock = styled.div`
  margin-top: 1rem;
  strong {
    letter-spacing: var(--ls-large);
  }
  span {
    display: inline-block;
    margin-right: 6px;
  }
`;

export const ProductDetailsIngredients = styled.div`
  list-style: none;

  li {
    display: list-item;
    padding: var(--spacer-half) 0;
  }
`;

export const ProductDetails = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: var(--spacer-double);
  }
`;
