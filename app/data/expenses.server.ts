import { prisma } from "~/data/database.server";
import type { Expense as IExpense, PrismaPromise } from "@prisma/client";

export const addExpense = async (expenseData: IExpense): Promise<PrismaPromise<IExpense>> => {
    try {
        return await prisma.expense.create({
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date),
            }
        });
    } catch (error) {
        throw new Error(`Failed to add ${expenseData.title} expense.`);
    }
};

export const getExpenses = async (): Promise<PrismaPromise<IExpense[]>> => {
    try {
        return await prisma.expense.findMany({ orderBy: { date: "desc" } });
    } catch (error) {
        throw new Error("Failed to get expenses.");
    }
};

export const getExpense = async (id: string): Promise<PrismaPromise<IExpense | null>> => {
    try {
        return await prisma.expense.findFirst({ where: { id } });
    } catch (error) {
        throw new Error(`Failed to get expense ${id} ID.`);
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
        throw new Error("Failed to update expense.");
    }
};

export const deleteExpense = async (id: string): Promise<PrismaPromise<IExpense>> => {
    try {
        return await prisma.expense.delete({ where: { id } });
    } catch (error) {
        throw new Error("Failed to delete expense.");
    }
};