const getQuote = async () => {
  try {
    const response = await fetch("http://localhost:3000");
    const response_data = await response.json();
    console.log(response_data);
    document.getElementById("quote").innerText = response_data.Quote;
  } catch (error) {
    console.log(error);
  }
};

getQuote();
