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

let num=10<5 ? 100:50
console.log(num)

let age = 21
console.log(age??"age not found")

if (age>=19){
 console.log("adult")
} else if (age<=18 && age >=13) {
console.log("teen")
} else {
    console.log("child")

}