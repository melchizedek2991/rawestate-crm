import "../styles/AgentRow.css";

function AgentRow({
    agent,
    deleteAgent,
    editAgent,
    
}) {
    return(
        <tr>
            <td className="table-cell">{agent.name}</td>

            <td className="table-cell">{agent.phone}</td>

            <td className="table-cell">{agent.email}</td>

            <td className="table-cell">{agent.role}</td>

            <td className="table-cell">{agent.status}</td>
            
        <td className="table-cell">
          <button
            className="action-button edit-button"
            onClick={() => editAgent(agent)}
          >
            Edit
          </button>

          <button
            className="action-button delete-button"
            onClick={() => deleteAgent(agent.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
}

export default AgentRow;