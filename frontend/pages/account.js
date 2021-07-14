/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import PleaseSignIn from '../helpers/PleaseSignIn';
import { useUser } from '../components/auth/User';
import SignOut from '../components/auth/SignOut';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Layout from '../components/layout/Layout';
import Footer from '../components/footer/Footer';

export default function AccountPage() {
  const containerRef = useRef(null);
  const me = useUser();
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <Layout>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          class: 'is-inview',
          lerp: 0.07,
        }}
        watch={[]}
        containerRef={containerRef}>
        <div data-scroll-container id="scroll-container" ref={containerRef}>
          <PleaseSignIn>
            <section className="container-2" data-scroll-section>
              <Head>
                <title>Account page - {me?.name}</title>
              </Head>

              <>
                <div
                  className="flex fd-c"
                  style={{ marginBottom: 'var(--spacer-half)' }}>
                  <H1>Account Details</H1>
                </div>

                <AccountBox>
                  <div className="flex items-center">
                    <ImageBox>
                      <h1>{me?.name?.charAt(0).toUpperCase()}</h1>
                    </ImageBox>
                    <div
                      className="flex fd-c"
                      style={{
                        marginLeft: '1.2rem',
                      }}>
                      <h3 style={{ textDecoration: 'none', fontSize: '1.5vw' }}>{me?.name}</h3>
                      <button
                        type="button"
                        title="sign out"
                        onClick={() => setDisplayModal(!displayModal)}
                        className="logout">
                        Logout
                      </button>
                    </div>
                  </div>
                </AccountBox>

                <AccountBox>
                  <AccountItem>
                    <div>
                      <span>Email</span>
                      <h3>{me?.email}</h3>
                    </div>
                  </AccountItem>

                  <AccountItem>
                    <div>
                      <span>City</span>
                      <h3>{me?.city || 'add city'}</h3>
                    </div>
                    <Link
                      passHref
                      href={{
                        pathname: 'edit',
                        query: {
                          id: me?.id,
                        },
                      }}>
                      <button type="button" title="view your orders">
                        Edit
                      </button>
                    </Link>
                  </AccountItem>

                  <AccountItem>
                    <div>
                      <span>Postal Code</span>
                      <h3>{me?.postalCode || 'add post code'}</h3>
                    </div>
                    <Link
                      passHref
                      href={{
                        pathname: 'edit',
                        query: {
                          id: me?.id,
                        },
                      }}>
                      <button type="button" title="view your orders">
                        Edit
                      </button>
                    </Link>
                  </AccountItem>

                  <AccountItem>
                    <div>
                      <span>Phone number</span>
                      <h3>{me?.phone || 'add number'}</h3>
                    </div>
                    <Link
                      passHref
                      href={{
                        pathname: 'edit',
                        query: {
                          id: me?.id,
                        },
                      }}>
                      <button type="button" title="view your orders">
                        Edit
                      </button>
                    </Link>
                  </AccountItem>
                </AccountBox>

                <AccountBox>
                  <ButtonContainer>
                    <Link href="/reset" passHref>
                      <button
                        className="main-button"
                        type="button"
                        title="reset password">
                        Reset password
                      </button>
                    </Link>

                    <Link href="/orders" passHref>
                      <button
                        className="main-button"
                        type="button"
                        title="view your orders">
                        View orders
                      </button>
                    </Link>
                  </ButtonContainer>

                  <div className={`Modal ${displayModal ? 'Show' : ''}`}>
                    <button
                      type="button"
                      className="Close"
                      onClick={() => setDisplayModal(!displayModal)}>
                      <Image
                        src="/close.svg"
                        width={25}
                        height={25}
                        alt="close-button"
                      />
                    </button>
                    <div
                      className="p-center flex ai-jc fd-c text-center"
                      style={{
                        marginTop: '1.5rem',
                      }}>
                      <h3>Log out from your account</h3>
                      <p className="HelpText">Are you sure you wanna logout?</p>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gridTemplateRows: 'auto auto',
                          gap: '1em',
                        }}>
                        <SignOut />
                        <button
                          type="button"
                          className="logoutb"
                          onClick={() => setDisplayModal(!displayModal)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </AccountBox>
                <div
                  className={`Overlay ${displayModal ? 'Show' : ''}`}
                  onClick={() => setDisplayModal(!displayModal)}
                />
              </>
            </section>
          </PleaseSignIn>
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

const H1 = styled.h1`
  letter-spacing: normal;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin: 0.75em 0;
  }
`;

const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  margin: 0 auto;
  max-width: 37vw;
  background: var(--fg);
  border: 1px solid var(--border-color);
  margin-bottom: var(--spacer);

  .logout {
    padding: 0;
    margin: 0.5rem 0;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    text-decoration: underline;
    color: var(--green);
  }

  .sbutton {
    border: 0;
    outline: 0;
    padding: 0.65rem 0;
    background-color: transparent;
    margin-top: 0.25rem;
    font-weight: 400;
    font-family: inherit;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-width: 90vw;
    border-radius: 5px;
  }

  h3 {
    text-transform: none;
    font-weight: 400;
    text-decoration: underline;
  }
`;

const ImageBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--fg);
  border: 1px solid var(--border-color);
  display: grid;
  place-items: center;

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-size: 4vw;
  }
`;

const AccountItem = styled.div`
  margin-top: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    outline: 0;
    height: 35px;
    border: 0;
    padding: 0.5rem 1.5rem;
    background-color: transparent;
    border: 0;
    text-decoration: underline;
    cursor: pointer;
    font-family: inherit;
    color: var(--green);
  }

  span {
    display: inline-block;
    letter-spacing: var(--ls-medium);
    padding-bottom: calc(var(--spacer-half) - 5px);
  }

  h3 {
    word-break: break-all;
    padding-bottom: var(--spacer-half);
    font-family: var(--primary-font);
    letter-spacing: var(--ls-medium);
  }
`;
