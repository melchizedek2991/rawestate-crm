import "../styles/RecentTransactions.css";

function RecentTransactions() {
  
    const transactions = [

        {
            id:1,
            client:"John Doe",
            property:"Luxury Duplex",
            amount:"₦45,000,000",
            status:"Completed",
        },

        {
            id:2,
            client:"Mary Johnson",
            property:"3 Bedroom Flat",
            amount:"₦18,000,000",
            status:"Pending",
        },

        {
            id:3,
            client:"David Smith",
            property:"Commercial Land",
            amount:"₦9,500,000",
            status:"Completed",
        },

        {
            id:4,
            client:"Sarah Williams",
            property:"Bungalow",
            amount:"₦27,000,000",
            status:"Completed",
        },

    ];

    return (

        <div className="transactions">

            <h2>Recent Transactions</h2>

            <table>

                <thead>

                    <tr>

                        <th>Client</th>
                        <th>Property</th>
                        <th>Amount</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {transactions.map((transaction)=>(

                        <tr key={transaction.id}>

                            <td>{transaction.client}</td>
                            <td>{transaction.property}</td>
                            <td>{transaction.amount}</td>
			                
                            <td>

                               <span
                                   className={
                                   transaction.status === "Completed"
                                   ? "status completed"
                                   : "status pending"
                                   }
                                >

                                    {transaction.status}

                                 </span>

                             </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecentTransactions;
