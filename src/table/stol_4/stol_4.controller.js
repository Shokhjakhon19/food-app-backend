const db = require("../../model");
const Stol_4 = db.stol_4;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const Stol_4 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  Stol_4.create(Stol_4)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stol_4.",
      });
    });
};

// Retrieve all Stol_4 from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Stol_4.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Stol_4.",
      });
    });
};

// Find a single Stol_4 with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stol_4.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Stol_4 by the id in the request
exports.update = (req, res) => {
  const Stol_4 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  const id = req.params.id;

  Stol_1.update(Stol_4, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_4 was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Stol_4 with id=${id}. Maybe Stol_4 was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Stol_4 with id=" + id,
      });
    });
};

// Delete a Stol_4 with the specified id in the request
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
