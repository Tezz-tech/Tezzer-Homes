import SideNav from "./SideNav";

const CreateAgentUser = () => {
    return (
        <div>
            <SideNav />
            <div className="AgentUser-dashboard-container">
                <h1>Add New User/Property Agent</h1>
                <p>Enter User(Agent) Information below. The Agents you add can log into your administration panel with the password and username you specify</p>
                <form className="agent-user-form">
                    <div className="agent-user-form-inputs">
                        <label for="Name">Name:</label>
                        <input type="text" placeholder="Enter Name" />
                    </div>

                    <div className="agent-user-form-inputs">
                        <label for="Title">Title:</label>
                        <select name="Title" id="Title">
                            <option value=""></option>
                            <option value="User">User</option>
                            <option value="Agent">Agent</option>
                        </select>
                    </div>

                    <div className="agent-user-form-inputs">
                        <label for="Password">Password:</label>
                        <input type="password" placeholder="Enter Password" />
                    </div>

                    <div className="agent-user-form-inputs">
                        <label for="Email">Email:</label>
                        <input type="email" placeholder="Enter Email" />
                    </div>

                    <div className="agent-user-form-inputs">
                        <label for="Photo">Agent Photo:</label>
                        <input type="file" />
                    </div>

                    <div className="agent-user-form-inputs">
                        <label for="Username">Username:</label>
                        <input type="text" placeholder="Enter Username" />
                    </div>

                    <div className="agent-user-form-inputs">
                        <label for="Phone">Phone:</label>
                        <input type="tel" placeholder="Enter Phone" />
                    </div>
                
                <button>Create</button>
                </form>
            </div>
        </div>
    )
}
export default CreateAgentUser;