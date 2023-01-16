import { useNavigate } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { updateExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
import type { Expense as IExpense } from "@prisma/client";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { IExpenseValidationError } from "~/types/expense";

const UpdateExpensesPage: FunctionComponent = (): JSX.Element => {
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

export const action: ActionFunction = async ({ params, request }): Promise<Response | IExpenseValidationError> => {
    const expenseId: string = params.id!;
    const formData: FormData = await request.formData();
    const expenseData = Object.fromEntries(formData) as unknown as IExpense;

    try {
        validateExpenseInput(expenseData);
    } catch (error) {
        return error as IExpenseValidationError;
    }

    await updateExpense(expenseId, expenseData);
    return redirect("/expenses");
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Expense ID | Remix Expenses",
    viewport: "width=device-width,initial-scale=1"
});

export default UpdateExpensesPage;