import { Link, Form, useActionData, useNavigation } from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { IExpenseValidationError } from "~/types/expense";

const ExpenseForm: FunctionComponent = (): JSX.Element => {
    const today: string = new Date().toISOString().slice(0, 10);
    const validationErrors: IExpenseValidationError | undefined = useActionData();
    const navigation = useNavigation();

    const isSubmitting: boolean = navigation.state !== 'idle';

    return (
        <Form method="post" className="form" id="expense-form">
            <p>
                <label htmlFor="title">Expense Title</label>
                <input type="text" id="title" name="title" required maxLength={30} />
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
                    />
                </p>
                <p>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" max={today} required />
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