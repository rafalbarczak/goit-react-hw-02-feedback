import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonHandler = type => {
    this.setState(prevState => ({
    [type]: prevState[type] + 1
    }));
  };
  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad);
  }
  countPositiveFeedbackPercentage = () => {
    return (Math.round(this.state.good / this.countTotalFeedback() * 100));
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <p>Please leave feedback</p>
        <button onClick={() => this.buttonHandler('good')}>Good</button>
        <button onClick={() => this.buttonHandler('neutral')}>Neutral</button>
        <button onClick={() => this.buttonHandler('bad')}>Bad</button>
        <p>Statistics</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {total > 0 ? positiveFeedback : 0}%</p>
      </>
    );
  }
}
