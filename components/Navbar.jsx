/* eslint-disable semi */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { AnimatePresence, motion, useCycle } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  // const [isActive, setActive] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);
  // const toggleClass = () => {
  //   console.log('I am clicked!')
  //   setActive(!isActive);
  // };

  return (

    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="sm:px-16 sm:py-[4rem] px-6 py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01 z-0 pointer-events-none" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">METAVERSE</h2>
        <div className="md:hidden flex items-center">
          <button type="button" className="mobile-menu-button" onClick={cycleOpen}>
            <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: '100vw',
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.7 },
          }}
          className="absolute rounded bg-gray-700  top-50 left-0 z-40"
        >
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            className="flex flex-col justify-center justify-items-center items-center"

          >
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#home" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">Home</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#about" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">About</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#explore" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">Explore</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#started" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">Get Started</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#whatsnew" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">What is New</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#worldmap" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">World</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#insights" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">Insights</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} onClick={cycleOpen} variants={itemVariants} href="#feedback" className="block rounded py-2 px-4 relative font-extrabold text-[20px] text-white hover:bg-gray-500 hover:bg-opacity-50 z-40">Feedback</motion.a>
          </motion.div>
        </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>

  )
};

export default Navbar;
