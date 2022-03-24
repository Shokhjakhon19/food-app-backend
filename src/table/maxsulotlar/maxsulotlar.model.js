module.exports = (sequelize, DataTypes) => {
  const Maxsulotlar = sequelize.define("maxsulotlar", {
    maxsulot_nomi: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    maxsulot_holati: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    maxsulot_narxi: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    maxsulot_turi: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    maxsulot_rasmi: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Maxsulotlar;
};
