const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Film_Actor extends Model {}

Film_Actor.init(
  {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    film: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

// Film.belongsToMany(Actor, { through: Film_Actor, foreignKey: film_id });
// Actor.belongsToMany(Film, { through: Film_Actor, foreignKey: actor_id });

module.exports = Film_Actor;
