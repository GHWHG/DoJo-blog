import React from "react"; //importing react is important
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>


                {/* below tags are also fine, but page is not rendered inside react, #
                if we want react to intercept those requests to server and render in react, use above link */}
                {/* <a href="/">Home</a>
                <a href="/create" style={{ 
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</a> */}
                {/* inline styling example */}
                {/* outter bracket represent a dynamic value, inner bracket represent java script object */}
            </div>
        </nav>

    );
}
 
export default Navbar;