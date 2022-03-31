module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define("category", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
  });

  return category;
};
