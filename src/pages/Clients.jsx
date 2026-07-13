import ClientForm from "../components/ClientForm";
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

      return (

        <ClientForm
        clientName={clientName}
        setClientName={setClientName}
        clientPhone={clientPhone}
        setClientPhone={setClientPhone}
        clientEmail={clientEmail}
        setClientEmail={setClientEmail}
        />
        
    );
}

export default Clients;

