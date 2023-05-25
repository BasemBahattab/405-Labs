import {Link, Outlet} from "react-router-dom";
import '../App.css';

export default function Header() {
    return (
        <div className="App">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About us</Link>
                </li>                
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </div>
    )
}