import PropTypes from 'prop-types'; // Import prop-types correctly
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode='wait'>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100}}
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0, y:-100 }}
          transition={{duration:1}}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-3xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Service</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Define propTypes correctly
ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;
