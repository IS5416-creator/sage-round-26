document.getElementById('demo').innerText = "hi from java";
document.getElementById('demo').innerHTML = "<h1>hi there<h1>";


function sumTwoNumbers(a, b) {
    console.log(a + b)
}
function aveTwoNumbers(a, b) {
    console.log((a, b) / 2)
}
sumTwoNumbers(85, 47)
// const x=54;
// var y;
aveTwoNumbers(45, 79)

// y=634;

// console.log(x+y);

// document.getElementById('demo').innerText= x+y;
var person = {
    firstName: "Israel",
    lastName: "Alazar",
    age: 18,
    gender: "M",
    adress: {
        country: "Ethiopia",
        city: "A.A",
        subCity: "LemiKura",
        woreda: 13,
    }
}
// "person" is object so is "adress". to make an object inside another object we use "object:" instead of "object=" 

console.log(person)
console.log(person.adress)
console.log(person.adress.city)
console.log(person.firstName)

function changeColor() {
    document.getElementById('demo').style.color = "red";
}

var names = '  israel '
console.log(names.trim())
console.log(names.length)
console.log(names.slice(2, 4))
console.log(names.toLocaleUpperCase())
console.log(names.at(5))
console.log(names.concat("alazar"))

// array

let arr = ["israel", "natnael", "eyob", "yonatan", 5416]
arr.push("dagi")
arr.pop()
arr.pop()
console.log(arr)

let date = new Date();
let date2 = new Date("2007-03-21");

console.log(date)
console.log(date2)

console.log(Math.pow(5, 9))
console.log(Math.SQRT2)

console.log(25e-5)

let num = 10 < 5 ? 100 : 50
console.log(num)

let age = 21
console.log(age ?? "age not found")

if (age >= 19) {
    console.log("adult")
} else if (age <= 18 && age >= 13) {
    console.log("teen")
} else {
    console.log("child")

}

let numbers = [10, 20, 45, 468, 12, 39, 74, 45, 15]

for (let number of numbers) {
    console.log("number: ", number)
}

for (let key in person) {
    console.log(key, person[key])
}
let day = 1
switch (day) {
    case 1:
        console.log("mon")
        break;
    case 2:
        console.log("tue")
        break;
    case 3:
        console.log("wed")
        break;
    case 4:
        console.log("thur")
        break;
    case 5:
        console.log("fri")
        break;
    case 6:
        console.log("sat")
        break;
    case 7:
        console.log("sun")
        break;
    default:
        console.log("day is not found")
}
let i = 0

for (j = 0; j < 5; j++) {
    console.log(j)
}
while (i <= 5) {
    console.log(i)
    i++
}

const students = [
    { id: 1, name: "israel", gender: "M", score: [95, 96, 98] },
    { id: 2, name: "mesay", gender: "M", score: [95, 96, 98] },
    { id: 3, name: "tselote", gender: "M", score: [95, 96, 98] },
    { id: 4, name: "lidya", gender: "F", score: [95, 96, 98] },
    { id: 5, name: "atsede", gender: "F", score: [95, 96, 98] },
    { id: 6, name: "elshaday", gender: "M", score: [95, 96, 98] }
]
console.log(students[5].score[2])
console.log(students[0].name)
console.log(students[5].score[2], students[5].name)


students.forEach(function (student) {
    console.log(student.name)
    student.score.forEach(function (sc) {
        console.log(sc)
        //    same for the code above
        // student.score.forEach((sc)=>{
        // console.log(sc)

    })
})

const h2 = document.querySelector(".first-h2")
h2.style.color = 'red';
h2.className = "test"

const newDiv = document.createElement('div');
newDiv.innerText = 'this is new div';
document.body.appendChild(newDiv)

// newDiv.remove() ----> to remove the div

document.getElementById('btn').addEventListener('click', (e) => {
    h2.style.color = 'blue'
})
// the button with the id "btn" turns to blue when the button is clicked
// and 'e' is for event


$('#box').css('width', '200px')
    .css('height', '200px')
    .css("background-color", "yellow");