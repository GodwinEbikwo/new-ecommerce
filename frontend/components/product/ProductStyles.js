import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding-bottom: 0.25rem;


  .img-container {
    display: inline-block;
    overflow: hidden;

    &:hover .img-txt {
      opacity: 1;
    }

    &:hover .img-icon {
      opacity: 1;
      transform: scale(1.6);

      &:hover {
        transform: scale(2.4);
      }
    }
  }

  .img-container img {
    display: block;
    opacity: 1;
    transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
  }

  .img-container:hover img {
    transform: scale(1.2);
    transform-origin: 50% 50%;
    opacity: 0.4;
  }

  .img-c-center {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    justify-content: center;
    display: grid;
    align-items: center;
    transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);

    .img-icon {
      grid-row: 1;
      grid-column: 1;
      border-radius: 50%;
      margin: 0 auto;
      background-color: var(--button-black);
      width: 4rem;
      height: 4rem;
      transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
      opacity: 0;
      z-index: 0;
    }

    .img-txt {
      grid-row: 1;
      grid-column: 1;
      color: var(--button-white);
      opacity: 0;
      transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
      z-index: 1;
      text-align: center;
      vertical-align: baseline;
      letter-spacing: var(--ls-medium);
      font-size: 1.3rem;
    }
  }

  &:hover .atc {
    opacity: 1;
    transform: translate3d(0, -15px, 0);
  }

  .atc {
    @media (max-width: 768px) {
      bottom: 7.2rem;
      visibility: hidden;
    }
    @media (min-width: 1024px) {
      opacity: 0;
    }

    position: absolute;
    bottom: 5rem;
    right: 0.15rem;
    transform: translate3d(0, 0, 0);
    transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover !important;
    display: block;
  }

  button {
    border: 1px solid var(--border-color);
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: auto;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0 0.85rem 0 0.85rem;
    background: transparent;
    letter-spacing: var(--ls-medium);
    transition: all 0.15s linear;
    line-height: 16px;
    cursor: pointer;
    text-align: center;
    border-radius: 3px;

    &:hover {
      background: var(--button-black);
      color: white;
    }
  }
`;


export const ProductLink = styled.a`
  position: relative;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;


export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
`;

export const ProductSize = styled.span`
  letter-spacing: var(-ls-small);
  text-transform: uppercase;
  font-weight: 500;
`;

export const ProductTitle = styled.span`
  text-align: start;
  display: inline-block;
  letter-spacing: var(-ls-medium);
  text-transform: uppercase;
  font-weight: 500;
`;

export const ProductPrice = styled.span`
  letter-spacing: var(-ls-small);
  font-weight: 500;
`;

