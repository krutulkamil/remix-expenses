import type { MetaFunction } from "@remix-run/node";

const Index = (): JSX.Element => {
    return (
        <h1>Home Page</h1>
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default Index;
