const db = require("../../model");
const Stol_4 = db.stol_4;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Stol_4.create(req.body)
    .then((data) => {
      res.send(data);
      console.log("succes");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stol_4.",
      });
    });
};

// Stol_4 find all object with id
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Stol_4.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Stol_4.",
      });
    });
};

// Stol_4 find one object with id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stol_4.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Stol_4 with id=" + id,
      });
    });
};

// Stol_4 update with id
exports.update = (req, res) => {
  const id = req.params.id;

  Stol_4.update(req.body, {
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

// Stol_4 delete with id
exports.deleteOne = (req, res) => {
  const id = req.params.id;

  Stol_4.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Stol_4 was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Stol_4 with id=${id}. Maybe Stol_4 was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stol_4 with id=" + id,
      });
    });
};

// Stol_4 delete all rows
exports.deleteAll = (req, res) => {

  Stol_4.destroy({
    where: {},
  })
    .then(() => {
        res.send({
          message: "Stol_4 was deleted successfully!",
        });
      }
    )
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Stol_4 with id=" + id,
      });
    });
};