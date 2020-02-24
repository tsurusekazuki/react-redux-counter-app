import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ number, increment, decrement }) => {
  return (
    <>
      <div>{number}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default Counter;
