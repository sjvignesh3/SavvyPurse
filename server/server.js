const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const UserInfo=require('./model');
const ExpenseInfo=require('./expense_model');


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://esaseethapathi:3GTMRnhBItVlC9qB@cluster0.exbsa9l.mongodb.net/NewDb",{useNewUrlParser:true})
.then( () => {
          console.log('Connected to database ')
      })
      .catch( (err) => {
          console.error(`Error connecting to the database. \n${err}`);
      })

      app.post('/insert', async(req, res) => {
        const uName = req.body.uname
        const uEmail = req.body.uemail
        const uPass=req.body.upass
      
        const formData = new UserInfo({
            username1: uName,
            email1: uEmail,
            password1:uPass,

        })
      
        try {
            await formData.save();
            res.send("inserted data..")
        } catch(err) {
      
            console.log("code in catch for inserting data"+err);
        }
      });
      
      
      app.post('/login', async (req, res) => {
        const { username1, password1 } = req.body;
      
        try {
          const user = await UserInfo.findOne({ username1, password1 });
      
          if (!user) {
               res.send("invalid credentials");
          }
      
          res.json({ message: "Login successful", user });
        } catch (error) {
          console.error("Error during login:", error);
          //res.status(500).json({ message: "An error occurred" });
        }
      });

      app.post('/expense', async(req, res) => {
        const uName = req.body.uname
        const uBudget = req.body.ubudget
        const uCategory = req.body.ucategory
        const uAmount=req.body.uamount
      
        const expenseData = new ExpenseInfo({
             name: uName,
            budget: uBudget,
            category: uCategory,
            amount:uAmount,

        })
      
        try {
            await expenseData.save();
            res.send("inserted budget data..");
        } catch(err) {
      
            console.log("code in catch for inserting data"+err);
        }
      });

      
      
      const port = process.env.PORT || 4000;
      
      app.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });
  