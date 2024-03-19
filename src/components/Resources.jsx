import { resources } from '../assets/ressurser'
import { Link } from "react-router-dom";

export default function Resources({page}){

    const categoryTitles = resources.filter(resource => resource.category === page)

    return (
        <>
        <h1>{page}</h1>
        {categoryTitles.map((item, i) => (
        <li key={item+i}>
            <Link to= {item.url}>{item.title}</Link>
        </li>
        ))}
        </>
    )

}