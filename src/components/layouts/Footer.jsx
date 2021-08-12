/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Link from 'next/link';
import { isEmpty, isArray } from 'lodash';
import {sanitize} from '../../utils/miscellaneous';
import { getIconComponentByName } from '../../utils/icons-map';
import NewsletterSubscribe from './NewsletterSubscribe';
import BackTop from './BackTop';
import ContactForm from './../contact/ContactForm';

const Footer = ( {footer, menu} ) => {

    return (
    <>
        <footer className="relative bg-indigo-50 pt-8 pb-6">
            <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: 'translateZ(0)' }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                    className="text-indigo-50 fill-current"
                    points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-center lg:text-left">
                    <div className="w-full lg:w-4/12 px-4">
                        <div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarOne ) }} />
                        <div className="mt-6 lg:mb-0 mb-6">
                            { ! isEmpty( footer?.socialLinks ) && isArray( footer?.socialLinks ) ? (
                                footer.socialLinks.map( item => (
                                    <a
                                    as="button"
                                    key={item?.iconName}
                                    href={item?.iconUrl}
                                    target="_blank"
                                    className="inline-flex bg-indigo-500 hover:bg-indigo-600 text-white text-center shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    >
                                        { getIconComponentByName( item?.iconName ) }
                                    </a>
                                ) )
                            ) : null}
                        </div>
                    </div>
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 pb-4 ml-auto">
                                <div dangerouslySetInnerHTML={{ __html: sanitize( footer?.sidebarTwo ) }} />
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-gray-600 text-lg font-light mb-2">
                                    Usefull Links
                                </span>
                                {  ! isEmpty( menu ) || isArray( menu ) ? (
                                    <ul className="list-unstyled">
                                        {menu.map( i=> (
                                            <li key={i?.node?.id}>
                                                <Link href={i?.node?.path}>
                                                    <a className="text-lg font-light text-gray-500 hover:text-gray-900 block pb-2 text-sm">
                                                    {i?.node?.label}
                                                    </a>
                                                </Link>
                                            </li>
                                        ) )}
                                    </ul>
                                ) : null }
                            </div>
                            <div className="w-full lg:w-4/12 px-4 pb-4 ml-auto">
                                <NewsletterSubscribe />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-gray-500 font-light py-1">
                        {footer?.copyrightText}
                    </div>
                </div>
            </div>
            </div>
            <BackTop />
        </footer>
    </>
);
};

export default Footer;