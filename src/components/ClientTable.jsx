 import ClientRow from "./ClientRow";
import "../styles/ClientTable.css";

function ClientTable({
    clients,
    deleteClient,
    editClient,
}) {
    return (
        <table className="client-table">
            <thead>
                <tr>
                    <th className="client-header">Name</th>
                    <th className="client-header">Phone Number</th>
                    <th className="client-header">Email</th>
                    <th className="client-header">Actions</th>
                </tr>
            </thead>

            <tbody>
                {clients.map((client) =>(
                    <ClientRow
                    key={client.id}
                    client={client}
                    editClient={editClient}
                    deleteClient={deleteClient}
                />
                ))}
            </tbody>

        </table>
    )
}

export default ClientTable;