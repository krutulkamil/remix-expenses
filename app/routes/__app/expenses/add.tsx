import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { redirect } from "@remix-run/node";
import { addExpense } from "~/data/expenses.server";
import { requireUserSession } from "~/data/auth.sever";
import { validateExpenseInput } from "~/data/validation.server";
import type { ActionFunction } from "@remix-run/node";
import type { FunctionComponent } from "react";
import type { Expense as IExpense } from "@prisma/client";
import type { IExpenseValidationError } from "~/types/expense";

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

export const action: ActionFunction = async ({ request }): Promise<Response | IExpenseValidationError> => {
    const userId = await requireUserSession(request);

    const formData: FormData = await request.formData();
    const expenseData = Object.fromEntries(formData) as unknown as IExpense;

    try {
        validateExpenseInput(expenseData);
    } catch (error) {
        return error as IExpenseValidationError;
    }

    await addExpense(expenseData, userId);
    return redirect('/expenses');
};

export default AddExpensesPage;