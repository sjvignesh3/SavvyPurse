const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const Info=require('./model');
const ExpenseInfo=require('./expense');

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
//   const newEmail = req.body.new_email1
//   const newPassword1 = req.body.new_password1
//   const newPassword2 = req.body.new_password2
//   const formData = new Info({
//       newUserEmail: newEmail,
//       newUserPassword1: newPassword1,
//       newUserPassword2: newPassword2
//   })

const{newUserEmail,newUserPassword1,newUserPassword2,}=req.body;

  try {

    const user = await Info.findOne({ newUserEmail });
  
      
      if (user ) {
        return res.send("Email already exist");
      }
      else{
        const formData = new Info({
                  newUserEmail,
                  newUserPassword1,
                  newUserPassword2,
              })
      await formData.save();
      return res.send("Signed up successfully..")
      }
  } catch(err) {

      console.log(err)
      res.send("Internal  error");
  }
});

app.post('/login', async (req, res) => {
    const { newUserEmail, newUserPassword1 } = req.body;
  
    try {
      
      const user = await Info.findOne({ newUserEmail });
  
      
      if (user && user.newUserPassword1 == newUserPassword1 ) {
        return res.send("login success");
      }
     else{
      res.send("invalid credentials");
    }
    } catch (error) {
      console.error('Error during login', error);
      res.send("Internal server error");
    }
  });


  app.post('/adddata', async(req, res) => {
   
    const{catogory,amount,budget,date}=req.body;
    
      try {
    
          
            const expenseData = new ExpenseInfo({
                      catogory,
                      amount,
                      budget,
                      date,
                  })
          await expenseData.save();
          return res.send("Expense added successfully..")
          
      } catch(err) {
    
          console.log(err)
          res.send("Internal  error");
      }
    });
    
    app.get('/retrive', async (req, res) => {
      try {
        // Fetch all items from the database
        const items = await ExpenseInfo.find();
        res.json(items);
        //res.send("collected");
      } catch (error) {
       
        res.send("not collected");
      }
    });


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// app.listen(3000,function() {
//   console.log("express server is running on 3000");
// })
