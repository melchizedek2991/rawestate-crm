import "../styles/ClientForm.css";

function ClientForm({
    clientName,
    setClientName,
    clientPhone,
    setClientPhone,
    clientEmail,
    setClientEmail,
})  {
    return(
        <div className="client-form">
            <input
            className="client-input"
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            />
            
            <input
            className="client-input"
            type="text"
            placeholder="Phone Number"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            />

            <input
            className="client-input"
            type="text"
            placeholder="Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            />

        </div>
        
    )
}

export default ClientForm;