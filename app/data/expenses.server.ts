import { prisma } from "~/data/database.server";
import type { Expense as IExpense, PrismaPromise } from "@prisma/client";

export const addExpense = async (expenseData: IExpense): Promise<PrismaPromise<IExpense>> => {
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

export const getExpenses = async (): Promise<PrismaPromise<IExpense[]>> => {
    try {
        return await prisma.expense.findMany({ orderBy: { date: "desc" } });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getExpense = async (id: string): Promise<PrismaPromise<IExpense | null>> => {
    try {
        return await prisma.expense.findFirst({ where: { id } });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateExpense = async (id: string, expenseData: IExpense): Promise<PrismaPromise<IExpense>> => {
    try {
        return await prisma.expense.update({
            where: { id },
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

export const deleteExpense = async (id: string): Promise<PrismaPromise<IExpense>> => {
    try {
        return await prisma.expense.delete({ where: { id } });
    } catch (error) {
        console.log(error);
        throw error;
    }
};