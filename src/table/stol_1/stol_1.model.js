module.exports = (sequelize, Sequelize) => {
  const Stol_1 = sequelize.define("stol_1", {
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

  return Stol_1;
};
