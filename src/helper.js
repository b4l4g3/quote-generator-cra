let rng = function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

let tweet = function tweetQuote(quotes) {
    let a = document.createElement('a');
    a.target = "_blank";
    a.href = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(`"${quotes.quote}" ${quotes.author}`)}`
    a.click();
}

let tumblr = function tumblrQuote(quotes) {
    console.dir(quotes)
    let a = document.createElement('a');
    a.target = "_blank";
    a.href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(quotes.author)}&content=${encodeURIComponent(quotes.quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
    a.click();
}


export { rng, tweet, tumblr};