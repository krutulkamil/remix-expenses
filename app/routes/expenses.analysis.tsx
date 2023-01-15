import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import type { IExpense } from "~/types/expense";
import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";

export const DUMMY_EXPENSES: IExpense[] = [
    {
        id: "e1",
        title: "example expense",
        amount: 400,
        date: new Date().toISOString(),
    },
    {
        id: "e2",
        title: "example expense 2",
        amount: 100,
        date: (new Date().getMonth() + 2).toString(),
    },
    {
        id: "e3",
        title: "example expense 3",
        amount: 140,
        date: (new Date().getMonth() + 3).toString(),
    }
];

const ExpensesAnalysisPage: FunctionComponent = (): JSX.Element => {
    return (
        <main>
            <Chart expenses={DUMMY_EXPENSES} />
            <ExpenseStatistics expenses={DUMMY_EXPENSES} />
        </main>
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Analysis | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default ExpensesAnalysisPage;