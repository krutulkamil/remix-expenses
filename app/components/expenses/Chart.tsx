import ChartBar from "./ChartBar";
import type { FunctionComponent } from "react";
import type { Expense } from "~/types/expense";

interface ChartProps {
    expenses: Expense[];
}

export interface ChartData {
    label: string;
    value: number;
}

const Chart: FunctionComponent<ChartProps> = ({ expenses }): JSX.Element => {
    const chartDataPoints: ChartData[] = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 }
    ];

    for (const expense of expenses) {
        const expenseMonth = new Date(expense.date).getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    const dataPointValues: number[] = chartDataPoints.map((dataPoint: ChartData) => dataPoint.value);
    const totalMaximum: number = Math.max(...dataPointValues);

    return (
        <section>
            <h2>Monthly Expenses</h2>
            <ol className="chart">
                {chartDataPoints.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                ))}
            </ol>
        </section>
    );
};

export default Chart;