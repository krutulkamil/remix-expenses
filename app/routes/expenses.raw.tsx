import type { MetaFunction } from "@remix-run/node";

const RawExpensesPage = (): JSX.Element => {
    return (
        <h1>Raw Expenses Page</h1>
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Raw Expenses | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default RawExpensesPage;