import React from 'react';
export default Feedback;

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,

    }

    handleGood = () => {
        this.setState({ good: this.state.good +1, });
    }

    handleNeutral = () => {
        this.setState({ neutral: this.state.neutral +1, });
    }

    handleBad = () => {
        this.setState({ bad: this.state.bad +1, });
    }

   



  render() {
    return (
      <div>
        <h1>Please leave your feedback</h1>
        <button type="button" onClick={this.handleGood}>Good</button>
        <button type="button" onClick={this.handleNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBad}>Bad</button>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}


