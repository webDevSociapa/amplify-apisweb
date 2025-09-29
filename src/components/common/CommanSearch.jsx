'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

// import { Button } from '../ui/button';

export default function CommandSearch({
  className,
  placeholder,
  searchTerm,
  setSearchTerm,
}) {
  useEffect(() => {
    if (searchTerm !== undefined) {
      const delayDebounceFn = setTimeout(() => {
        if (searchTerm) {
          console.log(searchTerm);
        }
      }, 800);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm('');
  };
  


  return (
    <div
      className={cn(
        'flex items-center rounded-full border border-activeGreen-50 bg-white px-3',
        className
      )}
    >
      <span className='icon-search mr-2 text-xl' />
      <input
        placeholder={placeholder}
        value={searchTerm}
        className={cn(
          'flex h-10 w-full border-none bg-transparent px-0 py-3 text-sm shadow-none outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50'
        )}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button variant='icon' className='px-1' onClick={handleClear}>
          <span className='icon-plus rotate-45 text-2xl'></span>
        </button>
      )}
    </div>
  );
}

CommandSearch.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};
