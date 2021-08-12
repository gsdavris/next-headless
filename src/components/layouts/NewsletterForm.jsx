/* eslint-disable linebreak-style */
import { useState } from 'react';
import { sanitize } from '../../utils/miscellaneous';
import Loading from '../loading/Loading';

const NewsletterForm = ( { status, message, onValidated } ) => {

  const [ error, setError ] = useState( null );
  const [ email, setEmail ] = useState( null );

  /**
   * Handle form submit.
   */
  const handleFormSubmit = () => {

    setError( null );

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated( { EMAIL: email } );

    // On success return true
    return email && -1 < email.indexOf( '@' ) && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   */
  const handleInputKeyEvent = ( event ) => {
    setError( null );
    // Number 13 is the "Enter" key on the keyboard
    if ( 13 === event.keyCode ) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   */
  const getMessage = ( message ) => {
    if ( ! message ) {
      return null;
    }
    const result = message?.split( '-' ) ?? null;
    if ( '0' !== result?.[0]?.trim() ) {
      return sanitize( message );
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  };

  return (
    <div>
        <h4 className="mb-4 text-gray-600 uppercase text-lg font-light">Subscribe to newsletter</h4>
        <div className="flex w-full justify-center">
          <div className="relative newsletter-input-fields">
              <div className="mc-field-group">
                  <input
                  onChange={( event ) => setEmail( event?.target?.value ?? '' )}
                  type="email"
                  placeholder="Your email"
                  className="h-14 w-auto pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                  onKeyUp={( event ) => handleInputKeyEvent( event )}
                  />
              </div>
              <div className="absolute top-2 right-2 button-wrap wp-block-button">
                  <button
                  className="h-10 w-20 text-white rounded-lg bg-indigo-500 focus:outline-none hover:bg-indigo-600"
                  onClick={handleFormSubmit}
                  >
                      Sign Up
                  </button>
              </div>
          </div>
        </div>
      <div className="min-h-42px">
        { 'sending' === status ? <Loading showSpinner message="Sending..."  hasVisibilityToggle={false} /> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && ! error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize( message ) }} />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
