/* eslint-disable linebreak-style */
import Link from 'next/link';
import { motion } from 'framer-motion';

const AnimationLink = ( {children, path, ...props } ) => {
    return (
        <motion.span
        whileHover={{
            borderBottom: '10px solid rgba(59, 130, 246, 0.5)',
            paddingLeft: '30px',
            transition: {
              duration: .15
            }
        }}
        >
            <Link
            href={path}
            >
                <a {...props}>
                    {children}
                </a>
            </Link>
        </motion.span>
    );
};

export default AnimationLink;
