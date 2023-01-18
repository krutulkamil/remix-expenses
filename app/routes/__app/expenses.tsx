import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";
import ExpenseList from "~/components/expenses/ExpenseList";
import { getExpenses } from "~/data/expenses.server";
import { requireUserSession } from "~/data/auth.sever";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";

const ExpensesLayout: FunctionComponent = (): JSX.Element => {
    const expenses: IExpense[] = useLoaderData<typeof loader>();
    const hasExpenses: boolean = expenses && expenses.length > 0;

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
                {hasExpenses && <ExpenseList expenses={expenses} />}
                {!hasExpenses && (
                    <section id="no-expenses">
                        <h1>No expenses found.</h1>
                        <p>Start <Link to="add">adding some</Link> today.</p>
                    </section>
                )}
            </main>
        </>
    );
};

export const loader: LoaderFunction = async ({ request }) => {
    const userId = await requireUserSession(request);

    return await getExpenses(userId);
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "Manage Expenses | Remix Expenses"
});

export default ExpensesLayout;