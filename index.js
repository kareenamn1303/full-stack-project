const express = require('express');
const app = express();
const db = require('./Database/sqlDB');

app.use(express.json());
app.use('/',require('./routes/authRoutes'));

app.listen(8000,() => {
    console.log("Server Connect to port 8000");
    db.connect((err) => {
        if (err) throw err;
        console.log("SQL Database Connected");
    })
});