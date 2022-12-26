import express from 'express'
import connectDb from './db/connectdb.js';
import { join } from 'path';
import web from "./routes/web.js";
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDb(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

//Static Files
app.use('/', express.static(join(process.cwd(), "public")))

// Set Template Engine
app.set("view engine", "ejs");


// Load Routes
app.use("/", web)

app.listen(port, () =>{
    console.log(`Server listening on http://localhost:${port}`)
})