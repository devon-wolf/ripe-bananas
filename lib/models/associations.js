const Studio = require('./Studio');
const Film = require('./Film');
const Actor = require('./Actor');
const Reviewer = require('./Reviewer');
const Review = require('./Review');


Studio.hasMany(Film);
Film.belongsTo(Studio);
Film.hasMany(Review);
Review.belongsTo(Film);
Review.belongsTo(Reviewer);
Reviewer.hasMany(Review);

const Cast = Film.belongsToMany(Actor, {through: 'Film_Actor', as: 'cast'});
Actor.belongsToMany(Film, {through: 'Film_Actor'});


module.exports = {
    Cast
};