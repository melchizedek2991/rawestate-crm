import "../styles/ClientForm.css";

function ClientForm({
    clientName,
    setClientName,
    clientPhone,
    setClientPhone,
    clientEmail,
    setClientEmail,
    agents,
    agentId,
    setAgentId,
    properties,
    propertyId,
    setPropertyId,
})  {
    return(
        <div className="client-form">
            <input
            className="client-input"
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            />
            
            <input
            className="client-input"
            type="text"
            placeholder="Phone Number"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            />

            <input
            className="client-input"
            type="text"
            placeholder="Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            />
            <select
                className="client-input"
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
                className="client-input"
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

        </div>
        
    )
}

export default ClientForm;