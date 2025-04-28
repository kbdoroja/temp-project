// Server.js connects MongoDB database using Mongoose

import express from 'express';
import router from './router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router(app);


app.listen(3000, (err) => {
    if (err) { console.log(err)}
    else {console.log("Server started at port http://localhost:3000");}
});