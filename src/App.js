import React, { Component } from 'react';
import './App.css';
import Quote from './Quote';
import Buttons from './Buttons';
import rng from './helper.js';
import db from './db.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomColor: `hsl(${rng(360)}, 70%, 70%)`
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    this.setState({
      quotes: db.quotes[rng(101)],
      randomColor: `hsl(${rng(360)}, 70%, 70%)`
    })
  }

  render() {
    const { error, quotes } = this.state;
    const getQuote = this.getQuote;
    const color = {
      backgroundColor: this.state.randomColor
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div class="container" style={color}>
          <main>
            <div>
              <Quote quoteText={quotes.quote} quoteAuthor={quotes.author} />
              <Buttons buttonColor={color} buttonNewQuote={getQuote} />
            </div>
          </main>
        </div>
      );
    }
  }
}

export default App;
