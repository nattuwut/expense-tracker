import "./../styles/ExpenseChart.css";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

function ExpenseChart({ transactions }) {

    if (transactions.length === 0) {
        return null;
    }

    const income = transactions
        .filter((transaction) => transaction.type === "income")
        .reduce(
            (total, transaction) =>
                total + transaction.amount,
            0
        );

    const expense = transactions
        .filter((transaction) => transaction.type === "expense")
        .reduce(
            (total, transaction) =>
                total + transaction.amount,
            0
        );

    const data = [
        {
            name: "Income",
            value: income,
        },
        {
            name: "Expense",
            value: expense,
        },
    ];

    return (
        <div className="expense-chart">

            <h2>Income vs Expense</h2>

            <div className="chart-container">

                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            <Cell fill="#16a34a" />
                            <Cell fill="#dc2626" />
                        </Pie>

                        <Tooltip
                            formatter={(value) =>
                                `฿${value.toLocaleString()}`
                            }
                        />

                        <Legend />

                    </PieChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default ExpenseChart;