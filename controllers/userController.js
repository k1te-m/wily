const User = require("../models/user");

module.exports = {
  getUserByUsername: (req, res) => {
    User.find({ username: req.params.username })
      .then((user) => {
        res.json(user);
      })
      .catch((error) => res.status(422).json(error));
  },
};
