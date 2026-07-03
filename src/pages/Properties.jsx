import { useState } from "react";

function Properties() {
    const [properties, setProperties] = useState([
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
        ]);

const [search, setSearch] = useState("");
const [propertyName, setPropertyName] = useState("");
const [propertyPrice, setPropertyPrice] = useState("");
const [propertyStatus, setPropertyStatus] = useState("Available");
const [editingId, setEditingId] = useState(null);
const filteredProperties = properties.filter((property) =>
  property.name.toLowerCase().includes(search.toLowerCase())
);

function deleteProperty(id) {
  const updatedProperties = properties.filter(
    (property) => property.id !== id
  );

  setProperties(updatedProperties);
}

    function addProperty() {
      const newProperty = {
        id: Date.now(),
        name: propertyName,
        price: propertyPrice,
        status: propertyStatus
      };

      setProperties([...properties, newProperty]);

      setPropertyName("");
      setPropertyPrice("");
      setPropertyStatus("Available");
    }

    function editProperty(property) {
      setPropertyName(property.name);
      setPropertyPrice(property.price);
      setPropertyStatus(property.status);

      setEditingId(property.id);
    }
        
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
          onClick={addProperty}
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
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
            marginTop: "20px"
          }}
          >
            <input
              type="text"
              placeholder="Property Name"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Price"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(e.target.value)}
            />

          <select
            value={propertyStatus}
            onChange={(e) => setPropertyStatus(e.target.value)}
          >
            <option>Available</option>
            <option>Pending</option>
            <option>Sold</option>
          </select>
        </div>
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
          <th style={tableHeaderStyle}>Actions</th>
        </tr>
      </thead>

      <tbody>

	{filteredProperties.map((property) => (
          <tr key={property.id}>
            <td style={tableCellStyle}>{property.name}</td>
            <td style={tableCellStyle}>{property.price}</td>
            <td style={tableCellStyle}>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                color: "#fff",
                backgroundColor:
                  property.status === "Available"
                    ? "#10b981"
                    : property.status === "Pending"
                    ? "#f59e0b"
                    : "#ef4444",
                fontSize: "13px",
                fontWeight: "600"
              }}
            >
              {property.status}
            </span>
          </td>
          
          <td style={tableCellStyle}>
              <button
                onClick={() => editProperty(property)}
                style={{
                  backgroundColor: "#3b82f6",
                  color: "#fff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "8px"
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteProperty(property.id)}
                style={{
                  backgroundColor: "#ef4444",
                  color: "#fff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </td>
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
