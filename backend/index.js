import app from "./app.js"
import mongodb from "mongodb"
import mongoose from "mongoose"
import dotenv from "dotenv"


// const mongoose = require('mongoose')
dotenv.config();

const port = process.env.PORT || 5000
// async function main ()
mongoose.connect(process.env.SCOREBOARD_DB_URI,
    { useNewUrlParser: true },
    () => console.log('connected to MongoDB!')
    )


app.listen(port, () => console.log(`listening at port: ${port}`));

