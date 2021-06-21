import { Link } from 'react-router-dom'; // for React Router

function Navbar() {
    return ( 
        <nav className="navbar">
            <h1>The Mojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className="button-style1">New Blog</Link>
            </div>
        </nav>
    );
}

 export default Navbar;