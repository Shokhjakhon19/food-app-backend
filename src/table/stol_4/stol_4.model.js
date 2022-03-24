module.exports = (sequelize, Sequelize) => {
  const Stol_4 = sequelize.define("stol_4", {
    buyurtma_nomi: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
    buyurtma_soni: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
    buyurtma_narxi: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 500,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Stol_4;
};
