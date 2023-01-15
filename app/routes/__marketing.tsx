import { Outlet } from "@remix-run/react";
import type { FunctionComponent } from "react";

const MarketingLayout: FunctionComponent = (): JSX.Element => {
    return <Outlet />;
};

export default MarketingLayout;