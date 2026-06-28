function Topbar({ title }) {
  return (
    <header style={{
      height: "56px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e2e8f0",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      gap: "12px"
    }}>

      <h2 style={{
        flex: 1,
        fontSize: "16px",
        fontWeight: "700",
        color: "#1e293b",
        margin: 0
      }}>
        {title}
      </h2>

      <input
        type="text"
        placeholder="Search..."
        style={{
          backgroundColor: "#f1f5f9",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          padding: "7px 12px",
          fontSize: "13px",
          color: "#64748b",
          width: "200px",
          outline: "none"
        }}
      />

      <button style={{
        background: "none",
        border: "none",
        fontSize: "18px",
        cursor: "pointer"
      }}>🔔</button>

      <div style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: "#3b82f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "bold"
      }}>AY</div>

    </header>
  );
}

export default Topbar;