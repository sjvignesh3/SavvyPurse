import ExpenseInfo from "../model/expense";

export const addExpense = async(req, res) => {
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
    }

export const getAllExpenses = async (req, res) => {
    try {
      // Fetch all items from the database
      const items = await ExpenseInfo.find();
      res.json(items);
    } catch (error) {
     
      res.send("not collected");
    }
  }