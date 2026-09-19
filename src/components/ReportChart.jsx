import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import "../styles/ReportChart.css";

function ReportChart({ filter }) {

    const chartData = {

        "Today": [
            {
                name: "Today",
                Revenue: 450000,
                Expenses: 100000,
                Profit: 350000
            }
        ],

        "This Week": [
            {
                name: "This Week",
                Revenue: 8500000,
                Expenses: 2500000,
                Profit: 6000000
            }
        ],

        "This Month": [
            {
                name: "This Month",
                Revenue: 120000000,
                Expenses: 40000000,
                Profit: 80000000
            }
        ],

        "This Year": [
            {
                name: "This Year",
                Revenue: 950000000,
                Expenses: 300000000,
                Profit: 650000000
            }
        ],

        "All Time": [
            {
                name: "All Time",
                Revenue: 2500000000,
                Expenses: 900000000,
                Profit: 1600000000
            }
        ]

    };

    const data = chartData[filter];

    function formatCurrency(value) {
        return `₦${value.toLocaleString()}`;
    }

    function formatAxis(value) {

        if (value >= 1000000000) {
            return `₦${value / 1000000000}B`;
        }

        if (value >= 1000000) {
            return `₦${value / 1000000}M`;
        }

        if (value >= 1000) {
            return `₦${value / 1000}K`;
        }

        return `₦${value}`;
    }

    return (

        <div className="report-chart">

            <h2>{filter} Revenue Overview</h2>

            <div className="chart-container">

                <ResponsiveContainer width="100%" height={350}>

                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis
                            tickFormatter={formatAxis}
                        />

                        <Tooltip
                            formatter={(value) => formatCurrency(value)}
                        />

                        <Legend />

                        <Bar
                            dataKey="Revenue"
                            fill="#2563eb"
                        />

                        <Bar
                            dataKey="Expenses"
                            fill="#dc2626"
                        />

                        <Bar
                            dataKey="Profit"
                            fill="#16a34a"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default ReportChart;