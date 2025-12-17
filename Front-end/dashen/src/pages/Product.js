import { useParams } from "react-router-dom";

export default function Product(){
const {item} = useParams()
return <h1>Buy {item}</h1>
}