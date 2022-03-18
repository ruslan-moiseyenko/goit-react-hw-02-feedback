import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </>
  );
};
 
export default FeedbackOptions;