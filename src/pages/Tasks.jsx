import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";

function Tasks() {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const [agentId, setAgentId] = useState("");
    const [clientId, setClientId] = useState("");
    const [leadId, setLeadId] = useState("");

    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [status, setStatus] = useState("Pending");

    const [agents] = useState(() => {

    const savedAgents = localStorage.getItem("agents");

        if (savedAgents) {
            return JSON.parse(savedAgents);
        }

        return [];

    });

    const [clients] = useState(() => {

        const savedClients = localStorage.getItem("clients");

        if (savedClients) {
            return JSON.parse(savedClients);
        }

        return [];

    });

    const [leads] = useState(() => {

        const savedLeads = localStorage.getItem("leads");

        if (savedLeads) {
            return JSON.parse(savedLeads);
        }

        return [];

    });

    const [tasks, setTasks] = useState(() => {

        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            return JSON.parse(savedTasks);
        }

        return [
            {
                id: 1,
                title: "Follow up with client",
                description: "Call client about available properties",
                agentId: 1,
                clientId: 1,
                leadId: 1,
                dueDate: "2026-08-25",
                priority: "High",
                status: "Pending"
            },

            {
                id: 2,
                title: "Schedule property inspection",
                description: "Arrange inspection with client",
                agentId: 2,
                clientId: 2,
                leadId: 2,
                dueDate: "2026-08-27",
                priority: "Medium",
                status: "In Progress"
            }
        ];

    });

    useEffect(() => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);


const [editingId, setEditingId] = useState(null);
   function addTask() {

    if (
        taskTitle.trim() === "" ||
        taskDescription.trim() === "" ||
        dueDate === ""
    ) {
        alert("Please fill in all required fields.");
        return;
    }

    if (editingId !== null) {

        const updatedTasks = tasks.map((task) =>
            task.id === editingId
                ? {
                    ...task,
                    title: taskTitle,
                    description: taskDescription,
                    agentId: Number(agentId),
                    clientId: Number(clientId),
                    leadId: Number(leadId),
                    dueDate: dueDate,
                    priority: priority,
                    status: status
                }
                : task
        );

        setTasks(updatedTasks);
        setEditingId(null);

    } else {

        const newTask = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
            agentId: Number(agentId),
            clientId: Number(clientId),
            leadId: Number(leadId),
            dueDate: dueDate,
            priority: priority,
            status: status,
            createdAt: new Date().toISOString()
        };

        setTasks([...tasks, newTask]);
    }

        setTaskTitle("");
        setTaskDescription("");
        setAgentId("");
        setClientId("");
        setLeadId("");
        setDueDate("");
        setPriority("Medium");
        setStatus("Pending");
    }

    function deleteTask(id) {
    const updatedTasks = tasks.filter(
        (task) => task.id !== id
    );

    setTasks(updatedTasks);
}

function editTask(task) {
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setAgentId(task.agentId);
    setClientId(task.clientId);
    setLeadId(task.leadId);
    setDueDate(task.dueDate);
    setPriority(task.priority);
    setStatus(task.status);

    setEditingId(task.id);
}
   return (
    <div>

        <h1 className="page-title">
            Tasks
        </h1>

        <button
            onClick={addTask}
            className="task-button"
        >
            {editingId !== null
                ? "Update Task"
                : "+ Add Task"}
        </button>

        <TaskForm
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            taskDescription={taskDescription}
            setTaskDescription={setTaskDescription}
            agentId={agentId}
            setAgentId={setAgentId}
            clientId={clientId}
            setClientId={setClientId}
            leadId={leadId}
            setLeadId={setLeadId}
            dueDate={dueDate}
            setDueDate={setDueDate}
            priority={priority}
            setPriority={setPriority}
            status={status}
            setStatus={setStatus}
            agents={agents}
            clients={clients}
            leads={leads}
         />

        <TaskTable
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            agents={agents}
            clients={clients}
            leads={leads}
        />

        </div>
    );
}

export default Tasks;