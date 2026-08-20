import { useState, useEffect } from "react";
import LeadForm from "../components/LeadForm";
import LeadTable from "../components/LeadTable";
import "../styles/Leads.css";

function Leads() {
  const [leads, setLeads] = useState(() => {

      const savedleads = localStorage.getItem("leads");

          if (savedleads) {
              return JSON.parse(savedleads);
          }

          return [
              // LEAD DATA HERE
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
              ];

           });

  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [leadStatus, setLeadStatus] = useState("New");

  const [agentId, setAgentId] = useState("");
  const [propertyId, setPropertyId] = useState("");

   const [agents] = useState(() => {
   const savedAgents = localStorage.getItem("agents");

        if (savedAgents) {
            return JSON.parse(savedAgents);
        }

        return [];
        });

    const [properties] = useState(() => {
    const savedProperties = localStorage.getItem("properties");

        if (savedProperties) {
            return JSON.parse(savedProperties);
        }

        return [];
        });

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {

    localStorage.setItem(
        "leads",
        JSON.stringify(leads)
        );

    }, [leads]);

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

function addLead() {

    if (
        leadName.trim() === "" ||
        leadPhone.trim() === "" ||
        leadSource.trim() === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    if (editingId !== null) {

        const updatedLeads = leads.map((lead) =>
            lead.id === editingId
                ? {
                    ...lead,
                    name: leadName,
                    phone: leadPhone,
                    source: leadSource,
                    status: leadStatus,
                    agentId: Number(agentId),
                    propertyId: Number(propertyId)
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
            status: leadStatus,
            agentId: Number(agentId),
            propertyId: Number(propertyId)
        };

        setLeads([...leads, newLead]);
        }

        setLeadName("");
        setLeadPhone("");
        setLeadSource("");
        setLeadStatus("New");
        setAgentId("");
        setPropertyId("");
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
      setAgentId(lead.agentId);
      setPropertyId(lead.propertyId);

      setEditingId(lead.id);
    }

return (
    <div>

        <h1 className="page-title">
            Leads
        </h1>

        <button
            onClick={addLead}
            className="add-button"
        >
            {editingId !== null
                ? "Update Lead"
                : "+ Add Lead"}
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
            agents={agents}
            agentId={agentId}
            setAgentId={setAgentId}
            properties={properties}
            propertyId={propertyId}
            setPropertyId={setPropertyId}
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
            agents={agents}
            properties={properties}
        />

    </div>
);

}

export default Leads;