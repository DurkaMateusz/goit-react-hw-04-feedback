import React, { Component } from 'react';

export default class Statistics extends Component {
    
render() {
    return (
        <div>
            <h3>Statistics</h3>
            <p>Good: {this.props.good}</p>
            <p>Neutral: {this.props.neutral}</p>
            <p>Bad: {this.props.bad}</p>
            <p>Total Opinions: {this.props.total}</p>
            <p>Positive Feedback Percentage: {this.props.positivePercentage}%</p>
        </div>
    );
};
}