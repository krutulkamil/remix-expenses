import { useMemo } from "react";
import { calculateSummaryStatistics } from "~/services/calculateSummaryStatistics";
import type { FunctionComponent } from "react";
import type { IExpense } from "~/types/expense";

interface ExpenseStatisticsProps {
    expenses: IExpense[];
}

const ExpenseStatistics: FunctionComponent<ExpenseStatisticsProps> = ({ expenses }): JSX.Element => {
    const { minAmount, maxAmount, sum, mean } = useMemo(() => calculateSummaryStatistics(expenses), [expenses]);

    return (
        <section>
            <h2>Summary Statistics</h2>
            <dl id="expense-statistics">
                <div>
                    <dt>Total</dt>
                    <dd>${sum.toFixed(2)}</dd>
                </div>
                <div>
                    <dt>Average</dt>
                    <dd>${mean.toFixed(2)}</dd>
                </div>
                <div>
                    <dt>Min. Amount</dt>
                    <dd>${minAmount.toFixed(2)}</dd>
                </div>
                <div>
                    <dt>Max. Amount</dt>
                    <dd>${maxAmount.toFixed(2)}</dd>
                </div>
            </dl>
        </section>
    );
};

export default ExpenseStatistics;

