module.exports = (sequelize, DataTypes) => {
  const Hisobot = sequelize.define("hisobot", {
    maxsulot_nomi: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      minlength: 1,
      validate: {
        notEmpty: true,
      },
    },
    maxsulot_soni: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 1,
      validate: {
        notEmpty: true,
      },
    },
    maxsulot_narxi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    umumiy_summa: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 1,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Hisobot;
};
