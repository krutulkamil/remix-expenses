import { useCatch, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import Error from "~/components/util/Error";
import { getExpenses } from "~/data/expenses.server";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import type { CatchBoundaryComponent } from "@remix-run/react/dist/routeModules";

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
    const expenses: IExpense[] = await getExpenses();

    if (!expenses || expenses.length === 0) {
        throw json({ message: "Could not load expenses for the requested analysis." }, {
            status: 404,
            statusText: "Expenses not found."
        });
    }

    return expenses;
};

export const CatchBoundary: CatchBoundaryComponent = (): JSX.Element => {
    const caughtResponse = useCatch();

    return (
        <main>
            <Error title={caughtResponse.statusText}>
                <p>{caughtResponse.data?.message || "Something went wrong - could not load expenses."}</p>
            </Error>
        </main>
    );
};

export default ExpensesAnalysisPage;