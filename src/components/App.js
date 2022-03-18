import React from 'react';
// import Feedback from './feedback/Feedback';
import Section from './feedback/Section'
import FeedbackOptions from './feedback/FeedbackOptions'
import Statistics from './feedback/Statistics'



class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  
  countTotalFeedback = () => {
    return (this.state.good + this.state.bad + this.state.neutral);
  } 
  
  
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100);
  }

  render() {
    const {good, neutral, bad} = this.state;
    return (
      <>
        <Section title='Please leave your feedback'>
          <FeedbackOptions onGood={this.handleGood} onNeutral={this.handleNeutral} onBad={this.handleBad}/>
        </Section>

        <Section title='Statistics'>
          <Statistics  good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </>
    );
  }
}

export default App;