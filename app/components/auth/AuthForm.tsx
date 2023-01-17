import { Form, Link, useSearchParams, useNavigation } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";
import type { FunctionComponent } from "react";
import type { Navigation } from "@remix-run/router";

const AuthForm: FunctionComponent = (): JSX.Element => {
    const [searchParams] = useSearchParams();
    const navigation: Navigation = useNavigation();

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
            <div className="form-actions">
                <button disabled={isSubmitting}>{isSubmitting ? "Authenticating..." : submitButtonCaption}</button>
                <Link to={authMode === "login" ? "?mode=signup" : "?mode=login"}>{toggleButtonCaption}</Link>
            </div>
        </Form>
    );
};

export default AuthForm;