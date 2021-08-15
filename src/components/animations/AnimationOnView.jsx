/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';
import {
    motion,
    useAnimation
  } from 'framer-motion';

const AnimationOnView = ( {idValue, children, ...props } ) => {
    const [ start, set ] = useState( false );
    const controls = useAnimation();

    // When the user reach the element, start the animation
    useEffect( () => {
        if ( start ) {
            controls.start( 'visible' );
        }
        const onScroll = () => {
        const element = document.getElementById( idValue );
        const time =
        element && window.innerHeight  >= element.getBoundingClientRect().top;
        if ( time ) {
          set( true );
        } else {
          set( false );
        }
      };
      if ( start ) {
        controls.start( 'visible' );
      }
      if ( 'undefined' !== typeof window ) {
        window.addEventListener( 'scroll', onScroll );
      }
      return () => window.removeEventListener( 'scroll', onScroll );
    }, [ controls, start ] );


    return (
        <motion.div
        id={idValue}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
        }}
        {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimationOnView;
