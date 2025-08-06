// PRIMITIVE DATA TYPES ; CALL BY VALUE

// 7 TYPES ; String , Number, Boolean , null, undefined,symbol, Bigint


// js is dynamic lanuguage

const name = "jay"
const score = 99
const scoreValue = 99.99

const isLoggedIn = false 
const outsideTemp = null

let userEmail; // undefined

// symbol is used to make unique object or button
const id = Symbol('1543')
const anotherId = Symbol('1543')

console.log(id === anotherId); // output => false 

const bigNumber = 5746531841684683464n // this is now bigInt




// REFERENCE(non - primitive)

// types : Array , Objects , functions

const heroes = ["brian","josh","charlie","buffet"]

let myObj = {
    name : "jay",
    age : 19
}

const myFunction = function(){
    console.log("hello jayy");
    
}

// 221341 is the screenshot image on 06-08-2025 
// check for the reference because there mentioned the return type of data types especially for "null" and "undefined"