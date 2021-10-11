/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import Nav from '../navs/Nav';
import NavMobile from '../navs/NavMobile';

import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';


const Header = ( {header, menu, slug} ) => {
  const [ color, setColor ] = useState( { 'text': 'white', 'background': 'transparent' } );
  if ( isEmpty( menu ) ) {
    return null;
  }

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if ( 400 < windowsScrollTop ) {
      setColor( {
        'text': 'gray-400',
        'background': 'white'
      } );
    } else {
      setColor( {
        'text': 'white',
        'background': 'transparent'
      } );
    }
  };

  useEffect( () => {
    window.addEventListener( 'scroll', headerColorChange );
    return function cleanup() {
      window.removeEventListener( 'scroll', headerColorChange );
    };
  }, [] );

  return (
    <Popover className={`z-50 fixed w-full transition duration-300 ease-in-out transform bg-${color?.background}`}>
      {( { open } ) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <span className="sr-only">{header?.siteTitle}</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src={header?.siteLogoUrl}
                      alt=""
                    />
                  </a>
                </Link>
                <span className="sr-only">{header?.siteTagLine}</span>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button
                data-cy="mmenu-btn"
                className={`bg-${color?.background} rounded-md p-2 inline-flex items-center justify-center text-${color?.text} hover:text-gray-500 hover:bg-gray-100 focus:outline-none`}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Nav header={header} menu={menu} slug={slug} color={ color } />
            </div>
          </div>

          <Transition
            show={ open }
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="z-3 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <NavMobile header={header} menu={menu} slug={slug} />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
   );
};


Header.propTypes = {
  header: PropTypes.object,
  menu: PropTypes.array,
  slug: PropTypes.string
};

Header.defaultProps = {
  header: {},
  menu: [],
  slug: ''
};

export default Header;