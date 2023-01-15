import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import type { Expense } from "~/types/expense";

export const DUMMY_EXPENSES: Expense[] = [
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

const ExpensesAnalysisPage = (): JSX.Element => {
    return (
        <main>
            <Chart expenses={DUMMY_EXPENSES} />
            <ExpenseStatistics expenses={DUMMY_EXPENSES} />
        </main>
    );
};

export default ExpensesAnalysisPage;