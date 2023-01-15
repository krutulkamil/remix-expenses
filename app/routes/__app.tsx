import { Outlet } from "@remix-run/react";
import type { FunctionComponent } from "react";

const ExpensesAppLayout: FunctionComponent = (): JSX.Element => {
    return <Outlet />;
};

export default ExpensesAppLayout;