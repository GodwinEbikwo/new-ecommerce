import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroContainer } from './styles/HeroStyles';
import { revealInOutSlow } from '../../utils/transitionHelpers';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function Hero() {
  const { scroll } = useLocomotiveScroll();

  const goToContent = event => {
    event.preventDefault()
    scroll && scroll.scrollTo('#featured-area', 100, null, 250)
  }

  return (
    <HeroContainer data-scroll-section>
      <motion.aside
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.055 } },
        }}
        className="hero">
        <div className="flex justify-center items-center h-full w-full">
          <div className="absolute inset-0">
            <div className="b-speed-block" data-scroll>
              <div className="b-image_wrapper" data-scroll data-scroll-repeat>
                <div className="b-image" data-scroll>
                  <Image
                    src="https:res.cloudinary.com/godwinebikwo/image/upload/e_grayscale/v1618872388/header_o0krbf.png"
                    width={1920}
                    height={1180}
                    alt="clay"
                    quality="85"
                    className="b-speed-block_image img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-ab">
          <span className="block relative overflow-hidden">
            <motion.span
              variants={revealInOutSlow}
              className="block text-large">
              New summer
            </motion.span>
          </span>
          <span className="block relative overflow-hidden">
            <motion.span
              variants={revealInOutSlow}
              className="block text-large"
              id="span-left">
              Collection
            </motion.span>
          </span>
          <span className="block relative overflow-hidden">
            <motion.span
              variants={revealInOutSlow}
              className="block text-large">
              2021
            </motion.span>
          </span>
        </div>

        <div className="p-ab-right">
          <Link href="/products" passHref>
            <div className="round-button">
              <button className="round-button" onClick={goToContent}>
                <span className="button-arrow">
                  <svg
                    viewBox="0 0 20 23"
                    fill="none"
                    className="arrow-svg"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.9774 0C11.9774 6.99683 16.6409 12.6586 22.404 12.6586"
                      stroke="var(--button-white)"
                      strokeMiterlimit="10"></path>
                    <path
                      d="M22.4044 12.6582C16.6412 12.6582 11.9778 18.32 11.9778 25.3168"
                      stroke="var(--button-white)"
                      strokeMiterlimit="10"></path>
                    <path
                      d="M19.4041 12.6582H0"
                      stroke="var(--button-white)"
                      strokeMiterlimit="10"></path>
                  </svg>
                </span>
              </button>
            </div>
          </Link>
        </div>
      </motion.aside>
    </HeroContainer>
  );
}
