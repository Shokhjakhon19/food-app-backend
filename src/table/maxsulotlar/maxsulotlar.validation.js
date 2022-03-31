const Joi = require("@hapi/joi");

module.exports = {
  auth: {
    body: {
      inn: Joi.string().required(),
      psw: Joi.string().required(),
    },
  },

  addNew: {
    body: {
      maxsulot_nomi: Joi.string().required(),
      maxsulot_turi: Joi.string().required(),
      maxsulot_holati: Joi.string().required(),
      maxsulot_narxi: Joi.string().required(),
    },
  },

  updateOne: {
    params: {
      id: Joi.string().required(),
    },
    body: {
      maxsulot_nomi: Joi.string().required(),
      maxsulot_turi: Joi.string().required(),
      maxsulot_holati: Joi.string().required(),
      maxsulot_narxi: Joi.string().required(),
    },
  },

  deleteOne: {
    params: {
      id: Joi.string().required(),
    },
  },
};
