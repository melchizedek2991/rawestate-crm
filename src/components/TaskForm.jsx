function TaskForm({
    taskTitle,
    setTaskTitle,
    taskDescription,
    setTaskDescription,
    agentId,
    setAgentId,
    clientId,
    setClientId,
    leadId,
    setLeadId,
    dueDate,
    setDueDate,
    priority,
    setPriority,
    status,
    setStatus,
    agents,
    clients,
    leads,
}) {
    return (
        <div className="task-form">

            <input
                className="task-input"
                type="text"
                placeholder="Task Title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />

            <textarea
                className="task-input"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) =>
                    setTaskDescription(e.target.value)
                }
            />

            <select
                className="task-input"
                value={agentId}
                onChange={(e) =>
                    setAgentId(Number(e.target.value))
                }
            >
                <option value="">Select Agent</option>

                {agents.map((agent) => (
                    <option
                        key={agent.id}
                        value={agent.id}
                    >
                        {agent.name}
                    </option>
                ))}
            </select>

            <select
                className="task-input"
                value={clientId}
                onChange={(e) =>
                    setClientId(Number(e.target.value))
                }
            >
                <option value="">Select Client</option>

                {clients.map((client) => (
                    <option
                        key={client.id}
                        value={client.id}
                    >
                        {client.name}
                    </option>
                ))}
            </select>

            <select
                className="task-input"
                value={leadId}
                onChange={(e) =>
                    setLeadId(Number(e.target.value))
                }
            >
                <option value="">Select Lead</option>

                {leads.map((lead) => (
                    <option
                        key={lead.id}
                        value={lead.id}
                    >
                        {lead.name}
                    </option>
                ))}
            </select>

            <input
                className="task-input"
                type="date"
                value={dueDate}
                onChange={(e) =>
                    setDueDate(e.target.value)
                }
            />

            <select
                className="task-input"
                value={priority}
                onChange={(e) =>
                    setPriority(e.target.value)
                }
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <select
                className="task-input"
                value={status}
                onChange={(e) =>
                    setStatus(e.target.value)
                }
            >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>

        </div>
    );
}

export default TaskForm;