import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function LayOut(){
    return <>
    <ul style={{display:"flex", listStyleType:"none"}}>
        <li style={{padding:"10px"}}><Link to="/">Home Page</Link></li>
        <li style={{padding:"10px"}}><Link to="/About">About Page</Link></li>
        <li style={{padding:"10px"}}><Link to="/products">Products Page</Link></li>
    </ul>
    <Outlet/>
    <h2>this is footer</h2>
    </>
}