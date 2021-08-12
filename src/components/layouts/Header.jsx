/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/outline';
import Nav from '../navs/Nav';
import NavMobile from '../navs/NavMobile';

import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';


const Header = ( {header, menu, slug} ) => {

  if ( isEmpty( menu ) ) {
    return null;
  }

  return (
    <Popover className="relative bg-white">
      {( { open } ) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
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
                <Popover.Button data-cy="mmenu-btn" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Nav header={header} menu={menu} slug={slug} />
            </div>
          </div>

          <Transition
            show={open}
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