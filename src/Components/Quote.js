import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';


const QuoteContainer = styled.div`
  margin-bottom: 70px;
`
const QuoteText = styled.p`
  margin: 0;
  padding: 10px 30px;
  font-size: 2.5ch;
  line-height: 1.2em;
  text-align: center;
`
const QuoteAuthor = styled.p`
  font-size: 1.9ch;
  float: right;
  margin: 0;
  padding: 10px 30px;
  align-self: flex-end;
`

function Quote({ iconStyle, quoteText, quoteAuthor }) {
  return (
    <QuoteContainer>
      <QuoteText><i className={'fa fa-quote-left'} style={iconStyle}></i>{quoteText}</QuoteText>
      <QuoteAuthor>{quoteAuthor}</QuoteAuthor>
    </QuoteContainer>
  );
}

export default Quote;