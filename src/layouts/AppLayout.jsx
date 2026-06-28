import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

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

        <main style={{
          flex: 1,
          padding: "24px",
          overflowY: "auto"
        }}>
          <h1>Main Content</h1>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;