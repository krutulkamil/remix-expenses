import { redirect } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";
import { validateCredentials } from "~/data/validation.server";
import { signup } from "~/data/auth.sever";
import type { ActionFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { User as IUser } from "@prisma/client";
import type { IUserValidationError } from "~/types/user";
import type { ResponseError } from "~/data/auth.sever";

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
            //     login logic
        } else {
            await signup(credentials);
            return redirect("/expenses");
        }
    } catch (error) {
        if ((error as ResponseError).status === 422) {
            return { credentials: (error as ResponseError).message };
        }
    }
};

export default AuthPage;