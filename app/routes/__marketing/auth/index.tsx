import AuthForm from "~/components/auth/AuthForm";
import { validateUserInput } from "~/data/validation.server";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { User as IUser } from "@prisma/client";
import type { IUserValidationError } from "~/types/user";

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
        validateUserInput(credentials);
    } catch (error) {
        return error as IUserValidationError;
    }

    if (authMode === "login") {
        //     login logic
    } else {
        //     signup logic
    }
};
export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Auth | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default AuthPage;