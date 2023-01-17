import { Form, Link, useSearchParams, useNavigation, useActionData } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";
import type { FunctionComponent } from "react";
import type { Navigation } from "@remix-run/router";
import type { IUserValidationError } from "~/types/user";

const AuthForm: FunctionComponent = (): JSX.Element => {
    const [searchParams] = useSearchParams();
    const navigation: Navigation = useNavigation();
    const validationErrors: IUserValidationError | undefined = useActionData();

    const authMode = searchParams.get("mode") || "login";

    const submitButtonCaption = authMode === "login" ? "Login" : "Create User";
    const toggleButtonCaption = authMode === "login" ? "Create a new user" : "Log in with existing user";

    const isSubmitting = navigation.state !== "idle";

    return (
        <Form method="post" className="form" id="auth-form">
            <div className="icon-img">
                {authMode === "login" ? <FaLock /> : <FaUserPlus />}
            </div>
            <p>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" minLength={7} maxLength={30} />
            </p>
            {validationErrors && (
                <ul>
                    {Object.values(validationErrors).map((error: string) => <li key={error}>{error}</li>)}
                </ul>
            )}
            <div className="form-actions">
                <button disabled={isSubmitting}>{isSubmitting ? "Authenticating..." : submitButtonCaption}</button>
                <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>{toggleButtonCaption}</Link>
            </div>
        </Form>
    );
};

export default AuthForm;