<<<<<<< HEAD
// const Studio = require('./Studio');
// const Film = require('./Film');
// const Actor = require('./Actor');
// const Reviewer = require('./Reviewer');
// const Review = require('./Review');

// Studio.hasMany(Film);
// Film.belongsTo(Studio);
// Film.hasMany(Review);
// Review.belongsTo(Film);
// Review.belongsTo(Reviewer);
// Reviewer.hasMany(Review);
// Film.hasMany(Actor);
// Actor.hasMany(Film);
=======
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
Film.hasMany(Actor);
Actor.hasMany(Film);
>>>>>>> 848dbb53572b80539d7a63f822d9d3ad64ff734a
