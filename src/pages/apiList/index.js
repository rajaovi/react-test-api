import { Link } from "react-router-dom";
import './apiList.scss'

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
          <li>
            <Link to="/user-char">User Character</Link>
          </li>
          <li>
            <Link to="/photo-list">Photo list</Link>
          </li>
          <li>
            <Link to="/table-sort">Table Sort</Link>
          </li>
        </ul>
      </div>
    );
}

export default Apilist