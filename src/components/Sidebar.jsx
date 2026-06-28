function Sidebar({ activeItem, setActiveItem }) {
  
  const navItems = [
    "Dashboard",
    "Properties", 
    "Leads",
    "Clients",
    "Agents",
    "Reports",
    "Settings"
  ];

  return (
    <aside style={{
      width: "220px",
      minWidth: "220px",
      backgroundColor: "#0f172a",
      display: "flex",
      flexDirection: "column",
      padding: "0"
    }}>

      {/* Logo area */}
      <div style={{
        padding: "20px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <div style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#3b82f6",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px"
          }}>R</div>
          <span style={{ color: "#fff", fontWeight: "bold", fontSize: "15px" }}>
            RawEstate
          </span>
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ padding: "12px 8px", flex: 1 }}>
        {navItems.map((item) => (
          <div
            key={item}
            onClick={() => setActiveItem(item)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              margin: "2px 0",
              color: activeItem === item ? "#ffffff" : "rgba(255,255,255,0.6)",
              backgroundColor: activeItem === item ? "#1e40af" : "transparent",
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* User profile at bottom */}
      <div style={{
        padding: "14px 16px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        <div style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "#1e40af",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#93c5fd",
          fontSize: "11px",
          fontWeight: "bold"
        }}>AY</div>
        <div>
          <div style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: "600" }}>Ayodele</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>Admin</div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;