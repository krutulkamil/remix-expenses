import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { getExpenses } from "~/data/expenses.server";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";

const ExpensesAnalysisPage: FunctionComponent = (): JSX.Element => {
    const expenses: IExpense[] = useLoaderData<typeof loader>();

    return (
        <main>
            <Chart expenses={expenses} />
            <ExpenseStatistics expenses={expenses} />
        </main>
    );
};

export const loader: LoaderFunction = async () => {
    return await getExpenses();
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Analysis | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default ExpensesAnalysisPage;