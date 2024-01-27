import SideNav from "./SideNav";
import home from "../IMG/home.png";
import { Link } from "react-router-dom";
import { MdAddHome, MdHome } from "react-icons/md";
const CreatorProperty = () => {
    return (
        <>
            <SideNav />
            <div className="CreatorProperty-container">
                <div className="CreatorProperty-container-top">
                    <h2>Listed Properties</h2>
                    <Link to= "/CreateProperty">
                        <MdAddHome className="add-home" />
                    </Link>
                </div>
                <table className="creator-table">
                    <thead>
                        <tr>
                            <th>Property Type</th>
                            <th>Property Name</th>
                            <th>Property Status</th>
                            <th>Property Address</th>
                            <th>Property Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Link to="/PropertyDetails">
                                <td><img src={home} alt="img" /></td>
                            </Link>
                            <td>Rent</td>
                            <td>Available</td>
                            <td>No 19 zungeru Road </td>
                            <td>$2,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default CreatorProperty;