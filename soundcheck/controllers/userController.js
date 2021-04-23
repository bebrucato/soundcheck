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
        if(!bcrypt.compareSync(request.body.password, dbModel.password)) 
          {
            return response.status(400).send({ message: "The password is invalid" });
        }
        res.json(dbModel)
      }).catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
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
  