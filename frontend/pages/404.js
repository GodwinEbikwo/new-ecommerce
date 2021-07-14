import { useRef } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { revealInOut, fade } from '../utils/transitionHelpers';
import Image from 'next/image';
import { toBase64, shimmer } from '../helpers/ImageLoading';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Layout from '../components/layout/Layout';
import Footer from '../components/footer/Footer';

export default function Error() {
  const containerRef = useRef(null);
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
          <motion.section
            initial="initial"
            animate="enter"
            exit="exit"
            data-scroll-section>
            <Head>
              <title>Page not found </title>
            </Head>
            <Container>
              <TopHeadline>
                <motion.div
                  className="top_inner"
                  variants={{
                    enter: { transition: { staggerChildren: 0.095 } },
                  }}>
                  <h1>
                    <span className="block relative overflow-hidden">
                      <motion.span variants={revealInOut} className="block">
                        Sorry that page does not exist,
                      </motion.span>
                    </span>

                    <span className="block relative overflow-hidden">
                      <motion.span variants={revealInOut} className="block">
                        please navigate to{' '}
                        <Link href="/" passHref>
                          <a className="link link--metis">
                            <span id="text-tt">our home page.</span>
                          </a>
                        </Link>
                      </motion.span>
                    </span>
                  </h1>
                </motion.div>
              </TopHeadline>

              <motion.div className="p-center" variants={fade}>
                <div className="flex sb">
                  <div className="b-speed-block m-auto" data-scroll>
                    <div
                      className="b-image_wrapper"
                      data-scroll
                      data-scroll-repeat>
                      <div className="b-image" data-scroll>
                        <Image
                          src="https://res.cloudinary.com/godwinebikwo/image/upload/v1621008026/tom-crew-XtyxEBiA8D8-unsplash_mjpah4.jpg"
                          width={175}
                          height={300}
                          alt="clay"
                          quality="85"
                          placeholder="blur"
                          className="b-speed-block_image img"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(175, 300)
                          )}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="b-speed-block m-auto" data-scroll>
                    <div
                      className="b-image_wrapper"
                      data-scroll
                      data-scroll-repeat>
                      <div className="b-image" data-scroll>
                        <Image
                          src="https://res.cloudinary.com/godwinebikwo/image/upload/v1621008026/tom-crew-XtyxEBiA8D8-unsplash_mjpah4.jpg"
                          width={175}
                          height={300}
                          alt="clay"
                          quality="85"
                          placeholder="blur"
                          className="b-speed-block_image img"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(175, 300)
                          )}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <BottomHeadline>
                <motion.div
                  variants={{
                    enter: { transition: { staggerChildren: 0.095 } },
                  }}>
                  <h2 className="error-txt">
                    <span className="block relative overflow-hidden">
                      <motion.span variants={fade} className="block">
                        4<span className="italics">0</span>4
                      </motion.span>
                    </span>
                  </h2>
                </motion.div>
              </BottomHeadline>
            </Container>
          </motion.section>
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0 var(--golden-ratio);
  height: 100vh;
`;

const TopHeadline = styled.aside`
  position: absolute;
  top: 1.75rem;
  left: 1.5rem;
  max-width: 90vw;

  @media (min-width: 600px) {
    max-width: 30vw;
  }

  .top_inner {
    h1 {
      line-height: 1.1;
      text-transform: uppercase;
      @media (min-width: 600px) {
        line-height: 1;
        font-size: 2vw;
      }
      span {
        text-transform: uppercase;
      }
      #text-tt {
        color: var(--green);
        transition: all 300ms var(--easing);

        &:hover {
          -webkit-text-stroke: 1px var(--text-color);
          color: transparent;
        }
      }
    }
  }
`;
const BottomHeadline = styled.aside`
  position: absolute;
  bottom: 5.65rem;
  right: 3.5rem;

  @media (min-width: 768px) {
    bottom: 3.5rem;
  }

  @media (max-width: 600px) {
    right: 1rem;
  }

  .italics {
    color: var(--green);
    font-size: 19.5559vw;
  }

  .error-txt {
    font-style: normal;
    font-size: 20.5559vw;
    line-height: 0.75em;
    letter-spacing: -0.011em;
    user-select: none;
    pointer-events: none;
    padding-bottom: 4.5vw;
    @media (max-width: 600px) {
      padding-bottom: 10vw;
    }
  }
`;
