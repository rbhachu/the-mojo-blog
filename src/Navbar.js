import { Link } from 'react-router-dom'; // for React Router

// normal function
function Navbar1() {
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

/*
// arrow function
const Navbar2 = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog2</h1>
            <div className="links">
                <a href="/">Home</a><br />
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
*/

 export default Navbar1;
// export { Navbar1, Navbar2 };

/*
export { Navbar1 };
export { Navbar2 };
*/

