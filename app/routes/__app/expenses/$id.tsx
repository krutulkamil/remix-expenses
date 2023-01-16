import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { getExpense } from "~/data/expenses.server";
import type { MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { LoaderFunction } from "@remix-run/node";

const UpdateExpensesPage: FunctionComponent = (): JSX.Element => {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate('..')
    };

    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    );
};

export const loader: LoaderFunction = async ({ params }) => {
    const expenseId: string = params.id!;
    return await getExpense(expenseId);
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Expense ID | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default UpdateExpensesPage;