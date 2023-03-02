const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Routes
const userRoute  = require("./routes/user"); // Rotue
const domainsRoute  = require("./routes/domains"); // Rotue
const domainsNoteRoute  = require("./routes/domains-notes"); // Rotue
const domainHostsRoute  = require("./routes/domains-hosts"); // Rotue
const domainCategoryRoute  = require("./routes/domains-category"); // Rotue

// Express Use 
app.use(express.json())
app.use(cors(corsOptions)); 

// Make routes
app.use('/user', userRoute);
app.use('/domains', domainsRoute);
app.use('/domains-notes', domainsNoteRoute);
app.use('/domains-hosts', domainHostsRoute);
app.use('/domains-category', domainCategoryRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
