import { Outlet } from "@remix-run/react";
import ExpenseList from "~/components/expenses/ExpenseList";
import { DUMMY_EXPENSES } from "~/routes/expenses.analysis";

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

export default ExpensesLayout;