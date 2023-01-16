import type { Expense as IExpense } from "@prisma/client";
import type { IExpenseValidationError } from "~/types/expense";

const isValidTitle = (value: string): boolean => {
    if (value) {
        return value.trim().length > 0 && value.trim().length <= 30;
    }
    return false;
};

const isValidAmount = (value: string): boolean => {
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
};

const isValidDate = (value: string): boolean => {
    if (value) {
        return new Date(value).getTime() < new Date().getTime();
    }
    return false;
};

export const validateExpenseInput = (input: IExpense) => {
    let validationErrors: IExpenseValidationError = {};

    if (!isValidTitle(String(input.title))) {
        validationErrors.title = "Invalid expense title. Must be at most 30 characters long.";
    }

    if (!isValidAmount(String(input.amount))) {
        validationErrors.amount = "Invalid amount. Must be a number greater than zero.";
    }

    if (!isValidDate(String(input.date))) {
        validationErrors.date = 'Invalid date. Must be a date before today.'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
};