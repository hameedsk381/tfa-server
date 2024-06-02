
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const volunteersRoute = require('./routes/Volunteers');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://hameedsk381:Y16cs943@cluster0.lw568vp.mongodb.net/Form');
const formRoutes = require('./routes/form');
const responseRoutes = require('./routes/responses');

app.use('/api/forms', formRoutes);
app.use('/api/responses', responseRoutes);
app.use('/api/volunteer', volunteersRoute);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
