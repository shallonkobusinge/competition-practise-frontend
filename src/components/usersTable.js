const usersTable = ({ tableData = [], loading }) => {
    return (
        <>
            <div
                style={{ width: "100%", overflowX: "auto", minHeight: "20rem" }}
                className="sm-transfers-table-container"
            >
                <table className="sm-transfers-table mt-8">
                    <thead>
                        <tr>
                            <th style={{ paddingLeft: "2rem" }} className="center">First Name</th>
                            <th className="center">Last Name</th>
                            <th className="center">Email</th>
                        </tr>
                    </thead>

                    <tbody>

                        {!loading &&
                            tableData.map((tr, index) => (
                                <>
                                    <tr className="space"></tr>
                                    <tr key={index}>
                                        <td className="center">{tr?.fname}</td>
                                        <td className="center">{tr?.lname}</td>
                                        <td className="center">{tr?.email}</td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>

                </table>
                {(loading) && (
                    <p
                        className="mt-6 text-base"
                        style={{
                            color: "#868585",
                        }}
                    >
                        {loading ? "Loading..." : "No results Found"}
                    </p>
                )}
            </div>
        </>
    )

}

export default usersTable;