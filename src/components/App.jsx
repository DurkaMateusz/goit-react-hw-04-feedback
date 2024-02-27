import React, { Component } from "react";

export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad:0,
    }
  }

  render() {
    
    return (
      <div className="feedback">
        <section>
        <h2>please leave feedback</h2>
        <div>
          <button onClick={() => this.setState(good => ({good: this.state.good +1}))}>
              good
            </button>
            <button onClick={() => this.setState(neutral => ({neutral: this.state.neutral +1}))}>
              neutral
            </button>
            <button onClick={() => this.setState(bad => ({bad: this.state.bad +1}))}>
              bad
            </button>
        </div>
            <h2>statistic</h2>
            <div>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
            </div>
        </section>
      </div>
    );
  }
}
