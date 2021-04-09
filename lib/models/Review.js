const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Review extends Model {};

Review.init(
	{
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize: db,
		timestamps: false
	}
)
module.exports = Review;