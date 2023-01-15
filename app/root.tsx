import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import styles from "./styles/main.css";
import type { FunctionComponent } from "react";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

const App: FunctionComponent = (): JSX.Element => {
    return (
        <html lang="en">
        <head>
            <Meta />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap"
                  rel="stylesheet" />
            <Links />
        </head>
        <body>
        <MainHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </body>
        </html>
    );
};

export default App;
