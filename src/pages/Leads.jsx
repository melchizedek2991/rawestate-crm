import { useState } from "react";
import LeadForm from "../components/LeadForm";
import LeadTable from "../components/LeadTable";
import "../styles/Leads.css";

function Leads() {
  const [leads, setLeads] = useState([
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

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [leadStatus, setLeadStatus] = useState("New");

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

      function addLead() {

  if (editingId !== null) {

    const updatedLeads = leads.map((lead) =>
      lead.id === editingId
            ? {
                ...lead,
                name: leadName,
                phone: leadPhone,
                source: leadSource,
                status: leadStatus
              }
            : lead
        );

        setLeads(updatedLeads);

        setEditingId(null);

        } else {

          const newLead = {
            id: Date.now(),
            name: leadName,
            phone: leadPhone,
            source: leadSource,
            status: leadStatus
          };

          setLeads([...leads, newLead]);
        }

        setLeadName("");
        setLeadPhone("");
        setLeadSource("");
        setLeadStatus("New");
      }

    function deleteLead(id) {
      const updatedLeads = leads.filter(
        (lead) => lead.id !== id
      );

      setLeads(updatedLeads);
    }

    function editLead(lead) {
      setLeadName(lead.name);
      setLeadPhone(lead.phone);
      setLeadSource(lead.source);
      setLeadStatus(lead.status);

      setEditingId(lead.id);
    }

  return (
    <div className="leads-page">
      <h1 className="page-title">Leads</h1>

      <button
        onClick={addLead}
        className="add-button"
      >
        {editingId !== null ? "Update Lead" : "+ Add Lead"}
      </button>

      {editingId !== null && (
          <button
            onClick={() => {
              setEditingId(null);
              setLeadName("");
              setLeadPhone("");
              setLeadSource("");
              setLeadStatus("New");
            }}
            className="cancel-button"
          >
            Cancel
          </button>
        )}

      <LeadForm
        leadName={leadName}
        setLeadName={setLeadName}
        leadPhone={leadPhone}
        setLeadPhone={setLeadPhone}
        leadSource={leadSource}
        setLeadSource={setLeadSource}
        leadStatus={leadStatus}
        setLeadStatus={setLeadStatus}
      />

      <input
        type="text"
        placeholder="Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <LeadTable
        leads={filteredLeads}
        deleteLead={deleteLead}
        editLead={editLead}
      />

    </div>
  );
}

export default Leads;