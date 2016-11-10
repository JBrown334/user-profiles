var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res) {
      var filtered = users.filter(function(item){
        return item.name === req.body.name;
      });
      if(filtered[0]){
        if(filtered[0].password === req.body.password) {
          req.session.currentUser = filtered[0];
          console.log('USER FOUND');
          res.status(200).send({userFound: true});
      }
    } else {
    console.log('USER NOT FOUND!');
    res.status(401).send({userFound: false});
    }
  }
};
