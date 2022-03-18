import React from 'react';
import PropTypes from 'prop-types';

import {Button} from './Feedback.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <Button type="button" onClick={onGood}>
        Good
      </Button>
      <Button type="button" onClick={onNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onBad}>
        Bad
      </Button>
    </>
  );
};
 
export default FeedbackOptions;