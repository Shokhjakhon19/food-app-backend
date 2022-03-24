module.exports = (sequelize, Sequelize) => {
  const Stol_3 = sequelize.define("stol_3", {
    buyurtma_nomi: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 100,
      validate: {
        notEmpty: true,
      },
    },
    buyurtma_soni: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 100,
      validate: {
        notEmpty: true,
      },
    },
    buyurtma_narxi: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      maxlength: 100,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Stol_3;
};
