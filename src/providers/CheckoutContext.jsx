'use client';

import React from 'react';
import PropTypes from 'prop-types';

export const CheckoutProvider = ({
  children,
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
