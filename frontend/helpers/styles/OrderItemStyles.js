import styled from 'styled-components';

export const OrderItemStyles = styled.li`
  list-style: none;
  padding: var(--spacer);
  border: 1px solid var(--border-color);

  h2 {
    margin-bottom: var(--spacer);
    padding-bottom: var(--spacer);
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    background: var(--fg);
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      padding: 0.8rem 0;
      border: 1px solid var(--border-color);
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
    p {
      letter-spacing: var(--ls-medium);
    }
  }
`;

export default OrderItemStyles;
