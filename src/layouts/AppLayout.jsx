import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "../pages/Dashboard";
import Properties from "../pages/Properties";
import Leads from "../pages/Leads";
import Clients from "../pages/Clients";

function AppLayout() {

  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div style={{
      display: "flex",         
      height: "100vh",         
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8fafc"
    }}>
      
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/>

      <div style={{
        flex: 1,               
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        
        <Topbar title={activeItem} />

        <main
            style={{
              flex: 1,
              padding: "24px",
              overflowY: "auto"
            }}
          >
    
            {activeItem === "Dashboard" && <Dashboard />}
            {activeItem === "Properties" && <Properties />}
            {activeItem === "Leads" && <Leads />}
            {activeItem === "Clients" && <Clients />}

        </main>
      </div>
    </div>
  );
}

export default AppLayout;
