import styled from 'styled-components';

export const PaginationStyles = styled.section`
  @media screen and (max-width: 1023.999px) {
    text-align: center;
    display: inline-grid;
    grid-template-columns: repeat(4, auto);
    align-items: stretch;
    justify-content: center;
    align-content: center;
    margin: 2rem 0;
    border: 1px solid var(--border-color);
    border-radius: 1px;
    letter-spacing: var(--ls);

    & > * {
      margin: 0;
      padding: 10px 12px;
      border-right: 1px solid var(--border-color);
      &:last-child {
        border-right: 0;
      }
    }
    a[aria-disabled='true'] {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  @media (min-width: 1024px) {
    padding-bottom: 2.22222rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    .pagination-control {
      position: relative;
      display: inline-block;
      font-weight: 600;
      margin: 0;
      line-height: 0.9;
      font-size: 9.2vw;
      text-transform: capitalize;
      letter-spacing: var(--ls-medium);
      font-family: var(--secondary-font);
    }

    .pagination-number {
      @media (min-width: 999px) {
        margin-top: 3vw;
      }
    }

    span {
      display: inline-block;
      text-decoration: underline;
    }

    a[aria-disabled='true'] {
      pointer-events: none;
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
`;

