


export default function Skills(){
    const skills=[
        "C++",
        "Figma",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
    ]
    return<>
    <h2>Skills</h2>
        {(skills.map)=>}
    <ul>
        <li>{skill}</li>
    </ul>
    </>
}