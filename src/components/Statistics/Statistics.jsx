import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        total: PropTypes.number,
        positivePercentage: PropTypes.number,
      };
    
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