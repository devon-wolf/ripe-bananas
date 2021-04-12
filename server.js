<<<<<<< HEAD
// require('../models/associations');
=======
require('./lib/models/associations');
>>>>>>> 848dbb53572b80539d7a63f822d9d3ad64ff734a
const app = require('./lib/app');

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
});
