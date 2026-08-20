function LeadRow({
    lead,
    deleteLead,
    editLead,
    agents,
    properties,
}) {
    const agent = agents.find(
        (agent) => agent.id === lead.agentId
    );

    const property = properties.find(
        (property) => property.id === lead.propertyId
    );

    return (
        <tr>
            <td className="table-cell">
                {lead.name}
            </td>

            <td className="table-cell">
                {lead.phone}
            </td>

            <td className="table-cell">
                {lead.source}
            </td>

            <td className="table-cell">
                <span
                    className={`status-badge status-${lead.status.toLowerCase()}`}
                >
                    {lead.status}
                </span>
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
                    onClick={() => editLead(lead)}
                >
                    Edit
                </button>

                <button
                    className="action-button delete-button"
                    onClick={() => deleteLead(lead.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default LeadRow;