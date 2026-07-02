import { useState } from "react";

function Properties() {

    const properties = [
          {
            id: 1,
            name: "Lekki Duplex",
            price: "₦120M",
            status: "Available"
          },
          {
            id: 2,
            name: "Abuja Villa",
            price: "₦180M",
            status: "Pending"
          },
          {
            id: 3,
            name: "Ikoyi Penthouse",
            price: "₦350M",
            status: "Sold"
          },
          {
            id: 4,
            name: "Asokoro Mansion",
            price: "₦450M",
            status: "Available"
          }
        ];

const [search, setSearch] = useState("");
const filteredProperties = properties.filter((property) =>
  property.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px"
        }}
      >
        <h1>Properties</h1>

        <button
          style={{
            backgroundColor: "#3b82f6",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
           fontWeight: "600"
          }}
        >
         + Add Property
        </button>
      </div>

<input
  type="text"
  placeholder="Search properties..."
  value={search}
  onChange={(event) => setSearch(event.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    marginBottom: "24px"
  }}
/>

      <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#fff",
            borderRadius: "12px",
            overflow: "hidden"
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

	{filteredProperties.map((property) => (
          <tr key={property.id}>
            <td style={tableCellStyle}>{property.name}</td>
            <td style={tableCellStyle}>{property.price}</td>
            <td style={tableCellStyle}>{property.status}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  );
}


const tableHeaderStyle = {
  textAlign: "left",
  padding: "14px",
  borderBottom: "1px solid #e2e8f0",
  backgroundColor: "#f8fafc",
  color: "#64748b"
};

const tableCellStyle = {
  padding: "14px",
  borderBottom: "1px solid #e2e8f0"
};
export default Properties;
