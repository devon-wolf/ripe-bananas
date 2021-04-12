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

Film.belongsToMany(Actor, { through: 'Film_Actor' });
Actor.belongsToMany(Film, { through: 'Film_Actor' });


