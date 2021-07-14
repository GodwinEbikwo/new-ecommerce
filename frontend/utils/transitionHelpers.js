export const revealInOut = {
  initial: { y: '110%', opacity: 0 },
  enter: {
    y: '0%',
    opacity: 1,
    transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] },
  },
  exit: {
    y: '110%',
    transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
  },
};

export const revealInOutSlow = {
  initial: { y: '130%' },
  enter: {
    y: '0%',
    transition: {
      duration: 1,
      ease: [0.165, 0.84, 0.44, 1],
      delay: 0.45,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.165, 0.84, 0.44, 1] },
  },
};

export const revealInOutIn = {
  initial: { y: '130%' },
  enter: {
    y: '0%',
    transition: {
      repeat: 1,
      repeatType: 'reverse',
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

export const fadeSmallDelay = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 0.55 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1], delay: 1 },
  },
};
