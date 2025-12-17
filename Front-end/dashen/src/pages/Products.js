import { Link } from "react-router-dom"

export default function Products(){
    return <>
    <h1>Product Page</h1>
    <ul>
        <li><Link>Star Wars</Link></li>
        <li><Link>Lord Of the Rings</Link></li>
        <li><Link>Avengers</Link></li>
    </ul>
    </>
}