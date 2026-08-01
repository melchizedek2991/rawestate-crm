import "../styles/ReportCard.css";


function ReportCard({

    title,
    value,

}) {

    return(

        <div className="report-card">

            <p className="report-value">{value}</p>

            <h3 className="report-title">{title}</h3>

        </div>

    );

}


export default ReportCard;