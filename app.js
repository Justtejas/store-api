const dotenv = require('dotenv');
dotenv.config();
//async errors
require('express-async-errors');
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFound = require('./middleware/notfound');
const errorHandler = require('./middleware/errorhandler');


//middleware

app.use(express.json());


// routes

app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Products</a>')
})


app.use('/api/v1/products',productsRouter);



// products route

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start();