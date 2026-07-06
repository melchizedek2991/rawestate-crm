function PropertyRow({
  property,
  editProperty,
  deleteProperty,
}) 

{
  return (
    <tr>
      <td className="table-cell">{property.name}</td>
     
      <td className="table-cell">{property.price}</td>

      <td className="table-cell">
        <span
          style={{
            padding: "6px 12px",
            borderRadius: "999px",
            color: "#fff",
            backgroundColor:
              property.status === "Available"
                ? "#10b981"
                : property.status === "Pending"
                ? "#f59e0b"
                : "#ef4444",
            fontSize: "13px",
            fontWeight: "600"
          }}
        >
          {property.status}
        </span>
      </td>

      <td className="table-cell">
        <button
          onClick={() => editProperty(property)}
          style={{
            backgroundColor: "#3b82f6",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            marginRight: "8px"
          }}
        >
          Edit
        </button>

        <button
          onClick={() => deleteProperty(property.id)}
          style={{
            backgroundColor: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default PropertyRow;