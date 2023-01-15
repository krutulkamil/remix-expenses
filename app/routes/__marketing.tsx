import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import type { FunctionComponent } from "react";

const MarketingLayout: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
};

export default MarketingLayout;