var Arr = [10,20,30,40,50,60,70,80,90,100];
console.log(Arr.length);

//Convert Array into String
//console.log(`Array into String ${Arr.toString()}`)

//Pop method        Removes last element
console.log(`Remove last element in array ${Arr.pop()}`);
console.log(`After pop operation array  is ${Arr}`);

//push method
console.log(`Add new element in array now array length is ${Arr.push(110)}`); 
console.log(`After push operation array  is ${Arr}`);

//Shift Method      Removes first element
console.log(Arr.shift());

//Change Elements In Array Using Indexing
Arr[4]="Welcome";
console.log(Arr);

//Concating of 2 Arrays
var Arr1=["Web Development"];
console.log(Arr.concat(Arr1));

//Slice Method
console.log(Arr.slice(3));

//Array Reversing
console.log(Arr.reverse());


//Find index value in Array
console.log(Arr.indexOf('Welcome'));

//Display String
console.log(Arr.join())


//Creating New Array
console.log(Arr.flat())