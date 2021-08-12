/* eslint-disable linebreak-style */
import { motion } from 'framer-motion';

const AnimationTitle = ( {children, ...props } ) => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={{
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
            delay: 1
            }
        },
        }} {...props}>
            {children}
        </motion.div>
    );
};

export default AnimationTitle;
