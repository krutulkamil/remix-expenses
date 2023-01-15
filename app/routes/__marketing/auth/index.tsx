import AuthForm from "~/components/auth/AuthForm";
import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";

const AuthPage: FunctionComponent = (): JSX.Element => {
    return (
        <AuthForm />
    );
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Auth | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default AuthPage;