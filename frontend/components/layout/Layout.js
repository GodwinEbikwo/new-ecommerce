/* eslint-disable no-multi-assign */
import Head from 'next/head';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      {children}Í
    </LayoutContainer>
  );
}

const LayoutContainer = styled.section`
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 6vw;
  margin-left: auto;
  margin-right: auto;
  max-width: 2460px;
  @media (max-width: 800px) {
    padding-top: 20vw;
  }
`;
