import { Link, Outlet } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa";
import ExpenseList from "~/components/expenses/ExpenseList";
import { DUMMY_EXPENSES } from "~/routes/__app/expenses.analysis";
import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";

const ExpensesLayout: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <Outlet />
            <main>
                <section id="expenses-actions">
                    <Link to="add">
                        <FaPlus />
                        <span>Add Expense</span>
                    </Link>
                    <a href="/expenses/raw">
                        <FaDownload />
                        <span>Load Raw Data</span>
                    </a>
                </section>
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