const  express=require('express');
const mongoose=require('mongoose');
const coursesRouter=require('./routes/courses');
const bodyParser=require("body-parser");

require('dotenv').config()
const app=express();

app.use(bodyParser.json());
app.use('/courses',coursesRouter);



main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("db connected");
}

app.listen(process.env.PORT,()=>{
    console.log('server running');
})