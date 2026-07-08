import { useState } from "react";
import "../styles/Leads.css";

function Leads() {
  const [leads] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "08012345678",
      source: "Facebook",
      status: "New"
    },
    {
      id: 2,
      name: "Mary James",
      phone: "08134567890",
      source: "Website",
      status: "Contacted"
    },
    {
      id: 3,
      name: "Peter Obi",
      phone: "09098765432",
      source: "Referral",
      status: "Qualified"
    }
  ]);

  return (
    <div className="leads-page">
      <h1 className="page-title">Leads</h1>

      <table className="leads-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.phone}</td>
              <td>{lead.source}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leads;