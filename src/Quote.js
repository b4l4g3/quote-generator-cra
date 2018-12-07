import React, { Component } from 'react';
class Quote extends Component {
     

  render() {
    const quoteQuote = this.props.quoteQuote;
    const quoteAuthor = this.props.quoteAuthor;
      return (
        <div>
          <p class="quoteText"><i class="fa fa-quote-left"></i><span class="js-quoteText">{quoteQuote}</span></p>
          <p class="quoteAuthor js-quoteAuthor">{quoteAuthor}</p>
        </div>
      );
    
  }
}

export default Quote;