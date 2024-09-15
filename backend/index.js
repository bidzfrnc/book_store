import express, { request, response } from "express";
import dotENV from "dotenv";
import mongoose from "mongoose";
import allBookRoutes from './routes/bookRoute.js';
import cors from "cors";

dotENV.config({path:'./config.env'});

const app = express();

//MIDDLEWARE FOR PARSING REQUEST BODY
app.use(express.json());

//MIDDLEWARE FOR HANDLING CORS POLICY (Cross-Origin Resource Sharing)
// Option 1: Allow ALl Origins with Default of core(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000/',
//         methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );



app.get('/', (request, response) => {
    return response.status(200).send("Welcome BIDZ PH MERN TUTS");
});


app.use('/book', allBookRoutes)



const port = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_STR, {
    // useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
        //this will run if the connection database is success
        app.listen(port, () => {
        console.log("App listening to the port: " + process.env.PORT)
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


