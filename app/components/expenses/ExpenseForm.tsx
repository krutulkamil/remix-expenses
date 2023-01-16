import {
    Link,
    Form,
    useActionData,
    useNavigation,
    useMatches,
    useParams
} from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";
import type { RouteMatch, Params } from "@remix-run/react";
import type { IExpenseValidationError } from "~/types/expense";

const ExpenseForm: FunctionComponent = (): JSX.Element => {
    const today: string = new Date().toISOString().slice(0, 10);

    const matches: RouteMatch[] = useMatches();
    const params: Params = useParams();

    const expenses: IExpense[] = matches.find(match => match.id === "routes/__app/expenses")!.data;
    const expenseData = expenses.find((expense: IExpense) => expense.id === params.id);

    const navigation = useNavigation();
    const validationErrors: IExpenseValidationError | undefined = useActionData();

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
                        defaultValue={defaultValues.date ? String(defaultValues.date).slice(0, 10) : ""}
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