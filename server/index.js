const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A friend asks only for your time not your money.", "All the effort you are making will ultimately pay off.", "Don’t worry; prosperity will knock on your door soon.", "Good news will be brought to you by mail.", "Listen to everyone. Ideas come from everywhere."];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune)
});

app.get("/api/motivation", (req,res) => {
  const motivations = ["There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.", "The road to success and the road to failure are almost exactly the same.", "Success is liking yourself, liking what you do, and liking how you do it.", "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!", "It is better to fail in originality than to succeed in imitation."];

  let randomIndex = Math.floor(Math.random() * motivations.length);
  let randomMotivation = motivations[randomIndex];

  res.status(200).send(randomMotivation);
})
app.get("/api/date", (req, res) => {
  var today = new Date()
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() +1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy
  res.status(200).send(today)

})


app.listen(4000, () => console.log("Server running on 4000"));
