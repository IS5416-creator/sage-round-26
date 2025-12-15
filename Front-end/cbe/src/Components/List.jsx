export default function List(){
    let cars=['toyota','nissan','porche','nissan']
    return <div>
        <ul style={{color:"red", backgroundColor: "blue"}}>
            {cars.map((car,index)=>{
                return <li key={index}>{car}</li>
            })}
{/* map is a function that is responsible for getting the array items into a list tag */}
        </ul>
    </div>
}