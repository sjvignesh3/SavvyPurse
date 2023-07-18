const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const Info=require('./model');

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
  const newEmail = req.body.new_email1
  const newPassword1 = req.body.new_password1
  const newPassword2 = req.body.new_password2
  const formData = new Info({
      newUserEmail: newEmail,
      newUserPassword1: newPassword1,
      newUserPassword2: newPassword2
  })

  try {
      await formData.save();
      res.send("inserted data..")
  } catch(err) {

      console.log(err)
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// app.listen(3000,function() {
//   console.log("express server is running on 3000");
// })
