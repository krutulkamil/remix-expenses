import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/data/auth.sever";
import type { FunctionComponent } from "react";
import type { LoaderFunction } from "@remix-run/node";

const MarketingLayout: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
};

export const loader: LoaderFunction = async ({ request }) => {
    return await getUserFromSession(request);
};

export default MarketingLayout;