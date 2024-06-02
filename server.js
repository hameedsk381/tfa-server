require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const volunteersRoute = require('./routes/Volunteers');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Configure CORS properly
const corsOptions = {
  origin: '*', // Adjust this to restrict to specific origins as needed
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Welcome to the Volunteer Management System API');
});

mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log("MongoDB connected");
  });
const formRoutes = require('./routes/form');
const responseRoutes = require('./routes/responses');

app.use('/forms', formRoutes); // Corrected the path to include a leading slash
app.use('/responses', responseRoutes); // Corrected the path to include a leading slash
app.use('/volunteer', volunteersRoute); // Corrected the path to include a leading slash
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
