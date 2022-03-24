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
      buyurtma_nomi: Joi.string().required(),
      buyurtma_soni: Joi.string().required(),
      buyurtma_narxi: Joi.string().required(),
    },
  },

  updateOne: {
    params: {
      id: Joi.string().required(),
    },
    body: {
      buyurtma_nomi: Joi.string().required(),
      buyurtma_soni: Joi.string().required(),
      buyurtma_narxi: Joi.string().required(),
    },
  },

  deleteOne: {
    params: {
      id: Joi.string().required(),
    },
  },
};
