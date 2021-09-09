/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';
import {
  PhoneIcon,
  PlayIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import NavSearch from '../../components/search/NavSearch';


import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';


const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];


function classNames( ...classes ) {
  return classes.filter( Boolean ).join( ' ' );
}

const Nav = ( {menu, slug} ) => {
  const router = useRouter();

  if ( isEmpty( menu ) ) {
    return null;
  }

    return (
        <>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                { menu.length ?
                    menu?.map( i =>
                      0 === i?.node?.childItems?.edges?.length ?
                      (
                        <Link key={i?.node?.id} href={i?.node?.path} >
                            <a className={`text-xl font-${i?.node?.path === router.asPath ? 'base' : 'light'} text-gray-500 hover:text-gray-900`}>
                                {i?.node?.label}
                            </a>
                        </Link>
                      ) : (
                        <Popover key={i?.node?.id} className="relative">
                            {( { open } ) => (
                            <>
                              <Popover.Button
                              className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-white rounded-md inline-flex items-center text-xl font-light hover:text-gray-900 focus:outline-none'
                                )}
                              >
                                <span>{i?.node?.label}</span>
                                <ChevronDownIcon
                                  className={classNames(
                                  open ? 'text-gray-600' : 'text-gray-400',
                                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                                  )}
                                  aria-hidden="true"
                                />
                              </Popover.Button>
                              <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                              <Popover.Panel
                                static
                                className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                              >
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                      {i?.node?.childItems?.edges?.map( ( item ) => (
                                      <Link
                                      key={item?.node?.id}
                                      href={item?.node?.path}
                                      >
                                        <a data-cy="nav-item" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                        >
                                          <div className="ml-4">
                                            <p className={`text-xl font-${i?.node?.path === router.asPath ? 'base' : 'light'} text-gray-900`}>{item?.node?.label}</p>
                                          </div>
                                        </a>
                                      </Link>
                                      ) )}
                                  </div>
                                </div>
                              </Popover.Panel>
                              </Transition>
                            </>
                            )}
                        </Popover>
                      )
                ) : null }
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              { 'search' !== slug ? <NavSearch /> : null }
                {/* <a href="#" className="whitespace-nowrap text-xl font-light text-gray-500 hover:text-gray-900">
                  Sign in
                </a> */}
                {/* <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-light text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a> */}
            </div>
        </>
    );
};

Nav.propTypes = {
  header: PropTypes.object,
  menu: PropTypes.array,
  slug: PropTypes.string
};

Nav.defaultProps = {
  header: {},
  menu: [],
  slug: ''
};

export default Nav;