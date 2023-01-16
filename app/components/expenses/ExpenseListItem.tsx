import { Link, useFetcher } from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";

interface ExpenseListItemProps {
    id: IExpense["id"];
    title: IExpense["title"];
    amount: IExpense["amount"];
}

const ExpenseListItem: FunctionComponent<ExpenseListItemProps> = ({ id, title, amount }): JSX.Element => {
    const fetcher = useFetcher();

    const deleteExpenseItemHandler = () => {
        const proceed: boolean = confirm("Are you sure? Do you want to delete this item?");

        if (!proceed) return;

        fetcher.submit(null, {
            method: "delete",
            action: `/expenses/${id}`
        });
    };

    if (fetcher.state !== "idle") {
        return (
            <article className="expense-item locked">
                <p>Deleting...</p>
            </article>
        );
    }

    return (
        <article className="expense-item">
            <div>
                <h2 className="expense-title">{title}</h2>
                <p className="expense-amount">${amount.toFixed(2)}</p>
            </div>
            <menu className="expense-actions">
                <button onClick={deleteExpenseItemHandler}>Delete</button>
                <Link to={id}>Edit</Link>
            </menu>
        </article>
    );
};

export default ExpenseListItem;