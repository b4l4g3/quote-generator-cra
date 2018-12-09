import React, { Component } from 'react';
import './Reset.css';
import Quote from './Quote';
import Buttons from './Buttons';
import { rng, tweet, tumblr } from './helper.js';
import db from './db.json';
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`
const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 3.5px;

  @media (min-width: 700px) {
      flex-grow: 0;
      max-width: 700px;
  }

  @media (max-width: 350px) {
      justify-content: flex-start;
  }
`

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
    const quotes = this.state.quotes;
    const getQuote = this.getQuote;
    const color = {
      backgroundColor: this.state.randomColor
    }
    const fAws = {
      paddingRight: '0.5em',
      fontSize: '1.4em',
      color: `${this.state.randomColor}`
    }
    const tweetPost = function () {
      tweet(quotes)
    }
    const tumblrPost = () => tumblr(quotes);
      return (
        <Container bgColor={this.state.randomColor}>
          <Main>
            <div>
              <Quote quoteText={quotes.quote} quoteAuthor={quotes.author} iconStyle={fAws} />
              <Buttons buttonColor={color} buttonNewQuote={getQuote} tweetFunc={tweetPost} tumblrFunc={tumblrPost} />
            </div>
          </Main>
        </Container>
      );
  }
}

export default App;
