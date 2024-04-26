import { Link } from "react-router-dom";
import './index.scss';

const Backtohome = () => {
    return (
       <div className="backHome">
            <Link to="/">Back Home</Link>
            <hr />
       </div>
    )
}

export default Backtohome