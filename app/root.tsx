import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "@remix-run/react";
import styles from "./styles/main.css";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

const App = () => {
    return (
        <html lang="en">
        <head>
            <Meta />
            <Links />
        </head>
        <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </body>
        </html>
    );
};

export default App;
