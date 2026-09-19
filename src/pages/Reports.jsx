import { useState } from "react";

import ReportCard from "../components/ReportCard";
import ReportChart from "../components/ReportChart";
import ReportFilter from "../components/ReportFilter";
import ExportReport from "../components/ExportReport";
import RecentTransactions from "../components/RecentTransactions";

import "../styles/Reports.css";

function Reports() {

    const [filter, setFilter] = useState("This Month");
    
    const properties = JSON.parse(
        localStorage.getItem("properties") || "[]"
            );

            const clients = JSON.parse(
                localStorage.getItem("clients") || "[]"
            );

            const agents = JSON.parse(
                localStorage.getItem("agents") || "[]"
            );

            const leads = JSON.parse(
                localStorage.getItem("leads") || "[]"
            );

            const tasks = JSON.parse(
                localStorage.getItem("tasks") || "[]"
            );

    function filterByDate(items, filter) {

        const now = new Date();

        return items.filter((item) => {

            if (filter === "All Time") {
                return true;
            }

            if (!item.createdAt) {
                return false;
            }

            const createdDate = new Date(item.createdAt);

            if (filter === "Today") {

                return (
                    createdDate.getDate() === now.getDate() &&
                    createdDate.getMonth() === now.getMonth() &&
                    createdDate.getFullYear() === now.getFullYear()
                );

            }

            if (filter === "This Week") {

                const startOfWeek = new Date(now);

                startOfWeek.setDate(
                    now.getDate() - now.getDay()
                );

                startOfWeek.setHours(0, 0, 0, 0);

                return createdDate >= startOfWeek;

            }

            if (filter === "This Month") {

                return (
                    createdDate.getMonth() === now.getMonth() &&
                    createdDate.getFullYear() === now.getFullYear()
                );

            }

            if (filter === "This Year") {

                return (
                    createdDate.getFullYear() === now.getFullYear()
                );

            }

            return false;
        });
    }

    const filteredProperties = filterByDate(
            properties,
            filter
        );

        const filteredClients = filterByDate(
            clients,
            filter
        );

        const filteredAgents = filterByDate(
            agents,
            filter
        );

        const filteredLeads = filterByDate(
            leads,
            filter
        );

        const filteredTasks = filterByDate(
            tasks,
            filter
        );

    const reports = [
        {
            id: 1,
            title: "Properties",
            value: filteredProperties.length,
        },
        {
            id: 2,
            title: "Clients",
            value: filteredClients.length,
        },
        {
            id: 3,
            title: "Agents",
            value: filteredAgents.length,
        },
        {
            id: 4,
            title: "Leads",
            value: filteredLeads.length,
        },
        {
            id: 5,
            title: "Tasks",
            value: filteredTasks.length,
        },
    ];


    return(
        
        <div className="report-page">
            
            <ReportFilter
                filter={filter}
                setFilter={setFilter}
            />

        

             <div className="report-cards">

                {reports.map((report)=>(
                    <ReportCard
                        key={report.id}
                        title={report.title}
                        value={report.value}
                    />
                ))}

            </div>

            <ReportChart
                filter={filter}
            />
	
	<RecentTransactions />
	<ExportReport />

        </div>

    );

}


export default Reports;
