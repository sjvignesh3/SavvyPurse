import expense_router from './routes/expenses-route';
import router from './routes/user-route';

const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());
app.use(express.json());

app.use('api/user',router);
app.use('api/expenses',expense_router);

mongoose.connect("mongodb+srv://esaseethapathi:3GTMRnhBItVlC9qB@cluster0.exbsa9l.mongodb.net/NewDb",{useNewUrlParser:true})
      .then( () => {
          console.log('Connected to database ')
      })
      .catch( (err) => {
          console.error(`Error connecting to the database. \n${err}`);
      })

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

