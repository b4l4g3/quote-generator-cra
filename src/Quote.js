import React, { Component } from 'react';
import './Quote.css'

class Quote extends Component {
     

  render() {
    const quoteText = this.props.quoteText;
    const quoteAuthor = this.props.quoteAuthor;
      return (
        <div>
          <p class="quoteText"><i class="fa fa-quote-left"></i><span class="js-quoteText">{quoteText}</span></p>
          <p class="quoteAuthor js-quoteAuthor">{quoteAuthor}</p>
        </div>
      );
    
  }
}

export default Quote;