import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 10 }) => {
  console.log(positivePercentage);
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>PositivePercentage: { Math.round(positivePercentage) || 0}%</p>
    </>
  );
};

export default Statistics;
