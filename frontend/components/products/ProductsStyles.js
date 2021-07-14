import styled from 'styled-components';

export const GridContainer = styled.section`
  --cs: 13.7;
  --dw: 1920;
  --ps: 55;
  --ph: 55;
  --bi: 70;
  --sc: calc((var(--dw) / 100) * var(--cs));

  display: flex;
  padding: var(--spacer) 0;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: calc(100vh - 88px);
`;

export const GridItemOne = styled.aside`
  display: flex !important;
  justify-content: flex-end;
  width: 100%;
  -webkit-box-pack: end;
`;

export const GridItemTwo = styled.aside`
  width: 30%;
`;

export const GridItemThree = styled.aside`
  &.grid {
    --min: 30ch;
    --gap: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);

    > * {
      flex: 1 1 var(--min);
    }
    @media screen and (min-width: 499px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      gap: 1.5rem;
    }

    @media screen and (min-width: 800px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      gap: 2.5rem;
    }
  }

  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: calc((25 / var(--sc)) * 1rem);
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
  }
`;

export const SearchContainer = styled.div`
  @media screen and (min-width: 991px) {
    z-index: 2;
    width: 100%;
  }
`;
