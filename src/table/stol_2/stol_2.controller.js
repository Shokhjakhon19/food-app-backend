const db = require("../../model");
const Stol_2 = db.stol_2;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const Stol_2 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  Stol_2.create(Stol_2)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stol_2.",
      });
    });
};

// Retrieve all Stol_2 from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Stol_2.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Stol_2.",
      });
    });
};

// Find a single Stol_2 with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stol_2.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Stol_2 by the id in the request
exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const Stol_2 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  const id = req.params.id;

  Stol_2.update(Stol_2, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_2 was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Stol_2 with id=${id}. Maybe Stol_2 was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Stol_2 with id=" + id,
      });
    });
};

// Delete a Stol_2 with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Stol_2.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_2 was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Stol_2 with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stol_2 with id=" + id,
      });
    });
};
