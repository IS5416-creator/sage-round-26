
export default function Card (props){
    return <div style={{'width':'300px', 'padding':'10px', 'background-color':'#ede6d1'}}>
        <img width={300}  src={props.img}/>
        <h1>{props.title}</h1>
        <p style={{'textAlign':'justify'}}>{props.descriptions}</p>
        <a href="#">read more</a>
    </div>
}