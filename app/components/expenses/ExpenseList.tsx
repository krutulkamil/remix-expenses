import ExpenseListItem from "./ExpenseListItem";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";

interface ExpenseListProps {
    expenses: IExpense[];
}

const ExpenseList: FunctionComponent<ExpenseListProps> = ({ expenses }): JSX.Element => {
    return (
        <ol id="expenses-list">
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <ExpenseListItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                    />
                </li>
            ))}
        </ol>
    );
};

export default ExpenseList;