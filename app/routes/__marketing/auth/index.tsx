import AuthForm from "~/components/auth/AuthForm";
import { validateCredentials } from "~/data/validation.server";
import { login, signup } from "~/data/auth.sever";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { User as IUser } from "@prisma/client";
import type { IUserValidationError } from "~/types/user";
import type { ResponseError } from "~/services/throwErrorResponse";

const AuthPage: FunctionComponent = (): JSX.Element => {
    return (
        <AuthForm />
    );
};

export const action: ActionFunction = async ({ request }) => {
    const searchParams: URLSearchParams = new URL(request.url).searchParams;
    const authMode: string = searchParams.get("mode") || "login";

    const formData: FormData = await request.formData();
    const credentials = Object.fromEntries(formData) as unknown as IUser;

    try {
        validateCredentials(credentials);
    } catch (error) {
        return error as IUserValidationError;
    }

    try {
        if (authMode === "login") {
            return await login(credentials);
        } else {
            return await signup(credentials);
        }
    } catch (error) {
        return { credentials: (error as ResponseError).message}
    }
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "Auth | Remix Expenses"
});

export default AuthPage;