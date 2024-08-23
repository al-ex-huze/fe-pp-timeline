import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to="/">
                        <button className="Nav__button">Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <button className="Nav__button">Profile</button>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio">
                        <button className="Nav__button">Portfolio</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
