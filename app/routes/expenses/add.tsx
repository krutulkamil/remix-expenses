import ExpenseForm from "~/components/expenses/ExpenseForm";
import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";

const AddExpensesPage: FunctionComponent = (): JSX.Element => {
    return (
        <ExpenseForm />
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Add Expense | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default AddExpensesPage;