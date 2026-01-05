import { NavLink } from "react-router-dom";

function Navbar() {

    /* Array di oggetti per generare dinamicamente i link della Navbar */

    const links = [
        { path: "/home", label: "Home" }, 
        { path: "/series", label: "Serie" },
        { path: "films", label: "Film" },
        { path: "/news-populars", label: "Nuovi e Popolari" },
        { path: "/my-list", label: "La mia lista" }
    ]
        
    
    return (      

        <nav>
            <ul className="flex-row gap-20">
            {links.map( link => (
                <li key={link.path}> 
                    <NavLink to={link.path}>
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </ul>
        </nav>
    )
}

export default Navbar;
