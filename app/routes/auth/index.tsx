import AuthForm from "~/components/auth/AuthForm";
import { MetaFunction } from "@remix-run/node";

const AuthPage = (): JSX.Element => {
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