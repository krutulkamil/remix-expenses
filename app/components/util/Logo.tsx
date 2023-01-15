import { Link } from "@remix-run/react";
import type { FunctionComponent } from "react";

const Logo: FunctionComponent = (): JSX.Element => {
    return (
        <h1 id="logo">
            <Link to="/">RemixExpenses</Link>
        </h1>
    );
};

export default Logo;