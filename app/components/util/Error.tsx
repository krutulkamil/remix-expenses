import { FaExclamationCircle } from "react-icons/fa";
import type { FunctionComponent, ReactNode } from "react";

interface ErrorProps {
    title: string;
    children: ReactNode;
}

const Error: FunctionComponent<ErrorProps> = ({ title, children }): JSX.Element => {
    return (
        <div className="error">
            <div className="icon">
                <FaExclamationCircle />
            </div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default Error;