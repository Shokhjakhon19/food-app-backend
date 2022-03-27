const db = require("../../model");
const Stol_1 = db.stol_1;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Stol_1.create(req.body)
    .then((data) => {
      res.send(data);
      console.log("succes");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stol_1.",
      });
    });
};

// Stol_1 find all object with id
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Stol_1.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Stol_1.",
      });
    });
};

// Stol_1 find one object with id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stol_1.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Stol_1 with id=" + id,
      });
    });
};

// Stol_1 update with id
exports.update = (req, res) => {
  const id = req.params.id;

  Stol_1.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_1 was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Stol_1 with id=${id}. Maybe Stol_1 was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Stol_1 with id=" + id,
      });
    });
};

// Stol_1 delete with id
exports.deleteOne = (req, res) => {
  const id = req.params.id;

  Stol_1.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_1 was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Stol_1 with id=${id}. Maybe Stol_1 was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stol_1 with id=" + id,
      });
    });
};

// Stol_1 delete all rows
exports.deleteAll = (req, res) => {

  Stol_1.destroy({
    where: {},
  })
    .then(() => {
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