const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Film extends Model {}

Film.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    released: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    timestamps: false,
    tableName: 'Films',
  }
);

module.exports = Film;
