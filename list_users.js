const db = require('./models');

// SELECT * FROM users;

db.user.findAll()
  .then((users) => {
    users.forEach( function(user){
    console.log(user.id, user.firstName);
  })
});