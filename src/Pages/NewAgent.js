const NewAgent = () => {
    return (
        <div>
            <SideNav />
            <div className="NewAgent-container">
                <div className="NewAgent-container-top">
                    <h2>User Management</h2>
                </div>
                <table className="creator-table">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default NewAgent;