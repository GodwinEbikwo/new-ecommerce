import styled from 'styled-components';

export const FeaturedContainer = styled.aside`
  display: grid;
  grid-column-gap: var(--spacer);
  grid-row-gap: var(--spacer-double);
  opacity: 0;
  transition: opacity 300ms var(--easing), transform 0.75s var(--easing);
  transform: translate3d(0, 0, 0);
  will-change: transform;
  min-height: calc(100vh - 36.27778rem);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
  }

  .img{
    height: 540px;
  }

  &.is-inview {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
    transition-delay: 0.2s;
    overflow: hidden;
  }
`;

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.03em;
`;
