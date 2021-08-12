/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { useState } from 'react';
import Router from 'next/router';

import SearchForm from './SearchForm';

const NavSearch = () => {
  const [ searchQuery, setSearchQuery ] = useState( '' );
  const handleSearchFormSubmit = ( event ) => {
    event.preventDefault();
    Router.push( `/search?s=${searchQuery}` );
    return null;
  };

  return (
    <div className="mt-4 md:mt-0">
      <SearchForm
        searchQuery={ searchQuery }
        setSearchQuery={ setSearchQuery }
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
    </div>
  );
};

export default NavSearch;