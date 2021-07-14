import styled from 'styled-components';

const OrderStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  border: 1px solid var(--border-color);
  padding: 2rem var(--golden-ratio);
  border-top: 10px solid var(--border-color);
  @media screen and (min-width: 768px) {
    margin: 4rem auto;
  }

  .head-top {
    margin-bottom: 2rem;
    text-align: center;

    h1 {
      font-size: 5vw;
    }

    p {
      letter-spacing: var(--ls-medium);
    }
  }

  & > p {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr;
    margin: 0;
    border-bottom: 1px solid var(--border-color);
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 5fr;
      grid-template-rows: none;
    }

    span {
      padding: var(--spacer) 0;

      &:first-child {
        font-weight: 500;
        text-align: start;
        letter-spacing: var(--ls-medium);
      }
    }
  }
  .order-items {
    @media screen and (min-width: 768px) {
      margin: 2rem auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      > * {
        flex: 1 1 40ch;
      }
    }
  }

  .order-item {
    border-bottom: 1px solid var(--border-color);
    align-items: center;
    margin: 2rem 0;
    padding-bottom: var(--spacer);
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 150px 1fr;
      grid-gap: 2rem;
      margin: var(--spacer) 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media screen and (max-width: 767px) {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    }
    .item-details {
      margin-top: var(--spacer);

      h2 {
        margin-bottom: var(--spacer);
      }

      p {
        margin-bottom: var(--spacer);
        border-top: 1px solid var(--border-color);
        padding: var(--spacer) 0;
        text-align: start;
        @media screen and (min-width: 768px) {
          max-width: 50vw;
          border: 0;
        }
      }
    }
  }
`;
export default OrderStyles;
