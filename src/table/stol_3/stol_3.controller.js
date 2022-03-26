const db = require("../../model");
const Stol_3 = db.stol_3;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const Stol_3 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  Stol_3.create(Stol_3)
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

// Retrieve all Stol_3 from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Stol_3.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Stol_3.",
      });
    });
};

// Find a single Stol_3 with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stol_3.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Stol_3 with id=" + id,
      });
    });
};

// Update a Stol_3 by the id in the request
exports.update = (req, res) => {
  const Stol_3 = {
    buyurtma_nomi: req.body.buyurtma_nomi,
    buyurtma_soni: req.body.buyurtma_soni,
    buyurtma_narxi: req.body.buyurtma_narxi,
  };

  const id = req.params.id;

  Stol_3.update(Stol_3, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_3 was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Stol_3 with id=${id}. Maybe Stol_3 was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Stol_3 with id=" + id,
      });
    });
};

// Delete a Stol_3 with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Stol_1.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_3 was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Stol_3 with id=${id}. Maybe Stol_3 was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stol_3 with id=" + id,
      });
    });
};
