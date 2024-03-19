import { Link } from "react-router-dom";

export default function Layout({children}){

    const categories = ["html", "css", "javascript", "react", "sanity"]

    return(
        <>
        <div id="container">
            <nav>
                <ul>
                    {categories.map((category, index) => 
                    <li key={category+index}>
                        <Link to={category}>{category}</Link>
                    </li>
                    )}
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
        </>
    )
}
