import "../styles/ReportChart.css";

function ReportChart({ filter }) {

    const chartData = {

        "Today": [
            { label: "Revenue", value: 45 },
            { label: "Expenses", value: 10 },
            { label: "Profit", value: 35 },
        ],

        "This Week": [
            { label: "Revenue", value: 85 },
            { label: "Expenses", value: 25 },
            { label: "Profit", value: 60 },
        ],

        "This Month": [
            { label: "Revenue", value: 120 },
            { label: "Expenses", value: 40 },
            { label: "Profit", value: 80 },
        ],

        "This Year": [
            { label: "Revenue", value: 950 },
            { label: "Expenses", value: 300 },
            { label: "Profit", value: 650 },
        ],

        "All Time": [
            { label: "Revenue", value: 2500 },
            { label: "Expenses", value: 900 },
            { label: "Profit", value: 1600 },
        ]

    };

    const bars = chartData[filter];

    return (

        <div className="report-chart">

            <h2>{filter} Revenue Overview</h2>

            <div className="chart-container">

                {bars.map((bar) => (

                    <div
                        className="chart-row"
                        key={bar.label}
                    >

                        <span className="chart-label">
                            {bar.label}
                        </span>

                        <div className="chart-bar">

                            <div
                                className="chart-fill"
                                style={{
                                    width: `${bar.value / 25}%`
                                }}
                            ></div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ReportChart;