import "../styles/ReportFilter.css";

function ReportFilter({
    filter,
    setFilter,
}) {

    return (

        <div className="report-filter">

            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >

                <option value="Today">Today</option>

                <option value="This Week">This Week</option>

                <option value="This Month">This Month</option>

                <option value="This Year">This Year</option>

                <option value="All Time">All Time</option>

            </select>

        </div>

    );

}

export default ReportFilter;