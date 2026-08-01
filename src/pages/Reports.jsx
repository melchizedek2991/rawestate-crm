import { useState } from "react";

import ReportCard from "../components/ReportCard";
import ReportChart from "../components/ReportChart";
import ReportFilter from "../components/ReportFilter";
//import ExportReport from "../components/ExportReport";

import "../styles/Reports.css";

function Reports() {
    
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

        { id:1, title:"Revenue", value:"₦120,000,000" },
        { id:2, title:"Properties", value:"120" },
        { id:3, title:"Clients", value:"78" },
        { id:4, title:"Agents", value:"35" },
        { id:5, title:"Leads", value:"240" },
        { id:6, title:"Expenses", value:"₦40,000,000" },
        { id:7, title:"Profit", value:"₦80,000,000" },

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

        </div>

    );

}


export default Reports;