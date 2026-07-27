import "../styles/AgentForm.css";

function AgentForm({
    agentName,
    setAgentName,
    agentPhone,
    setAgentPhone,
    agentEmail,
    setAgentEmail,
    agentRole,
    setAgentRole,
    agentStatus,
    setAgentStatus,
})

    {
        return(
            <div className="agent-form">
                <input 
                    className="agent-input"
                    type="text" 
                    placeholder="Agent Name"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}

                />

                <input 
                    className="agent-input"
                    type="text" 
                    placeholder="Agent Phone"
                    value={agentPhone}
                    onChange={(e) => setAgentPhone(e.target.value)}

                />

                <input 
                    className="agent-input"
                    type="text" 
                    placeholder="Agent Email"
                    value={agentEmail}
                    onChange={(e) => setAgentEmail(e.target.value)}

                />

                <input 
                    className="agent-input"
                    type="text" 
                    placeholder="Agent Role"
                    value={agentRole}
                    onChange={(e) => setAgentRole(e.target.value)}

                />

                <input 
                    className="agent-input"
                    type="text" 
                    placeholder="Agent Status"
                    value={agentStatus}
                    onChange={(e) => setAgentStatus(e.target.value)}

                />

                
            </div>
        );
    }

export default AgentForm;