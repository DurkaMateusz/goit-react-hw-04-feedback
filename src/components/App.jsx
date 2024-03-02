import React, { Component } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from "./Section/Section";
import Notification from "./Notification/Notification";

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
        <SectionTitle title="Please leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
          {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : (
            <Notification message={'There is no feedback'} />
          )}
      </div>
    );
  }
}
