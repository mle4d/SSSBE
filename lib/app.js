const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.use('/api/v1/sssbe', require('./Routes/superheroRoutes'));

app.get('/', (req,res) => {
  res.send('fuck')
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
