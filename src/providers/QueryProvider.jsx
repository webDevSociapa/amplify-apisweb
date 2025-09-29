'use client';

import PropTypes from 'prop-types';

export default function QueryProviders({ children }) {
  return <div>{children}</div>;
}

QueryProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
