import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(){   
    
    const [active, setActiveClass] = useState()
    const categories = ["html", "css", "javascript", "react", "sanity"]

    return(
        <nav>
        <ul>
            {categories.map((category, index) => 
            <li key={category+index}
                onClick={() => setActiveClass(category)} 
                className={active === category ? "active" : null}>
            <Link to={category}>{category}</Link>
            </li>
            )}
        </ul>
    </nav>
    )
}