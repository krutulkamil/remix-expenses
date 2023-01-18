import { Form, Link, NavLink, useLoaderData } from "@remix-run/react";
import Logo from "../util/Logo";
import type { FunctionComponent } from "react";
import type { loader } from "~/routes/__marketing";

const MainHeader: FunctionComponent = (): JSX.Element => {
    const userId: string | null = useLoaderData<typeof loader>();

    return (
        <header id="main-header">
            <Logo />
            <nav id="main-nav">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                </ul>
            </nav>
            <nav id="cta-nav">
                <ul>
                    <li>
                        {userId && (
                            <Form method="post" action="/logout" id="logout-form">
                                <button className="cta-alt">Logout</button>
                            </Form>
                        )}
                        {!userId && (
                            <Link to="/auth" className="cta">Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;