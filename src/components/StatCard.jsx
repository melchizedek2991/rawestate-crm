function StatCard({ title, value, color, icon }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
      }}
    >

    <div
        style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            marginBottom: "16px"
        }}
    >
        {icon}
    </div>

      <h3
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "15px",
          fontWeight: "600"
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "12px",
          color: "#1e293b",
          fontSize: "42px",
          fontWeight: "700"
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;