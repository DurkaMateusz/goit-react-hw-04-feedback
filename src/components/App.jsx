import React, { Component } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad:0,
      total: 0,
      positiveFeedback: 0,
    }
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;    
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    return (
      <div>
        <section>
        <h2>please leave feedback</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </section>
      </div>
    );
  }
}
