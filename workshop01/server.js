const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "public", "images")));

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/quote", (_, response) => {
  const possibleQuotes = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "There are 10 kinds of people. Those who know binary and those who don't.",
    "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue.",
  ];
  const randomQuote =
    possibleQuotes[Math.floor(Math.random() * possibleQuotes.length)];

  response.send({ text: randomQuote });
});

app.get("/", (_, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});
