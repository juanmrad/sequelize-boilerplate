const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

app.get('/user', (req, res) => {
  db.user.findAll().then( (users) => {
    res.send(users);
  })
});

app.post('/user', (req, res) => {
  if(!req.body.firstName){
    res.send('please provide first name');
    return;
  }

  db.user.create({
    firstName: req.body.firstName, 
    lastName: req.body.lastName, 
    email: req.body.email,
    gender: req.body.gender
  }).then(function(user){
      console.log(user);
      res.send(user);
  });
})

app.listen(3000, () => {
  console.log('server listening on port 3000');
})