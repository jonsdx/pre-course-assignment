function displayQuote() {
  const quoteElement = document.getElementById("quote");

  fetch("/quote")
    .then((response) => response.json())
    .then((quote) => {
      quoteElement.textContent = quote.text;
    });
}
displayQuote();
