import "../styles/PropertyForm.css";

function PropertyForm({
  propertyName,
  setPropertyName,
  propertyPrice,
  setPropertyPrice,
  propertyStatus,
  setPropertyStatus,
  agents,
  agentId,
  setAgentId,
}) {
  return (
        <div className="property-form">
            <input
                type="text"
                className="property-input"
                placeholder="Property Name"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
            />

            <input
                type="text"
                className="property-input"
                placeholder="Price"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
            />

            <select
            className="property-select"
            value={propertyStatus}
            onChange={(e) => setPropertyStatus(e.target.value)}
            >
            <option>Available</option>
            <option>Pending</option>
            <option>Sold</option>
            </select>

            <select
            className="property-select"
            value={agentId}
            onChange={(e) => setAgentId(Number(e.target.value))}
            >
            <option value="">Select Agent</option>

            {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                {agent.name}
                </option>
            ))}
            </select>
        </div>
  );
}

export default PropertyForm;