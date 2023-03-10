import type { IExpense } from "~/types/expense";

export const calculateSummaryStatistics = (expenses: IExpense[]) => {
    const amounts: number[] = expenses.map((expense) => +expense.amount);
    const maxAmount: number = Math.max(...amounts);
    const minAmount: number = Math.min(...amounts);
    const sum: number = expenses.reduce((previousValue, currentValue) => currentValue.amount + previousValue, 0);
    const mean: number = sum / expenses.length;

    return { minAmount, maxAmount, sum, mean };
};