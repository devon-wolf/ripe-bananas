const express = require('express');
const app = express();

app.use(express.json());

<<<<<<< HEAD
// app.use('/api/v1/actors', require('./controllers/actors'));
app.use('/api/v1/films', require('./controllers/films'));
app.use('/api/v1/films_actors', require('./controllers/films_actors'));
// app.use('/api/v1/reviewers', require('./controllers/reviewers'));
=======
app.use('/api/v1/actors', require('./controllers/actors'));
// app.use('/api/v1/films', require('./controllers/films'));
app.use('/api/v1/reviewers', require('./controllers/reviewers'));
>>>>>>> 848dbb53572b80539d7a63f822d9d3ad64ff734a
// app.use('/api/v1/reviews', require('./controllers/reviews'));
// app.use('/api/v1/studios', require('./controllers/studios'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
