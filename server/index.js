const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require("./routes/user");

try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Db Connected");
    });
} catch(err){
    console.log("Yes");
    console.log(err);
}
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/user', userRoutes);


app.listen(PORT, ()=> {
    console.log("Listening on port " + `${PORT}`)
})