import { Link } from "react-router-dom"

const Apilist = () => {
    return (
        <div className="apiList">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/comment-email">Comment Email</Link>
                </li>
            </ul>
        </div>
    )
}

export default Apilist