import { useState } from "react";
import AgentForm from "../components/AgentForm";
import AgentTable from "../components/AgentTable";
import "../styles/Agents.css";

function Agents() {
    const [agents, setAgents] = useState ([
        {
            id: 1,
            name: "Taiwo Hassan",
            phone: "09036647774",
            email: "taiwohassan@gmail.com",
            role: "sales officer",
            status: "Manager",
        },

        {
            id: 2,
            name: "Ahmed Hassan",
            phone: "08172635496",
            email: "ahmedassan@gmail.com",
            role: "Branch Manager",
            status: "AMD",
        },

        {
            id: 3,
            name: "Debby Osinowo",
            phone: "09182736495",
            email: "debbyosinowo@gmail.com",
            role: "sales Rep",
            status: "Junior Staff",
        },

    ]);

    const [agentName, setAgentName] = useState("");
    const [agentPhone, setAgentPhone] = useState("");
    const [agentEmail, setAgentEmail] = useState("");
    const [agentRole, setAgentRole] = useState("");
    const [agentStatus, setAgentStatus] = useState("");
    const [search, setSearch] = useState("");
    const [editingId, setEditingId] = useState(null);

    const filteredAgents  = agents.filter((agent) => 
    agent.name.toLowerCase().includes(search.toLowerCase())
    );

function addAgent() {
    if(
        agentName.trim() === "" ||
        agentPhone.trim() === "" ||
        agentEmail.trim() === "" ||
        agentRole.trim() === "" ||
        agentStatus.trim() === ""
    )

    {
        alert("please fill in all fields.");
        return;
    }

    if (editingId !== null) {
        const updatedAgents = agents.map((agent) => 
        agent.id === editingId
        ? {
            ...agent,
            name: agentName,
            phone: agentPhone,
            email: agentEmail,
            role: agentRole,
            status: agentStatus,
        }
            :agent
        );

        setAgents(updatedAgents);
        setEditingId(null);
    } else {

        const newAgent = {
            id: Date.now(),
            name: agentName,
            phone: agentPhone,
            email: agentEmail,
            role: agentRole,
            status: agentStatus,
        };

        setAgents([...agents, newAgent])
    }

    setAgentName("");
    setAgentPhone("");
    setAgentEmail("");
    setAgentRole("");
    setAgentStatus("");
}

function deleteAgent(id) {
    const updatedAgents =
        agents.filter(
            (agent) => agent.id !==  id
        );

        setAgents(updatedAgents);
}

function editAgent(agent) {
    setEditingId(agent.id);
    setAgentName(agent.name);
    setAgentPhone(agent.phone);
    setAgentEmail(agent.email);
    setAgentRole(agent.role);
    setAgentStatus(agent.status);
}

return(
    <div>
        <h1 className="page-title">
            Agents
        </h1>

        <button onClick={addAgent}
        className="agent-button"
        >
            {editingId !== null
                ? "Update Agent"
            : "+ Add Agent"}
        </button>
        
        <AgentForm
            agentName={agentName}
            setagentName={setAgentName}
            agentPhone={agentPhone}
            setAgentPhone={setAgentPhone}
            agentEmail={agentEmail}
            setAgentEmail={setAgentEmail}
        />

        <input
                className="search-agent"
                type="text"
                placeholder="Search agents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <AgentTable
            agents={filteredAgents}
            editAgent={editAgent}
            deleteAgent={deleteAgent}
            />

    </div>
)

}

export default Agents;