function TaskRow({
    task,
    deleteTask,
    editTask,
    agents,
    clients,
    leads,
}) {
    const agent = agents.find(
        (agent) => agent.id === task.agentId
    );

    const client = clients.find(
        (client) => client.id === task.clientId
    );

    const lead = leads.find(
        (lead) => lead.id === task.leadId
    );

    return (
        <tr>
            <td className="table-cell">
                {task.title}
            </td>

            <td className="table-cell">
                {task.description}
            </td>

            <td className="table-cell">
                {agent ? agent.name : "No Agent"}
            </td>

            <td className="table-cell">
                {client ? client.name : "No Client"}
            </td>

            <td className="table-cell">
                {lead ? lead.name : "No Lead"}
            </td>

            <td className="table-cell">
                {task.dueDate}
            </td>

            <td className="table-cell">
                {task.priority}
            </td>

            <td className="table-cell">
                {task.status}
            </td>

            <td className="table-cell">
                <button
                    className="action-button edit-button"
                    onClick={() => editTask(task)}
                >
                    Edit
                </button>

                <button
                    className="action-button delete-button"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default TaskRow;