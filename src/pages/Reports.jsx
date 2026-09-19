import { useState } from "react";

import ReportCard from "../components/ReportCard";
import ReportChart from "../components/ReportChart";
import ReportFilter from "../components/ReportFilter";
import ExportReport from "../components/ExportReport";
import RecentTransactions from "../components/RecentTransactions";

import "../styles/Reports.css";

function Reports() {
    
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

            if (!item.createdAt) {
                return false;
            }

            const createdDate = new Date(item.createdAt);

            if (filter === "All Time") {
                return true;
            }

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


    const reportData = {

    "Today": [

        { id:1, title:"Revenue", value:"₦450,000" },
        { id:2, title:"Properties", value:"2" },
        { id:3, title:"Clients", value:"1" },
        { id:4, title:"Agents", value:"3" },
        { id:5, title:"Leads", value:"5" },
        { id:6, title:"Expenses", value:"₦100,000" },
        { id:7, title:"Profit", value:"₦350,000" },

    ],

    "This Week": [

        { id:1, title:"Revenue", value:"₦8,500,000" },
        { id:2, title:"Properties", value:"15" },
        { id:3, title:"Clients", value:"9" },
        { id:4, title:"Agents", value:"10" },
        { id:5, title:"Leads", value:"25" },
        { id:6, title:"Expenses", value:"₦2,500,000" },
        { id:7, title:"Profit", value:"₦6,000,000" },

    ],

    "This Month": [

        { id:2, title:"Properties", value:properties.length },
        { id:3, title:"Clients", value:clients.length },
        { id:4, title:"Agents", value:agents.length },
        { id:5, title:"Leads", value:leads.length },
        { id:6, title:"Tasks", value:tasks.length },

    ],

    "This Year": [

        { id:1, title:"Revenue", value:"₦950,000,000" },
        { id:2, title:"Properties", value:"850" },
        { id:3, title:"Clients", value:"430" },
        { id:4, title:"Agents", value:"65" },
        { id:5, title:"Leads", value:"1,400" },
        { id:6, title:"Expenses", value:"₦300,000,000" },
        { id:7, title:"Profit", value:"₦650,000,000" },

    ],

    "All Time": [

        { id:1, title:"Revenue", value:"₦2.5 Billion" },
        { id:2, title:"Properties", value:"2,800" },
        { id:3, title:"Clients", value:"1,900" },
        { id:4, title:"Agents", value:"120" },
        { id:5, title:"Leads", value:"6,500" },
        { id:6, title:"Expenses", value:"₦900,000,000" },
        { id:7, title:"Profit", value:"₦1.6 Billion" },

    ]

};
    const [filter, setFilter] = useState("This Month");
    const reports = reportData[filter];


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
