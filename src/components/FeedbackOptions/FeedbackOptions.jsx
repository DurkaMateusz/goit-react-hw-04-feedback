import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.array,
        onLeaveFeedback: PropTypes.func,
      };
      
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