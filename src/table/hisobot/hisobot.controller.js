const db = require("../../model");
const Hisobot = db.hisobot;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  Hisobot.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the videos.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Hisobot.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving videos.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Hisobot.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving video with id=" + id,
      });
    });
};

exports.update = (req, res) => {

  const id = req.params.id;

  Hisobot.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Hisobot was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Hisobot with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating video with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Hisobot.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Hisobot was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Staff with id=${id}. Maybe video was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete video with id=" + id,
      });
    });
};
