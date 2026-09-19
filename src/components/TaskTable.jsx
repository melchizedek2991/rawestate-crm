import TaskRow from "./TaskRow";

function TaskTable({
    tasks,
    deleteTask,
    editTask,
    agents,
    clients,
    leads,
}) {
    return (
        <table className="task-table">

            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Agent</th>
                    <th>Client</th>
                    <th>Lead</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {tasks.map((task) => (
                    <TaskRow
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        agents={agents}
                        clients={clients}
                        leads={leads}
                    />
                ))}
            </tbody>

        </table>
    );
}

export default TaskTable;