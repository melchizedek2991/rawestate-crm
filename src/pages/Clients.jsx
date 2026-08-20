import ClientForm from "../components/ClientForm";
import ClientTable from "../components/ClientTable";
import "../styles/Clients.css";
import { useState, useEffect } from "react";

function Clients() {

        const [clients, setClients] = useState(() => {

        const savedClients = localStorage.getItem("clients");

        if (savedClients) {
            return JSON.parse(savedClients);
        }

        return [
            // KEEP YOUR EXISTING CLIENT DATA HERE
            {
            id: 1,
            name: "Mike Tyson",
            phone: "08174648393",
            email: "miketyson@gmail.com",
            agentId: 1,
            },

            {
                id: 2,
                name: "Tyler Perry",
                phone: "0907484746",
                email: "tyler@gmail.com",
                agentId: 2,
            },

            {
                id: 3,
                name: "Arome Chike",
                phone: "08155985598",
                email: "aromechike@gmail.com",
                agentId: 1,
            },
        ];

    });

        const [clientName, setClientName] = useState("");
        const [clientPhone, setClientPhone] = useState("");
        const [clientEmail, setClientEmail] = useState("");
        const [agentId, setAgentId] = useState("");
        const [propertyId, setPropertyId] = useState("");

        const [agents] = useState(() => {

        const savedAgents = localStorage.getItem("agents");

            if (savedAgents) {
                return JSON.parse(savedAgents);
            }

            return []; 
        });


        const [properties] = useState(() => {

        const savedProperties = localStorage.getItem("properties");

        if (savedProperties) {
                return JSON.parse(savedProperties);
            }

            return [];
        });

        const [search, setSearch] = useState("");
        const [editingId, setEditingId] = useState(null);

        useEffect(() => {

        localStorage.setItem(
            "clients",
            JSON.stringify(clients)
            );

        }, [clients]);

        const filteredClients = clients.filter((client) => 
        client.name.toLowerCase().includes(search.toLowerCase())
    );


function addClient() {
    if (
        clientName.trim() === "" ||
        clientPhone.trim() === "" ||
        clientEmail.trim() === ""
    ) {
        alert("please fill in all fields.");
        return;
    }

    if (editingId !== null) {

        const updatedClients = clients.map((client) =>
            client.id === editingId
                ? {
                    ...client,
                    name: clientName,
                    phone: clientPhone,
                    email: clientEmail,
                    agentId: Number(agentId),
                    propertyId: Number(propertyId),
                }
                : client
        );

        setClients(updatedClients);
        setEditingId(null);

    } else {

        const newClient = {
            id: Date.now(),
            name: clientName,
            phone: clientPhone,
            email: clientEmail,
            agentId: Number(agentId),
            propertyId: Number(propertyId),
        };

        setClients([...clients, newClient]);
            }

            setClientName("");
            setClientPhone("");
            setClientEmail("");
            setAgentId("");
            setPropertyId("");
        }

    function deleteClient(id) {
    const updatedClients =
        clients.filter(
            (client) => client.id !== id
        );

        setClients(updatedClients);
    }

    function editClient(client) {
    setClientName(client.name);
    setClientPhone(client.phone);
    setClientEmail(client.email);
    setAgentId(client.agentId);
    setPropertyId(client.propertyId);

    setEditingId(client.id);
    }

      return (

        <div>
            <h1 className="page-title">
                Clients
            </h1>

            <button
            onClick={addClient}
            className="client-button"
            >
            {editingId !== null
                ? "Update Client"
                : "+ Add Client"}
            </button>
            
            <ClientForm
            clientName={clientName}
            setClientName={setClientName}
            clientPhone={clientPhone}
            setClientPhone={setClientPhone}
            clientEmail={clientEmail}
            setClientEmail={setClientEmail}
            agents={agents}
            agentId={agentId}
            setAgentId={setAgentId}
            properties={properties}
            propertyId={propertyId}
            setPropertyId={setPropertyId}
            />

            <input
                className="search-client"
                type="text"
                placeholder="Search clients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ClientTable
            clients={filteredClients}
            editClient={editClient}
            deleteClient={deleteClient}
            agents={agents}
            properties={properties}
            />
            
        </div>
        
        
    );

    
}

export default Clients;

