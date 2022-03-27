const db = require("../../model");
const Stol_2 = db.stol_2;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Stol_2.create(req.body)
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

// Stol_2 find all object with id
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Stol_2.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Stol_2.",
      });
    });
};

// Stol_2 find one object with id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stol_2.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Stol_2 with id=" + id,
      });
    });
};

// Stol_2 update with id
exports.update = (req, res) => {
  const id = req.params.id;

  Stol_2.update(req.body, {
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

// Stol_2 delete with id
exports.deleteOne = (req, res) => {
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
          message: `Cannot delete Stol_2 with id=${id}. Maybe Stol_2 was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stol_2 with id=" + id,
      });
    });
};

// Stol_2 delete all rows
exports.deleteAll = (req, res) => {

  Stol_2.destroy({
    where: {},
  })
    .then((num) => {
        res.send({
          message: "Stol_1 was deleted successfully!",
        });
      }
    )
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stol_1 with id=" + id,
      });
    });
};
