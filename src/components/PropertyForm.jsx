import "../styles/PropertyForm.css";

function PropertyForm({
  propertyName,
  setPropertyName,
  propertyPrice,
  setPropertyPrice,
  propertyStatus,
  setPropertyStatus
}) {
  return (
        <div className="property-form">
            <input
                type="text"
                className="property-input"
                placeholder="Property Name"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
            />

            <input
                type="text"
                className="property-input"
                placeholder="Price"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
            />

            <select
                className="property-select"
                value={propertyStatus}
                onChange={(e) => setPropertyStatus(e.target.value)}
            >
                <option>Available</option>
                <option>Pending</option>
                <option>Sold</option>
            </select>
        </div>
  );
}

export default PropertyForm;