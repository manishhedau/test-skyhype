const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

//Importing Routes

const Audit_route = require('./routes/audit_route');

//Miscellaneous Imports 
const { port, database_url } = require('./config');
const path = require('path');
const app = express();


//Using Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'))
app.use(cors());

//Configuring Routes

app.use("/audit", Audit_route);


app.get("*", (req, res) => {
    console.log(process.cwd());
    res.sendFile(path.join(process.cwd(), "/build/index.html"));
});

mongoose.connect(database_url)
    .then(() => {
        console.log("Successfully connected to database..")

        app.listen(port, () => {
            console.log(`server is running on ${port}`);
        });
    })
    .catch(() => {
        console.log("Failed to connect to database..")
    });

