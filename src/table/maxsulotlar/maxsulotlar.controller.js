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
          err.message || "Some error occurred while retrieving Aforizms.",
      });
    });
};

exports.create = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const amember = {
    maxsulot_nomi: req.body.maxsulot_nomi,
    maxsulot_holati: req.body.maxsulot_holati,
    maxsulot_narxi: req.body.maxsulot_narxi,
    maxsulot_turi: req.body.maxsulot_turi,
  };

  Maxsulotlar.create(amember)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Aforizms.",
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

exports.update = (req, res) => {
  if (!req.file) {
    res.status(500);
    return res.json({ error: "katta error" });
  }
  const amember = {
    maxsulot_nomi: req.body.maxsulot_nomi,
    maxsulot_holati: req.body.maxsulot_holati,
    maxsulot_narxi: req.body.maxsulot_narxi,
    maxsulot_turi: req.body.maxsulot_turi,
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
