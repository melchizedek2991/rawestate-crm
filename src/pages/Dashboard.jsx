import StatCard from "../components/StatCard";

function Dashboard() {
    const stats = [
        {
          title: "Total Properties",
          value: 120,
          color: "#3b82f6",
          icon: "🏠"
        },
        {
          title: "New Leads",
          value: 34,
          color: "#10b981",
          icon: "👥"
        },
        {
          title: "Active Clients",
          value: 18,
          color: "#f59e0b",
          icon: "🤝"
        },
        {
          title: "Revenue",
          value: "₦120M",
          color: "#8b5cf6",
          icon: "💰"
        }
      ];

      const properties = [
        {
          id: 1,
          name: "Lekki Duplex",
          price: "₦120M",
          status: "Available"
        },
        {
          id: 2,
          name: "Ikoyi Penthouse",
          price: "₦350M",
          status: "Sold"
        },
        {
          id: 3,
          name: "Abuja Villa",
          price: "₦180M",
          status: "Pending"
        },
        {
          id: 4,
          name: "Victoria Island Apartment",
          price: "₦95M",
          status: "Available"
        }
      ];
      
    return (
      <div>
        <h1>Dashboard</h1>

        <p>Welcome to RawEstate CRM.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginTop: "24px"
          }}
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              icon={stat.icon}
            />
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ marginTop: 0 }}>Recent Properties</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px"
            }}
          >
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Property</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Status</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((property) => (
                <tr key={property.id}>
                  <td style={tableCellStyle}>{property.name}</td>
                  <td style={tableCellStyle}>{property.price}</td>
                  <td style={tableCellStyle}>{property.status}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        
      </div>
      
    );
    
}

  const tableHeaderStyle = {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    color: "#64748b",
    fontSize: "14px"
  };

  const tableCellStyle = {
  padding: "12px",
  borderBottom: "1px solid #e2e8f0",
  color: "#1e293b",
  fontSize: "14px"
};

export default Dashboard;