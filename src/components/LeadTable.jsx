import LeadRow from "./LeadRow";
import "../styles/LeadTable.css";

function LeadTable({
  leads,
  deleteLead,
  editLead
}) {
  return (
    <table className="lead-table">
      <thead>
        <tr>
          <th className="table-header">Name</th>
          <th className="table-header">Phone</th>
          <th className="table-header">Source</th>
          <th className="table-header">Status</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => (
          <LeadRow
            key={lead.id}
            lead={lead}
            deleteLead={deleteLead}
            editLead={editLead}
          />
        ))}
      </tbody>
    </table>
  );
}

export default LeadTable;