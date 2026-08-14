import { useState, useEffect } from "react";
import PropertyForm from "../components/PropertyForm";
import PropertyTable from "../components/PropertyTable";

function Properties() {
    const [properties, setProperties] = useState(() => {

        const savedProperties = localStorage.getItem("properties");

        if (savedProperties) {
            return JSON.parse(savedProperties);
        }
          return[
            {
              id: 1,
              name: "Lekki Duplex",
              price: "₦120M",
              status: "Available",
              agentId: 1,
            },
            {
              id: 2,
              name: "Abuja Villa",
              price: "₦180M",
              status: "Pending",
               agentId: 2,
            },
            {
              id: 3,
              name: "Ikoyi Penthouse",
              price: "₦350M",
              status: "Sold",
               agentId: 1,
            },
            {
              id: 4,
              name: "Asokoro Mansion",
              price: "₦450M",
              status: "Available",
              agentId: 2,
            }
          ]

        });

const [agents] = useState(() => {

    const savedAgents = localStorage.getItem("agents");

    if (savedAgents) {
        return JSON.parse(savedAgents);
    }

    return [];
});

const [search, setSearch] = useState("");
const [propertyName, setPropertyName] = useState("");
const [propertyPrice, setPropertyPrice] = useState("");
const [propertyStatus, setPropertyStatus] = useState("Available");
const [agentId, setAgentId] = useState("");
const [editingId, setEditingId] = useState(null);

useEffect(() => {

        localStorage.setItem(
            "properties",
            JSON.stringify(properties)
        );

    }, [properties]);

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

  if (editingId !== null) {

    const updatedProperties = properties.map((property) =>
      property.id === editingId
        ? {
            ...property,
            name: propertyName,
            price: propertyPrice,
            status: propertyStatus,
            agentId: Number(agentId)
          }
        : property
    );

    setProperties(updatedProperties);
    setEditingId(null);

  } else {

    const newProperty = {
      id: Date.now(),
      name: propertyName,
      price: propertyPrice,
      status: propertyStatus,
      agentId: Number(agentId)
    };

    setProperties([...properties, newProperty]);
    }

      setPropertyName("");
      setPropertyPrice("");
      setPropertyStatus("Available");
      setAgentId("");
    }

    function editProperty(property) {
      setPropertyName(property.name);
      setPropertyPrice(property.price);
      setPropertyStatus(property.status);
      setAgentId(property.agentId);

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
         {editingId !== null ? "Update Property" : "+ Add Property"}
        </button>
        
        <PropertyForm
          propertyName={propertyName}
          setPropertyName={setPropertyName}

          propertyPrice={propertyPrice}
          setPropertyPrice={setPropertyPrice}

          propertyStatus={propertyStatus}
          setPropertyStatus={setPropertyStatus}

          agents={agents}
          agentId={agentId}
          setAgentId={setAgentId}
        />
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

<PropertyTable
  filteredProperties={filteredProperties}
  editProperty={editProperty}
  deleteProperty={deleteProperty}
  agents={agents}
  tableHeaderStyle={tableHeaderStyle}
  tableCellStyle={tableCellStyle}
/>
      

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
