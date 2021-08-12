/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  XIcon,
} from '@heroicons/react/outline';
import NavSearch from '../../components/search/NavSearch';

import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';

function classNames( ...classes ) {
  return classes.filter( Boolean ).join( ' ' );
}

const NavMobile = ( {header, menu, slug} ) => {

    if ( isEmpty( menu ) ) {
        return null;
    }

    return (
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                <div>
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
                </div>
                <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                </div>
                <div className="mt-6">
                <nav className="grid gap-y-8">
                  { menu.length ?
                      menu?.map( i =>
                        0 === i?.node?.childItems?.edges?.length ?
                        (
                          <Link key={i?.node?.id} href={i?.node?.path} >
                              <a className="text-xl font-light text-gray-500 hover:text-gray-900">
                                  {i?.node?.label}
                              </a>
                          </Link>
                        ) : (
                          <Popover className="relative">
                              {( { open } ) => (
                              <>
                                <Popover.Button
                                className={classNames(
                                  open ? 'text-gray-900' : 'text-gray-500',
                                  'group bg-white rounded-md inline-flex items-center text-xl font-light hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
                                              <p className="text-xl font-light text-gray-900">{item?.node?.label}</p>
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
                </nav>
                </div>
            </div>
            <div className="py-6 px-5 space-y-6">
                { 'search' !== slug ? <NavSearch /> : null }
                {/* <div>
                  <a
                      href="#"
                      className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-light text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                      Sign up
                  </a>
                  <p className="mt-6 text-center text-xl font-light text-gray-500">
                      Existing customer?{' '}
                      <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                      </a>
                  </p>
                </div> */}
            </div>
        </div>
    );
};

NavMobile.propTypes = {
  header: PropTypes.object,
  menu: PropTypes.array,
  slug: PropTypes.string
};

NavMobile.defaultProps = {
  header: {},
  menu: [],
  slug: ''
};

export default NavMobile;