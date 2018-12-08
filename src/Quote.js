import React, { Component } from 'react';
import './Quote.css'

class Quote extends Component {
     

  render() {
    const quoteText = this.props.quoteText;
    const quoteAuthor = this.props.quoteAuthor;
      return (
        <div className="quote-container">
          <p className="quoteText"><i className="fa fa-quote-left"></i><span className="js-quoteText">{quoteText}</span></p>
          <p className="quoteAuthor js-quoteAuthor">{quoteAuthor}</p>
        </div>
      );
    
  }
}

export default Quote;