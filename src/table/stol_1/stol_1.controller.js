const db = require("../../model");
const Stol_1 = db.stol_1;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const Stol_1 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  Stol_1.create(Stol_1)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Stol_1 from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Stol_1.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Stol_1 with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stol_1.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Stol_1 by the id in the request
exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const Stol_1 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  const id = req.params.id;

  Stol_1.update(Stol_1, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_1 was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Stol_1 with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Stol_1 with id=" + id,
      });
    });
};

// Delete a Stol_1 with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Stol_1.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
