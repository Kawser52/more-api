const quoteLoad= () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = quoteData =>{
    const blocQuote= document.getElementById('blockquote');
    const quote = quoteData.quote;
    blocQuote.innerText = quote;
   
}