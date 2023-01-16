import { prisma } from "~/data/database.server";
import type { IExpense } from "~/types/expense";

export const addExpense = async (expenseData: IExpense) => {
    try {
        return await prisma.expense.create({
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date)
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};