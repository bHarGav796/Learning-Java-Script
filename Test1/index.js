/*
console.log("I like pizza")
console.log("Its really good")

window.alert("I really love pizza")
*/

////////////////////////////////////////////////////////////////////////

/*
VARIABLE

-It is a container for storing data 
-Two Steps: 1. Description (var,let,const) 2. Assignment (* assignment operator)

let age = 21 //number
let firstName = "Bro" //string
let student = true //boolean

age +=1 //assignment
firstName += " Code" //concatenate 2 strings

console.log("Hello",firstName)
console.log("You are",age,"years old")
console.log("Enrolled",student)

document.getElementById("p1").innerHTML = "Hello " + firstName
document.getElementById("p2").innerHTML = "You are aged "+ age +" years old"
document.getElementById("p3").innerHTML = "Enrolled " + student
*/

////////////////////////////////////////////////////////////////////////

/*
ARITHMETIC EXPRESSION

-y = x + 5
-Operators are : (+ -  * / %)
-Have Operators Precidence
*/

////////////////////////////////////////////////////////////////////////


/* HOW TO ACCEPT USER INPUTS

-Easy Way
let userName = window.prompt("Whats your name?")
console.log(userName)

-Difficult way
let userName
document.getElementById("myButton").onclick = function(){
userName = document.getElementById("myText").value
console.log(userName)
document.getElementById("myLabel").innerHTML = "Hello" + userName
}

*/

////////////////////////////////////////////////////////////////////////

/*
TYPECONVERSION 

-Ablity  to change the datatype of a value to another
-(strings, numbers, booleans)

let age = window.prompt("How old are you?") //It takes only strings

console.log(typeof(age))
age = Number(age)//type conversion to number
age+=1
console.log(typeof(age) , "Happy Birthday You are " + age + " old") 

*/

////////////////////////////////////////////////////////////////////////

/* 
const
-an inmutable variable

const PI = 3.14159

*/

////////////////////////////////////////////////////////////////////////

/*
MATH

let x = 3.14
console.log(Math.round(x))
console.log(Math.floor(x))
console.log(Math.ceil(x))
console.log(Math.pow(x,2))
console.log(Math.sqrt(x))
console.log(Math.abs(x))

let x = 9.2, y = 4.5
console.log(Math.min(x,y))

*/

////////////////////////////////////////////////////////////////////////

/*

let a ,b ,c
a = Number(window.prompt("Enter Side a"))
b = Number(window.prompt("Enter Side b"))

c = Math.sqrt(Math.pow(a,2) +  Math.pow(b,2))
console.log("Side c = "+ c)

let a ,b ,c
document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value; a = Number(a)
    b = document.getElementById("bTextBox").value; b = Number(b)

    c = Math.sqrt(Math.pow(a,2) +  Math.pow(b,2))

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

*/

////////////////////////////////////////////////////////////////////////

/*

let count = 0

document.getElementById("decreaseButton").onclick = function(){
    count -=1
    document.getElementById("countLabel").innerHTML = count
}

document.getElementById("increaseButton").onclick = function(){
    count +=1
    document.getElementById("countLabel").innerHTML = count    
}

document.getElementById("textReset").onclick = function(){
    count=0
    document.getElementById("countLabel").innerHTML = count    
}

*/

////////////////////////////////////////////////////////////////////////
/*

let userName = "Bro Code"

console.log(userName.length)
console.log(userName.charAt(0))
console.log(userName.indexOf("C"))
console.log(userName.lastIndexOf("o"))
userName = userName.trim()
userName = userName.toUpperCase()
userName = userName.toLowerCase()

*/

////////////////////////////////////////////////////////////////////////

/*

Slice() method
-extracts a section of a string & returns it as a new string without modifying the original string

let fullName = "Snoop Dogg"
let firstName, lastName

// firstName = fullName.slice(0,3)
// lastName = fullName.slice(4)

//MORE PRACTICAL WAY
lastName = fullName.slice(fullName.indexOf(" ")+1)
console.log(lastName)

firstName = fullName.slice(0,fullName.indexOf(" "))
console.log(firstName)

*/

////////////////////////////////////////////////////////////////////////
// METHOD CHAINING

/*
-calling one method after another in one continuous line of code

let userName = "bro"

let letter = userName.charAt(0).toUpperCase()
console.log(letter)

*/

////////////////////////////////////////////////////////////////////////

/*

const visaBtn = document.getElementById("visaBtn")
const masterCardBtn = document.getElementById("masterCardBtn")
const paypalBtn = document.getElementById("paypalBtn")

document.getElementById("myButton").onclick = function(){

if(visaBtn.checked)
    console.log("You are paying with visa")
else
    if(masterCardBtn.checked)
        console.log("You are paying with mastercard")
else
    if(paypalBtn.checked)
        console.log("You are paying with paypal")
}
*/

