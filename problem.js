// find out if the number is odd or even? 

var number = 799;

if(number % 2 === 0){
 console.log(number + " is an even number")
}else{
 console.log(number + " is a odd number")
}


// odd - 3,5,7,9,11.. / it is not divisble by 2 
// even - 2,4,6,10,12,.. / it is divisble by 2 


// =====================================================================


// find if the year is leap year or not?

// Hints: If a year is exactly divisible by 4 and not divisible by 100, then it is a leap year. Or if a year is exactly divisible by 400 then it is a leap year.

var year = 2024;

if((year % 4 === 0 && year % 100 != 0) || year % 400 == 0){
 console.log(year + " is a leap year")
}else{
 console.log(year + " is not a leap year")
}

// && (AND) - All the conditions should be true
// || (OR) -  any of the conditions can be true

var person = "Borsha"; //Mandetory

var age = 18; //Mandetory

var favCat = "RagDoll"

if((person == "Borsha" && age == 18) || favCat == "Persian"){
 console.log(true)
}else{
 console.log(false)
}


// Write a JS program to input marks of 3 subjects Physics, Chemistry,  and Computer. Calculate percentage and grade according to following:

// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage < 60: fail.


var physics = 73;

var chemistry = 63;

var computer = 87;

var total = physics + chemistry + computer;

var average = total / 3;
console.log(average)

if(average >= 90){
 console.log("Grade A")
}else if(average >= 80){
 console.log("Grade B")
}else if(average >= 70){
 console.log("Grade C")
}else if(average >= 60){
 console.log("Grade D")
}else{
 console.log("Fail")
}

// ================================================

var numberOne = 30;

var numberTwo = 50;

var numberThree = 12;

if(numberOne > numberTwo){
 console.log(numberOne + " is the maxium number")
}else if(numberTwo < numberThree){
 console.log(numberThree + " is the maxium number")
}else if(numberTwo > numberThree){
 console.log(numberTwo + " is the maxium number")
}


// ===================================================


// For Loop

// Print 20-100

for (var i=0; i<=10; i++){
 console.log(i)
}

// Print Even number between 3 to 20

for (var i=3; i<=20; i++){
 if(i % 2 == 0){
  console.log(i)
 }
}