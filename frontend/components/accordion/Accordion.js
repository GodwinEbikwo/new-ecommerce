/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { CloseIcon } from '../../helpers/Icons';

const ContentPlaceholder = ({ content }) => (
  <motion.div
    variants={{
      collapsed: { opacity: 0 },
      open: { opacity: 1 },
    }}
    transition={{ duration: 0.4 }}
    className="content-placeholder">
    <div>{content}</div>
  </motion.div>
);

const AccordionComponent = ({ i, expanded, setExpanded, title, content }) => {
  const isOpen = i === expanded;

  return (
    <AnimatedBody>  
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}>
        <div className="flex sb">
          <h4>{title}</h4>
          <motion.div
            initial={false}
            animate={{
              transform: isOpen ? 'rotate(90deg)' : 'rotate(45deg)',
              willChange: 'transform',
            }}>
            <CloseIcon />
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}>
            <ContentPlaceholder content={content} />
          </motion.section>
        )}
      </AnimatePresence>
    </AnimatedBody>
  );
};

const Accordion = ({ id, title, content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AccordionComponent
      i={id}
      expanded={expanded}
      setExpanded={setExpanded}
      title={title}
      content={content}
    />
  );
};

export default Accordion;

const AnimatedBody = styled.div`
  header {
    background: transparent;
    border: 1px solid var(--border-color);
    border-top: 0;
    border-left: 0;
    border-right: 0;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 0.5em 0;
    width: 100%;
  }

  header h4 {
    line-height: 1;
    text-align: left;
    letter-spacing: var(--ls-medium);
    letter-spacing: 400;
  }

  section {
    overflow: hidden;
  }

  .content-placeholder {
    padding: 1rem 0 2rem 0;
  }
`;
