import Info from '../model/model';

export const signup = async(req, res) => {

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
}

export const login = async (req, res) => {
    const { newUserEmail, newUserPassword1 } = req.body;
  
    try {
      const user = await Info.findOne({ newUserEmail });
      if (user && user.newUserPassword1 == newUserPassword1 ) {
        return res.send("login success");
      }
     else{
      res.status(400).send("invalid credentials");
    }
    } catch (error) {
      console.error('Error during login', error);
      res.send("Internal server error");
    }
  }