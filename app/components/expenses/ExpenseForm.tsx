import { Link, Form, useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import type { loader } from "~/routes/__app/expenses/$id";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";
import type { IExpenseValidationError } from "~/types/expense";

const ExpenseForm: FunctionComponent = (): JSX.Element => {
    const today: string = new Date().toISOString().slice(0, 10);
    const validationErrors: IExpenseValidationError | undefined = useActionData();
    const expenseData: IExpense = useLoaderData<typeof loader>();
    const navigation = useNavigation();

    const defaultValues = expenseData ? {
        title: expenseData.title,
        amount: expenseData.amount,
        date: expenseData.date
    } : {
        title: "",
        amount: "",
        date: ""
    };

    const isSubmitting: boolean = navigation.state !== "idle";

    return (
        <Form method="post" className="form" id="expense-form">
            <p>
                <label htmlFor="title">Expense Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    maxLength={30}
                    defaultValue={defaultValues.title}
                />
            </p>
            <div className="form-row">
                <p>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        min="0"
                        step="0.01"
                        required
                        defaultValue={defaultValues.amount}
                    />
                </p>
                <p>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        max={today}
                        required
                        defaultValue={defaultValues.date ? String(defaultValues.date).slice(0, 10) : ''}
                    />
                </p>
            </div>
            {validationErrors && (
                <ul>
                    {Object.values(validationErrors).map(error => <li key={error}>{error}</li>)}
                </ul>
            )}
            <div className="form-actions">
                <button disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Expense"}</button>
                <Link to="..">Cancel</Link>
            </div>
        </Form>
    );
};

export default ExpenseForm;