const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = "mongodb+srv://aneco:BlHGElcP1UZCdXm2@milesweb.xqz5h.mongodb.net/aneco_academy?retryWrites=true&w=majority"
//const uri = "mongodb://127.0.0.1:27017/aneco_academy";
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("connection failed");
    console.log(err);
})

app.use(express.json());
app.use(cors());
app.use('/api/user',userRoute);
app.use('/api/product',productRoute);


app.listen(8081,()=>{
     console.log("server is running on 8080")
})