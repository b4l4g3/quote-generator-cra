import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 45px auto 5px auto;
  user-select: none;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
const Button = styled.button`
  border: none;
  border-radius: 5px;
  font: inherit;
  font-weight: 500;
  user-select: none;

  &:focus {
    outline: 0;
  };
  &:active {
    box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
  }
`
const SocialButton = styled(Button)`
  margin: 15px 5px;
  padding: 7.5px 8px;
`
const QuoteButton = styled(Button)`
  padding: 13px 13px;
  width: 50%;
  margin-bottom: 10px;

  @media (min-width: 700px) {
    width: 150px;
  }
`

class Quote extends Component {
  render() {
    const buttonColor = this.props.buttonColor;
    const buttonNewQuote = this.props.buttonNewQuote;
    const tweetFunc = this.props.tweetFunc;
    const tumblrFunc = this.props.tumblrFunc;
      return (      
        <ButtonContainer>
        <div>
          <SocialButton style={buttonColor} onClick={tweetFunc}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
          </SocialButton>
          <SocialButton style={buttonColor} onClick={tumblrFunc}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path d="M19.512 17.489l-.096-.068h-3.274c-.153 0-.16-.467-.163-.622v-5.714c0-.056.045-.101.101-.101h3.82c.056 0 .101-.045.101-.101v-5.766c0-.055-.045-.1-.101-.1h-3.803c-.055 0-.1-.045-.1-.101v-4.816c0-.055-.045-.1-.101-.1h-7.15c-.489 0-1.053.362-1.135 1.034-.341 2.778-1.882 4.125-4.276 4.925l-.267.089-.068.096v4.74c0 .056.045.101.1.101h2.9v6.156c0 4.66 3.04 6.859 9.008 6.859 2.401 0 5.048-.855 5.835-1.891l.157-.208-1.488-4.412zm.339 4.258c-.75.721-2.554 1.256-4.028 1.281l-.165.001c-4.849 0-5.682-3.701-5.682-5.889v-7.039c0-.056-.045-.101-.1-.101h-2.782c-.056 0-.101-.045-.101-.101l-.024-3.06.064-.092c2.506-.976 3.905-2.595 4.273-5.593.021-.167.158-.171.159-.171h3.447c.055 0 .101.045.101.101v4.816c0 .056.045.101.1.101h3.803c.056 0 .101.045.101.1v3.801c0 .056-.045.101-.101.101h-3.819c-.056 0-.097.045-.097.101v6.705c.023 1.438.715 2.167 2.065 2.167.544 0 1.116-.126 1.685-.344.053-.021.111.007.13.061l.995 2.95-.024.104z"
                fillRule="evenodd" clipRule="evenodd" /></svg>
          </SocialButton>
        </div>
        <QuoteButton style={buttonColor} onClick={buttonNewQuote}>New Quote</QuoteButton>
      </ButtonContainer>
      );
    
  }
}

export default Quote;