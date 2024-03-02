import React, { Component } from 'react';

export default class FeedbackOptions extends Component {

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
          <div>
            {options.map(option => {
              return (
                <button key={option} onClick={() => onLeaveFeedback(option)}>
                  {option}
                </button>
              );
            })}
          </div>
    );
    }
}