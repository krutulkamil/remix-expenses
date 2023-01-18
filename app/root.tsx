import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useCatch
} from "@remix-run/react";
import Error from "~/components/util/Error";
import styles from "./styles/main.css";
import type { FunctionComponent, ReactNode } from "react";
import type { ErrorBoundaryComponent, LinksFunction, MetaFunction } from "@remix-run/node";
import type { CatchBoundaryComponent } from "@remix-run/react/dist/routeModules";

interface DocumentProps {
    title?: string;
    children: ReactNode;
}

const Document: FunctionComponent<DocumentProps> = ({ title, children }): JSX.Element => {
    return (
        <html lang="en">
        <head>
            {title && <title>{title}</title>}
            <Meta />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap"
                  rel="stylesheet" />
            <Links />
        </head>
        <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </body>
        </html>
    );
};

const App: FunctionComponent = (): JSX.Element => {
    return (
        <Document>
            <Outlet />
        </Document>
    );
};

export const CatchBoundary: CatchBoundaryComponent = (): JSX.Element => {
    const caughtResponse = useCatch();

    return (
        <Document title={caughtResponse.statusText}>
            <main>
                <Error title={caughtResponse.statusText}>
                    <p>{caughtResponse.data?.message || "Something went wrong. Please try again later."}</p>
                    <p>Back to <Link to="/">safety</Link>.</p>
                </Error>
            </main>
        </Document>
    );
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }): JSX.Element => {
    return (
        <Document title="An error occurred.">
            <main>
                <Error title="An error occurred.">
                    <p>{error.message || "Something went wrong. Please try again later."}</p>
                    <p>Back to <Link to="/">safety</Link>.</p>
                </Error>
            </main>
        </Document>
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "Remix Expenses",
    description: "Manage your expenses with ease."
});

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};

export default App;
