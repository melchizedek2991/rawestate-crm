import ClientForm from "../components/ClientForm";
import ClientTable from "../components/ClientTable";
import "../styles/Clients.css";
import { useState } from "react";

function Clients() {
    const [clients, setClients] = useState([
        {
            id: 1,
            name: "Mike Tyson",
            phone: "08174648393",
            email: "miketyson@gmail.com",
        },

        {
            id: 2,
            name: "Tyler Perry",
            phone: "0907484746",
            email: "tyler@gmail.com",
        },

        {
            id: 3,
            name: "Arome Chike",
            phone: "08155985598",
            email: "aromechike@gmail.com"
        },
    ]);

        const [clientName, setClientName] = useState("");
        const [clientPhone, setClientPhone] = useState("");
        const [clientEmail, setClientEmail] = useState("");

        const [search, setSearch] = useState("");
        const [editingId, setEditingId] = useState(null);

        const filteredClients = clients.filter((client) => 
        client.name.toLowerCase().includes(search.toLowerCase())
    );

function addClient() {
    if(
        clientName.trim() === "" ||   
        clientPhone.trim() === "" ||
        clientEmail.trim() === "" 
    ) 
    
    {
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
                email: clientEmail 
            }

            :client
        );

        setClients(updatedClients);
        setEditingId(null);
        
        } else {
            
        const newClient = {
            id: Date.now(),
            name: clientName,
            phone: clientPhone,
            email: clientEmail,
        };

        setClients([...clients, newClient]);
    }


    setClientName("");
    setClientPhone("");
    setClientEmail("");
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
            />
            
        </div>
        
        
    );

    
}

export default Clients;

