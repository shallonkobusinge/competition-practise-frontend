const ReportTable = ({ reports, activeTab, changeActiveTab }) => {
    return (
        <>
            <div>
                <table className="sm-transfers-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Email</th>
                            <th>NationalId</th>
                            <th>Gender</th>

                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default ReportTable