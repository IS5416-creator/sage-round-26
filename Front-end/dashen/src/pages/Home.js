import { Link } from "react-router-dom"

export default function Home() {
    return <div>
        <h1>HOME page</h1>
        <Link to='/About'>About page</Link>
    </div>
}