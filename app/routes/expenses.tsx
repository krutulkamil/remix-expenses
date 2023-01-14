import { Outlet } from "@remix-run/react";

const ExpensesLayout = (): JSX.Element => {
    return (
        <main>
            <p>Shared Expenses Layout</p>
            <Outlet />
        </main>
    );
};

export default ExpensesLayout;