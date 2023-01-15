import { Outlet } from "@remix-run/react";
import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import type { FunctionComponent } from "react";

const ExpensesAppLayout: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <ExpensesHeader />
            <Outlet />
        </>
    );
};

export default ExpensesAppLayout;