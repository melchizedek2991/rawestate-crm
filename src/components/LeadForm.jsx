import "../styles/LeadForm.css";

function LeadForm({
  leadName,
  setLeadName,
  leadPhone,
  setLeadPhone,
  leadSource,
  setLeadSource,
  leadStatus,
  setLeadStatus
}) {
  return (
    <div className="lead-form">

      <input
        className="lead-input"
        type="text"
        placeholder="Lead Name"
        value={leadName}
        onChange={(e) => setLeadName(e.target.value)}
      />

      <input
        className="lead-input"
        type="text"
        placeholder="Phone Number"
        value={leadPhone}
        onChange={(e) => setLeadPhone(e.target.value)}
      />

      <input
        className="lead-input"
        type="text"
        placeholder="Source"
        value={leadSource}
        onChange={(e) => setLeadSource(e.target.value)}
      />

      <select
        className="lead-select"
        value={leadStatus}
        onChange={(e) => setLeadStatus(e.target.value)}
      >
        <option>New</option>
        <option>Contacted</option>
        <option>Qualified</option>
      </select>

    </div>
  );
}

export default LeadForm;