////////////////////////////////////////////////////////////////////////
// SWITCH

/*
let grade = 100

switch(true){
    case grade<92:
        console.log("greater than 92")
        break
    case grade=95:
        console.log("less than 96")
        break
    default:
        console.log("no choice can be made")
}

*/

////////////////////////////////////////////////////////////////////////

/*

let row = Number(window.prompt("Enter number of rows"))
let col = Number(window.prompt("Enter number of columns"))

for(let i = 1; i <= row; i+=1){
    for(let j = 1; j <= col ; j+=1){
        document.getElementById("myRectangle").innerHTML +=j
    }
    document.getElementById("myRectangle").innerHTML +="<br>"
}

*/
////////////////////////////////////////////////////////////////////////

/*
    VARIABLE SCOPE = Where the variable is accessible
    let = variables are limited to block scope{}
    var = variables are limited to functions(){}
    
    GOBAL VARIABLES = declared outside all functions
    (if global, var will change the browser's window properties so always use let)
*/

////////////////////////////////////////////////////////////////////////
// TEMPLATE LITERAL = delimited by (`) instead of using double/single quotes
//                     allows embedded variables and expressions

/*
let userName = "bro"
let age = 23
let student = "yes"

let text = `Hello ${userName}<br> You are ${age} years old <br>.${student} you are a Student`

document.getElementById("myLabel").innerHTML = text
*/

////////////////////////////////////////////////////////////////////////
// TEMPERATUR CONVERTER PROGRAM

/*
document.getElementById("submit").onclick = function(){

    let temp 

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("input").value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById("tempLabel").innerHTML = temp 
    }
    else{
        temp = document.getElementById("input").value
        temp = Number(temp)
        temp = toFarenheit(temp)
        document.getElementById("tempLabel").innerHTML = temp
     }
}

function toCelsius(temp){
    return (temp-32) * (5/9)
}

function toFarenheit(temp){
    return temp*9/5 +32
}
*/

////////////////////////////////////////////////////////////////////////
//ARRAYS

/*
let fruits = ["apple","mango","banana"]

SPREAD OPERATOR = allows an iterable such as a string/array to be expanded in place where zeros or more arguments are expected(unpacks the elements)
-use console.log(...name)

REST PARAMETERS = represents an indefinit of parameters(packs arguments into an array)

let a = 1, b = 2, c = 3, d = 4, e = 5

console.log(sum(a,b,c,d,e))

function sum(...numbers){
    let total = 0
    for(let number of numbers){
        total +=number
    }
return total
}

COMPACT ARROWS = compact alternative to traditional function expressions

// const greeting = function(name){
    // console.log(`hello ${name}`)

// can be written as
const greeting = (name) => console.log(`hello ${name}`)
greeting("bro")

*/

////////////////////////////////////////////////////////////////////////
//TESTING EVENT LISTENER

// const out = document.getElementById("outer")
// const inn = document.getElementById("inner")

// inn.addEventListener("mouseover",changei)
// inn.addEventListener("mouseout",changeo)

// function changei(){
//     inn.style.backgroundColor = "red"
// }

// function changeo(){
//     inn.style.backgroundColor = "lightblue"
// }

////////////////////////////////////////////////////////////////////////
//DETECT KEY PRESS

// const myDiv = document.getElementById("myDiv")
// // window.addEventListener("keydown", event=> console.log(event.key))
// window.addEventListener("keydown", move)
// let x = 0, y = 0
// function move(event){
//     switch(event.key){

//     case "ArrowDown":
//         y+=5
//         myDiv.style.top = y + "px"
//         break

//     case "ArrowUp":
//         y-=5
//         myDiv.style.top = y + "px"
//         break
//     case "ArrowRight":
//         x+=5
//         myDiv.style.left = x + "px"
//         break
//     case "ArrowLeft":
//         x-=5
//         myDiv.style.left = x + "px"
//         break
//     default:
//         break
//     }
// }

////////////////////////////////////////////////////////////////////////
//ANIMATION 

// const myButton = document.getElementById("myBtn")
// const myAnimation = document.getElementById("myPlayground")

// myButton.addEventListener("click",begin)

// function begin(){
//     let timer = null
//     let degrees = 0
//     // let x = 0, y = 0

//     timer = setInterval(frame, 5)

//     function frame(){
//         if(degrees>=360)
//             clearInterval(timer)
//         else{
//             degrees += 1
//             myAnimation.style.transform = "rotateX("+degrees+"deg)"
//         }
//     }
// }

// if(x>=200 || y>=200)
        //     clearInterval(timer)
        // else{
        //     x+=1
        //     y+=1
        //     myAnimation.style.left = x+"px"
        //     myAnimation.style.top = y+"px"

////////////////////////////////////////////////////////////////////////
 