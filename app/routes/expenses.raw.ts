import type { LoaderFunction } from "@remix-run/node";
import { getExpenses } from "~/data/expenses.server";
import { requireUserSession } from "~/data/auth.sever";

export const loader: LoaderFunction = async ({ request }) => {
    await requireUserSession(request);

    return await getExpenses();
};