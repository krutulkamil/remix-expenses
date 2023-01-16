export interface IExpense {
    id: string;
    title: string;
    amount: number;
    date: string;
}

export interface IExpenseValidationError {
    title?: string;
    amount?: string;
    date?: string;
}