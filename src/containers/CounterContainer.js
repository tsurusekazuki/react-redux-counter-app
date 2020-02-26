import React from 'react';
import PropTypes from 'prop-types';
import Counter from './../components/Counter';
import { increment, decrement } from './../actions';

import { connect } from 'react-redux';

const mapStateToProps = state => ({ number: state.counter.number });

const mapDispatchToProps = { increment, decrement };

const CounterContainer = ({ number, increment, decrement }) => {
  return <Counter number={number} increment={increment} decrement={decrement} />;
};

CounterContainer.propTypes = {
  number: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
