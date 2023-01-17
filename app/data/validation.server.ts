import type { Expense as IExpense } from "@prisma/client";
import type { IExpenseValidationError } from "~/types/expense";
import type { IUser, IUserValidationError } from "~/types/user";

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

const isValidEmail = (value: string): boolean => {
    let isRegexValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

    return !!(value && isRegexValid);
};

const isValidPassword = (value: string): boolean => {
    if (value) {
        return value.trim().length > 7 && value.trim().length <= 30;
    }
    return false;
};

export const validateUserInput = (input: IUser): void => {
    let validationErrors: IUserValidationError = {};

    if (!isValidEmail(input.email)) {
        validationErrors.email = "Invalid email address."
    }

    if (!isValidPassword(input.password)) {
        validationErrors.password = "Invalid password. Must be at least 8 characters long and less than 30."
    }
}

export const validateExpenseInput = (input: IExpense): void => {
    let validationErrors: IExpenseValidationError = {};

    if (!isValidTitle(input.title)) {
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