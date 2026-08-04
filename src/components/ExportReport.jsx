import "../styles/ExportReport.css";

function ExportReport() {

    function exportPDF() {
        alert("PDF export coming soon...");
    }

    function exportExcel() {
        alert("Excel export coming soon...");
    }

    function printReport() {
        window.print();
    }

    return (

        <div className="export-report">

            <h2>Export Reports</h2>

            <div className="export-buttons">

                <button
                    className="export-btn pdf-btn"
                    onClick={exportPDF}
                >
                    Export PDF
                </button>

                <button
                    className="export-btn excel-btn"
                    onClick={exportExcel}
                >
                    Export Excel
                </button>

                <button
                    className="export-btn print-btn"
                    onClick={printReport}
                >
                    Print Report
                </button>

            </div>

        </div>

    );

}

export default ExportReport;
