const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    findAll: function(req, res) {
      db.User
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    login: function(req,res) {
      db.User.find({username:req.body.username})
      .then(dbModel => { 
        console.log(dbModel)
        if(!bcrypt.compareSync(req.body.password, dbModel[0].password)) 
        {
            return res.status(400).send({ message: "The password is invalid" });
        }
        req.session.save(() => {
          req.session.loggedIn = true;
          req.session.id= dbModel._id
          res
            .status(200)
            .json({ user: dbModel, message: 'You are now logged in!' });
        });
      }).catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.User
        .create(req.body)
        .then(dbModel => {
          req.session.save(() => {
            req.session.loggedIn = true;
            req.session.id= dbModel._id
            res
              .status(200)
              .json({ user: dbModel, message: 'You are now logged in!' });
          });
        })
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  