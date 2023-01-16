import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { redirect } from "@remix-run/node";
import { addExpense } from "~/data/expenses.server";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { IExpense } from "~/types/expense";

const AddExpensesPage: FunctionComponent = (): JSX.Element => {
    const navigate = useNavigate();

    const closeHandler = () => {
        navigate("..");
    };

    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm />
        </Modal>
    );
};

export const action: ActionFunction = async ({ request }): Promise<Response> => {
    const formData: FormData = await request.formData();
    const expenseData = Object.fromEntries(formData) as unknown as IExpense;

    await addExpense(expenseData);
    return redirect('/expenses');
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Add Expense | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default AddExpensesPage;