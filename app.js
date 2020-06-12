var quotes = [
  "Experience is the name everyone gives to their mistakes.",
  "Overcoming Fear and Finding Motivation of Writing Code.",
  "Overcoming Fear and Finding Motivation of Writing Code.",
  "It is never too late to become a guru, but it needs hours of practice in the fields and passion mingled with intention.",
  "We are all born with the fire of greatness in us, it is just about discovering it and let it light up all the world of possibilities around us. Perseverance,  Persistence, Passion along with Patience and Effort is the magical 4  Ps",
  "Be patient, Building your career clout/personal brand is important and takes a lot of time. Be patient and humble. Lift others up and help people in your own way. Eventually you will get recognized for it. I'm not saying you wont fall prey to our societies natural and unfortunately biases. Many people have to deal with those on a regular basis and it's totally not fair. Keep working at it though and you will find success.",
  "But the most important thing is to learn from your failures. Don't forget, opportunities are in front of you, not behind!.",
];

function getQuote() {
  var randonNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("newQuoteSection").innerHTML = quotes[randonNumber];
}
