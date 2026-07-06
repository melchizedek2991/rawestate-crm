import PropertyRow from "./PropertyRow";
import "../styles/PropertyTable.css";

function PropertyTable({
  filteredProperties,
  editProperty,
  deleteProperty,
}) {
  return (
      <table className="property-table">
      <thead>
        <tr>
          <th className="table-header">Property</th>
          <th className="table-header">Price</th>
          <th className="table-header">Status</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>

      <tbody>

        {filteredProperties.map((property) => (
        <PropertyRow
        key={property.id}
        property={property}
        editProperty={editProperty}
        deleteProperty={deleteProperty}
        />
        ))}

      </tbody>
    </table>
  );
}

export default PropertyTable;