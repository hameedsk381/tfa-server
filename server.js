require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const volunteersRoute = require('./routes/Volunteers');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Welcome to the Volunteer Management System API');
});

mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log("MongoDB connected");
  });
const formRoutes = require('./routes/form');
const responseRoutes = require('./routes/responses');

app.use('forms', formRoutes);
app.use('responses', responseRoutes);
app.use('volunteer', volunteersRoute);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
