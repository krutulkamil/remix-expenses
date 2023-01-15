import { Link } from "@remix-run/react";
import { FaLock } from "react-icons/fa";
import type { FunctionComponent } from "react";

const AuthForm: FunctionComponent = (): JSX.Element => {
    return (
        <form method="post" className="form" id="auth-form">
            <div className="icon-img">
                <FaLock />
            </div>
            <p>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" minLength={7} />
            </p>
            <div className="form-actions">
                <button>Login</button>
                <Link to="/auth">Log in with existing user</Link>
            </div>
        </form>
    );
};

export default AuthForm;