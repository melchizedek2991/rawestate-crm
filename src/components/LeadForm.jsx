import "../styles/LeadForm.css";

function LeadForm({
  leadName,
  setLeadName,
  leadPhone,
  setLeadPhone,
  leadSource,
  setLeadSource,
  leadStatus,
  setLeadStatus,
  agents,
  agentId,
  setAgentId,
  properties,
  propertyId,
  setPropertyId
}) {
  return (
    <div className="lead-form">

      <input
        className="lead-input"
        type="text"
        placeholder="Lead Name"
        value={leadName}
        onChange={(e) => setLeadName(e.target.value)}
      />

      <input
        className="lead-input"
        type="text"
        placeholder="Phone Number"
        value={leadPhone}
        onChange={(e) => setLeadPhone(e.target.value)}
      />

      <input
        className="lead-input"
        type="text"
        placeholder="Source"
        value={leadSource}
        onChange={(e) => setLeadSource(e.target.value)}
      />

      
      <select
        className="lead-select"
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

      <select
        className="lead-select"
        value={propertyId}
        onChange={(e) => setPropertyId(Number(e.target.value))}
      >
        <option value="">Select Property</option>

        {properties.map((property) => (
          <option key={property.id} value={property.id}>
            {property.name}
          </option>
        ))}
      </select>

      <select
        className="lead-select"
        value={leadStatus}
        onChange={(e) => setLeadStatus(e.target.value)}
      >
        <option>New</option>
        <option>Contacted</option>
        <option>Qualified</option>
      </select>


    </div>
  );
}

export default LeadForm;