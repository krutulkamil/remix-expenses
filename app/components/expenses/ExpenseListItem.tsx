import type { FunctionComponent } from "react";
import type { Expense } from "~/types/expense";

interface ExpenseListItemProps {
    id: Expense["id"];
    title: Expense["title"];
    amount: Expense["amount"];
}

const ExpenseListItem: FunctionComponent<ExpenseListItemProps> = ({ id, title, amount }): JSX.Element => {
    const deleteExpenseItemHandler = () => {};

    return (
        <article className="expense-item">
            <div>
                <h2 className="expense-title">{title}</h2>
                <p className="expense-amount">${amount.toFixed(2)}</p>
            </div>
            <menu className="expense-actions">
                <button onClick={deleteExpenseItemHandler}>Delete</button>
                <a href="tbd">Edit</a>
            </menu>
        </article>
    );
};

export default ExpenseListItem;