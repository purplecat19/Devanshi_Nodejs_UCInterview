
const express = require('express');  //bring express


const app = express();   //make the app


const PORT = 3000;   //decide port- 3000 for local testing


app.use(express.json());      //make app read JSON


const friendsRoutes = require('./routes/friends.routes');   //tell app where routes are


app.use('/friends', friendsRoutes);     //use routes


app.get('/', (req, res) => {
  res.send('Hello! Central Perk API is live!');
});

//start server

app.listen(PORT, () => {
  console.log('Your app is live at http://localhost:' + PORT);
});
