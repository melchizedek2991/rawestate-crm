import "../styles/ClientRow.css";

function ClientRow({
  client,
  deleteClient,
  editClient
}) {
    return(
    <tr>
      <td className="table-cell">{client.name}</td>

      <td className="table-cell">{client.phone}</td>

      <td className="table-cell">{client.email}</td>
      
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
