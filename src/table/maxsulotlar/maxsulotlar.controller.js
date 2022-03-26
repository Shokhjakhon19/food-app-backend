const db = require("../../model");
const Maxsulotlar = db.maxsulotlar;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Maxsulotlar.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Maxsulotlar.",
      });
    });
};

exports.create = (req, res) => {
  const amember = {
    maxsulot_nomi: req.body.maxsulot_nomi,
    maxsulot_holati: req.body.maxsulot_holati,
    maxsulot_narxi: req.body.maxsulot_narxi,
    maxsulot_turi: req.body.maxsulot_turi,
    maxsulot_rasmi: req.body.maxsulot_rasmi,
  };

  Maxsulotlar.create(amember)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Maxsulotlar.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Maxsulotlar.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving maxsulotlar with id=" + id,
      });
    });
};

exports.filter = (req, res) => {
  var a = req.query.turi;
  Maxsulotlar.findAll({ where: { maxsulot_turi: a } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Maxsulotlar.",
      });
    });
};

exports.update = (req, res) => {

  const amember = {
    maxsulot_nomi: req.body.maxsulot_nomi,
    maxsulot_holati: req.body.maxsulot_holati,
    maxsulot_narxi: req.body.maxsulot_narxi,
    maxsulot_turi: req.body.maxsulot_turi,
    maxsulot_rasmi: req.body.maxsulot_rasmi,
  };

  const id = req.params.id;

  Maxsulotlar.update(amember, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "maxsulotlar was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update maxsulotlar with id=${id}. Maybe Staff was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating maxsulotlar with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Maxsulotlar.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "maxsulotlar was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete maxsulotlar with id=${id}. Maybe Staff was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete maxsulotlar with id=" + id,
      });
    });
};
