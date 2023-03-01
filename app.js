const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Routes
const userRoute  = require("./routes/user"); // User Rotue

// Express Use 
app.use(express.json())
app.use(cors(corsOptions)); 
app.use('/user', userRoute);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
