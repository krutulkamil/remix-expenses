import type { LoaderFunction } from "@remix-run/node";
import { DUMMY_EXPENSES } from "~/routes/__app/expenses.analysis";

export const loader: LoaderFunction = () => DUMMY_EXPENSES;