import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <nav id="nav">
                    <Link to="/Home" className="link">
                        <h1 id="logo">PORTNOTE</h1>
                    </Link>
                <div id="nav-links">
                    <Link to="/home" className="link">Home</Link>
                    <Link to="/addnote" className="link">+ Add Note</Link>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;