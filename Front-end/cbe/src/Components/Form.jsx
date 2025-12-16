import { useState, useRef, useEffect } from "react";


export default function Form() {
    const [name, setName] = useState()
    const count = useRef(0)
    useEffect(() => { count.current++ })

    return <>
        <form>
            <h1>number of render: {count.current}</h1>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    // console.log(e.target.value)
                }}
            />
        </form>
        <h1>your name is: {name}</h1>
    </>
}