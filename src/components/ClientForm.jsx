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

        </div>
        
    )
}

export default ClientForm;