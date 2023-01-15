import { Outlet } from "@remix-run/react";
import ExpenseList from "~/components/expenses/ExpenseList";
import { DUMMY_EXPENSES } from "~/routes/expenses.analysis";
import type { MetaFunction } from "@remix-run/node";

const ExpensesLayout = (): JSX.Element => {
    return (
        <>
            <Outlet />
            <main>
                <ExpenseList expenses={DUMMY_EXPENSES} />
            </main>
        </>
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Expenses | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default ExpensesLayout;