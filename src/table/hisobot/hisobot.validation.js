const Joi = require("@hapi/joi");

module.exports = {
  auth: {
    body: {
      inn: Joi.string().required(),
      psw: Joi.string().required()
    }
  },

  addNew: {
    body: {
      title: Joi.string().required(),
      text: Joi.string().required(),
      url: Joi.string().required(),
    }
  },

  updateOne: {
    params: {
      id: Joi.string().required()
    },
    body: {
        title: Joi.string().required(),
        text: Joi.string().required(),
        Url: Joi.string().required(),
      }
  },

  deleteOne: {
    params: {
      id: Joi.string().required()
    }
  }
}