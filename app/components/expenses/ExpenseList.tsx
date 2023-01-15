import ExpenseListItem from "./ExpenseListItem";
import type { FunctionComponent } from "react";
import type { IExpense } from "~/types/expense";

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