/* eslint-disable linebreak-style */
import { useState } from 'react';
import Loading from '../loading/Loading';
import { sendMail } from '../../utils/api';
import ErrorMessage from '../error/ErrorMessage';


const ContactForm = () => {
    const [ values, setValues ] = useState( {
        name: '',
        email: '',
        message: '',
        error: '',
        loading: false,
        responseData: {}
      } );

    const { name, email, message, loading, error, responseData } = values || {};


    const handleChange = ( name ) => ( event ) => {
    setValues( {
        ...values,
        error: false,
        responseData: {},
        [name]: event.target.value
    } );
    };

      const handleSubmit = async ( e ) => {
        e.persist();
        e.preventDefault();
        setValues( { ...values, error: false, loading: true } );
        try {
          const data = await sendMail( { email, name, message} );

          if ( data.sent ) {
            setValues( {
              ...values,
              name: '',
              email: '',
              message: '',
              responseData: {
                type: 'success',
                message: `${data.message}, thank you for your message!`
              }
            } );
            e.target.reset();
          } else {
            setValues( {
              ...values,
              error: data.message,
              loading: false,
              responseData: { type: 'danger', message: data.message }
            } );
          }
        } catch ( error ) {
          setValues( {
            ...values,
            error: error.message,
            loading: false,
            responseData: { type: 'danger', message: error.message }
          } );
        }
      };


    return (
        <section className="relative block py-24 bg-indigo-300">
            <div className="lg:container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-100">
                    <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-3xl text-gray-600 font-light">
                        Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                        Complete this form and we will get back to you in 24
                        hours.
                    </p>
                    <ErrorMessage text={responseData?.message} classes={ 'success' === responseData?.type ? 'text-green-400' : 'text-red-400'} />
                    <form
                        onSubmit={handleSubmit}
                        onBlur={() => setValues( { ...values, responseData: {} } )}
                    >
                        <div className="relative w-full mb-3 mt-8">
                            <label
                            className="block uppercase text-gray-600 text-xs font-light mb-2"
                            htmlFor="full-name"
                            >
                            Full Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            value={name || ''}
                            onChange={handleChange( 'name' )}
                            className="border-0 px-3 py-3 placeholder-indigo-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Full Name"
                            />
                        </div>
                        <div className="relative w-full mb-3">
                            <label
                            className="block uppercase text-gray-600 text-xs font-light mb-2"
                            htmlFor="email"
                            >
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            value={email || ''}
                            onChange={handleChange( 'email' )}
                            className="border-0 px-3 py-3 placeholder-indigo-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                            />
                        </div>
                        <div className="relative w-full mb-3">
                            <label
                            className="block uppercase text-gray-600 text-xs font-light mb-2"
                            htmlFor="message"
                            >
                            Message
                            </label>
                            <textarea
                            rows="4"
                            cols="80"
                            id="message"
                            value={message || ''}
                            onChange={handleChange( 'message' )}
                            className="border-0 px-3 py-3 placeholder-indigo-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Type a message..."
                            />
                        </div>
                        <div className="text-center mt-6">
                            <button
                            className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-600 text-sm font-light uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            disabled={! name || ! email || ! message ? true : false}
                            type="submit"
                            >
                            Send Message
                            </button>
                            {
                            loading &&
                                <Loading showSpinner visible={loading} classes="mt-2"/>
                            }
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ContactForm;
