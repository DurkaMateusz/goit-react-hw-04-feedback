import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SectionTitle extends Component {
    static propTypes = {
        title: PropTypes.string,
      };
      
    render() {
        return <h2>{this.props.title}</h2>;
  }
}