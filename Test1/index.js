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

/*
METHOD CHAINING
-calling one method after another in one continuous line of code

let userName = "bro"

let letter = userName.charAt(0).toUpperCase()
console.log(letter)

*/

////////////////////////////////////////////////////////////////////////

/*

*/