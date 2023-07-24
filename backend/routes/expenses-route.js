import express from 'express';
import { getAllExpenses, addExpense } from '../controller/expenses-tracker';

const expense_router = express.Router();

router.post("/addExpense",addExpense);
router.get("/getAllExpenses",getAllExpenses);

export default expense_router;