//Given a number. Print “odd” if the number is odd and “even” if it’s even.
let i=9;
if(i % 2 == 0)
{
    console.log("Even");
}
else{
    console.log("Odd");
}


//Given a number (n). Calculate the sum of all odd numbers between 1 and n.
let sumofallEven = 0;
for(let n = 0;  n < 10; n++)
{
    if(n % 2 == 0 )
    {
sumofallEven += n;

    }
}
console.log(sumofallEven);

//Declare three variables. Two of them are the bounds of a range. Print “In bounds”, if the third number is in the range, otherwise print “Out of bounds”
let a = 5;
let b = 20;
let c = 2;

if(a <= b && a>= c){
    console.log("In bounds")
}
else{
    console.log("Out of bounds")
}

//Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid and “no" otherwise.

let AB = 10;
let BC = 20;
let AC = 30;
let FC = AB ** 2 + BC ** 2;
let MC = AC ** 2;
if(FC == MC){
    console.log("YES");
}
else{console.log("NO")}
