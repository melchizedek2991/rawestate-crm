import "../styles/ClientRow.css";

function ClientRow({
    client,
    deleteClient,
    editClient,
    agents,
    properties,
}) {
    const agent = agents.find(
        (agent) => agent.id === client.agentId
    );

       const property = properties.find(
        (property) => property.id === client.propertyId
    );

    return (
        <tr>
            <td className="table-cell">
                {client.name}
            </td>

            <td className="table-cell">
                {client.phone}
            </td>

            <td className="table-cell">
                {client.email}
            </td>

            <td className="table-cell">
                {agent ? agent.name : "No Agent"}
            </td>

             <td className="table-cell">
                {property ? property.name : "No Property"}
            </td>

            <td className="table-cell">
                <button
                    className="action-button edit-button"
                    onClick={() => editClient(client)}
                >
                    Edit
                </button>

                <button
                    className="action-button delete-button"
                    onClick={() => deleteClient(client.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ClientRow;