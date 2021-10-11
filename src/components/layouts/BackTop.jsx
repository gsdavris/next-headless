/* eslint-disable linebreak-style */
import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const BackTop = ( { props } ) => {
  const [ open, set ] = useState( false );

  // When the user clicks on the button, scroll to the top of the document smoothly
  const handleClick = () => {
    const view = document.getElementById( '__next' );
    view.scrollIntoView( { behavior: 'smooth' } );
  };

  // When the user reach close to the bottom, show the button
  useEffect( () => {
    const onScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if ( bottom ) {
        set( true );
      } else {
        set( false );
      }
    };
    if ( 'undefined' !== typeof window ) {
      window.addEventListener( 'scroll', onScroll );
    }
    return () => window.removeEventListener( 'scroll', onScroll );
  }, [] );

  return (
      <div className={`${ open ? '' : 'hidden' } fixed bottom-16 right-5 lg:right-16`}>
        <button
            onClick={handleClick}
            className='bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg rounded-full h-14 w-14 flex items-center justify-center focus:outline-none'
        >
            <ChevronUpIcon className='text-white' />
        </button>
      </div>
  );
};

export default BackTop;
