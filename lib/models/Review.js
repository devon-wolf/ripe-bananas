const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Review extends Model {};

Review.init(
	{
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		review: {
			type: DataTypes.STRING,
			allowNull: false
		},
		// dummy data pre-associations
		FilmId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ReviewerId: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize: db,
		timestamps: false
	}
);

module.exports = Review;