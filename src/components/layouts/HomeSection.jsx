/* eslint-disable linebreak-style */
import Link from 'next/link';
import Slider from '../slider/Slider';
import AnimationOnView from '../animations/AnimationOnView';
import AnimationLink from '../animations/Animationlink';
import {
  motion,
} from 'framer-motion';
import { getIconComponentByName } from '../../utils/icons-map';
import { BookOpenIcon, EyeOffIcon, GiftIcon, UserGroupIcon, TrendingUpIcon, FingerPrintIcon, BadgeCheckIcon, PaperAirplaneIcon } from '@heroicons/react/solid';

const HomeSection = () => {
  return (
    <>
        <section className="pb-20 bg-indigo-100  -mt-24">
          <div className="lg:container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <motion.div
                whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  scale: 1.1,
                  transition: {
                    duration: .15
                  }
                }} className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-red-400">
                        <BookOpenIcon />
                    </div>
                    <h6 className="text-3xl font-light">Book A Table</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <motion.div
                whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  scale: 1.1,
                  transition: {
                    duration: .15
                  }
                }}
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-indigo-400">
                      <EyeOffIcon />
                    </div>
                    <h6 className="text-3xl font-light">Private Hire</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <motion.div
                whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  scale: 1.1,
                  transition: {
                    duration: .15
                  }
                }}
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-green-400">
                      <GiftIcon />
                    </div>
                    <h6 className="text-3xl font-light">Gift Cards</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-indigo-400 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <UserGroupIcon />
                </div>
                <h3 className="text-3xl mb-2 font-light leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <AnimationLink path="/about" className="inline font-semibold text-lg text-gray-700 my-8">
                  Check Notus NextJS!
                </AnimationLink>
              </div>
              <AnimationOnView
              idValue='element1'
              className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-8 md:mt-0">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-indigo-400">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-indigo-400  fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-3xl font-light text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </AnimationOnView>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="lg:container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <AnimationOnView
              idValue='element2'
              className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </AnimationOnView>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 my-6 shadow-lg rounded-full bg-indigo-300">
                    <TrendingUpIcon />
                  </div>
                  <h3 className="text-3xl font-light">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="w-12 h-12 items-center justify-center inline-block p-2 uppercase rounded-full text-white bg-indigo-300 mr-3">
                            <FingerPrintIcon />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="w-12 h-12 items-center justify-center inline-block p-2 uppercase rounded-full text-white bg-indigo-300 mr-3">
                            <BadgeCheckIcon />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="w-12 h-12 items-center justify-center inline-block p-2 uppercase rounded-full text-white bg-indigo-300 mr-3">
                            <PaperAirplaneIcon />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4 pb-4">
            <div className="w-full flex items-center justify-center">
              <Slider />
            </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="lg:container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-light">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/team-1-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-400 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'twitter' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-blue-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-pink-500 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'instagram' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/team-2-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-red-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'youtube' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-blue-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/team-3-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-red-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'youtube' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-400 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'twitter' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-indigo-700 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/team-4-470x470.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-pink-500 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'instagram' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-red-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'youtube' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-400 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'twitter' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-indigo-700 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};

export default HomeSection;
