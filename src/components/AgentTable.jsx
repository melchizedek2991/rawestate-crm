import AgentRow from "./AgentRow";
import "../styles/AgentTable.css";

function AgentTable({
    agents,
    editAgent,
    deleteAgent,
}) {
    return(
        <table className="agent-table">
            <thead>
                <tr>
                    <th className="table-header">Name</th>
                    <th className="table-header">Phone</th>
                    <th className="table-header">Email</th>
                    <th className="table-header">Role</th>
                    <th className="table-header">Source</th>
                    <th className="table-header">Status</th>
                    <th className="table-header">Actions</th>
                </tr>
            </thead>

            <tbody>
                {agents.map((agent) => (
                <AgentRow
                    key={agent.id}
                    agent={agent}
                    deleteAgent={deleteAgent}
                    editAgent={editAgent}
                />
                ))}
            </tbody>
        </table>
    );
}

export default AgentTable;