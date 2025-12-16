export default function List(props){
    let cars=['toyota','nissan','porsche','nissan']
    return <div>
        <ul style={{color:"red", backgroundColor: "blue"}}>
            {cars.map((car,index)=>{
                return <li key={index}>{car}</li>
            })}
{/* map is a function that is responsible for getting the array items into a list tag */}
        </ul>
        <button onClick={() => { props.setCount1(props.count1 + 1); }}>add one frpm list comp</button>
    </div>
}