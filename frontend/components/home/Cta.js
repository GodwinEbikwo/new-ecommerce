import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { CtaTitle, CtaInner, CtaContainer } from './styles/CtaStyles';
import { toBase64, shimmer } from '../../helpers/ImageLoading';
import useOnScreen from '../../lib/useOnScreen';
import { motion, useAnimation } from 'framer-motion';
import { revealInOutSlow } from '../../utils/transitionHelpers';

export default function Cta() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      controls.start('enter');
    }

    if (!reveal) {
      controls.start('hidden');
    }
  }, [controls, reveal]);

  return (
    <CtaContainer data-scroll-section ref={ref}>
      <CtaInner>
        <motion.div
          initial="initial"
          animate={controls}
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.055, delay: 0.3 } },
          }}>
          <p className="cta__p">
            <span className="block relative overflow-hidden">
              <motion.span
                variants={revealInOutSlow}
                className="block text-large">
                Never have to worry about the safety that OR QUALITY
              </motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span
                variants={revealInOutSlow}
                className="block text-large">
                of the products you choose to put in yout home.
              </motion.span>
            </span>
          </p>
        </motion.div>

        <div className="small-img-cont">
          <div className="b-speed-block" data-scroll>
            <div className="b-image_wrapper" data-scroll data-scroll-repeat>
              <div className="b-image" data-scroll>
                <Image
                  src="https://res.cloudinary.com/godwinebikwo/image/upload/v1623216276/pexels-monstera-5302903_rtfaq6.jpg"
                  width={640}
                  height={426}
                  alt="clay"
                  quality="85"
                  placeholder="blur"
                  className="b-speed-block_image img"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(640, 426)
                  )}`}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial="initial"
          animate={controls}
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.055, delay: 1.2 } },
          }}>
          <CtaTitle>
            <span className="block relative overflow-hidden">
              <motion.span
                variants={revealInOutSlow}
                className="block text-large">
                At fivensix, we focus on making
              </motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span
                variants={revealInOutSlow}
                className="block text-large">
                reusable and functional ceramics
              </motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span
                variants={revealInOutSlow}
                className="block text-large">
                you can use at home
              </motion.span>
            </span>
          </CtaTitle>
        </motion.div>
      </CtaInner>
    </CtaContainer>
  );
}
