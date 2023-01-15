import ExpenseForm from "~/components/expenses/ExpenseForm";
import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";

const UpdateExpensesPage: FunctionComponent = (): JSX.Element => {
    return (
        <ExpenseForm />
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Expense ID | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default UpdateExpensesPage;