const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRouter')

const app = express();

// console.log(dotenv.config())

const { PORT, DB_USER, DB_PASSWORD } = process.env;

// Anirudha@726
// mongodb+srv://anirudha:<db_password>@cluster0.rmrof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const dbURL = `mongodb+srv://nalapuranirudhh:Rn425wFqi2w062F3@cluster0.1vr2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



mongoose.connect(dbURL).then((connection)=>{
    // console.log('conection', connection);
    console.log('db is connected');
}).catch((err)=>{console.error(err)});

console.log(dbURL);


//Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// start the server
app.listen(8080, ()=>{
    console.log(`Server is listening on ${8080}`)
});

