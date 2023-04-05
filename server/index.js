const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/', require('./routes/countycut'));

app.listen(3001, () => {
    console.log('server started on port 3001');
});