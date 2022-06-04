// // Looping COncept
// // I have to print a number from 1 to 100
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// // Loop=>it is used to run a block of code repeatedly/multiple times.
// // it makes our code looks finer and compact

// Types of LOOPs:
// 1.for loop 
// 3 statments
// 1.for(variable defin/index/initialization;condition;increment/decrement){
//     //code to be executed
// }
// 2.While Loop 
// 3.do while Loop 
// 4.for in loop 
// 5.for Each Loop
// 6.for of Loop 


// for(let i=1;i<10;i++){
//     console.log("I have taken "+i+" Chapatis");
// }
// console.log("I have taken "+i+" Chapatis");


// Use  for loop to print number from 5 to 1
// 5
// 4
// 3
// 2
// 1

// for(let i=5;i>=1;i--){
//     console.log(i);
// }

// Write a loop from 1 to 10 and check even numbers


// for(let i=1;i<=10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// let i=6;
// while(i<=5){
//     //code to be executed
//     console.log(i);
//     i++;
// }

// let i=1;
// do 
// {
//     console.log(i);
//     i++;
// }while(i<=5);


// for in lOop=>index
// Iterate over the properties of an object or the elemtn of the array
// const fruits=["Mangoes","Apple","Banana","Orange","Grapes"];
// for(let fruit in fruits){
//     console.log(fruits[fruit]);
// }

// Es-6
// const fruits=["Mangoes","Apple","Banana","Orange","Grapes"];
// for(let fruit of fruits){
//     console.log(fruit);
// }


// let days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// let i=0;
// while(i<=10){
//     if(i==3)
//     {
//         break;
//     }
//     console.log(days[i]);
//     i++;
// }


for(let i=1;i<=10;i++){
    if(i==5){
        continue;

    }
    console.log(i);
}