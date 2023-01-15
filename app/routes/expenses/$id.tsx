import ExpenseForm from "~/components/expenses/ExpenseForm";
import type { MetaFunction } from "@remix-run/node";

const UpdateExpensesPage = (): JSX.Element => {
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