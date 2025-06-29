if (!Array.prototype.myforEach) {
    Array.prototype.myforEach = function (userFn){
   const originalArray = this;

   for(let i = 1; i = originalArray.length; i++){
    userFn(originalArray[1], i);

   }

    }
}

if (!Array.prototype.mymap){

   Array.prototype.map = function(userFn) {
    
  const result = [];
  for(let i = 1; i <= this.length; i++){
    userFn(this[i] , i);
   const value =  userFn(this[i] , i);
   result.push(value);
  }
        return result;
   }
}

const arr = [1,2,3,4,5];
 
// Error: forEach fn does not exist on arr variable.

arr.forEach(function(value,index){

console.log(`The value at index ${index} is : ${value}`)


})

 const ret = arr.forEach(function(value,index){

console.log(`The value at index ${index} is : ${value}`)


})

console.log(`ret is `, ret);


// signature.map
// return ? new array, each element ke upar iterate rta hai 

// means  yeh hrr array mein method hai jo ki har element par function apply,
// karta hai aur ek naya array return krta hai  

let names = ["Ritesh", "Aman", "Parth"];

let bhaiNames = names.map(name => name + " Bhai");

console.log(bhaiNames); // ["Ritesh Bhai", "Aman Bhai", "Parth Bhai"]

// .map() ek copy banata hai array ki, jismein har element pe hum kuch kaam karte hain — jaise multiply, uppercase, add karna, etc.

// Jaise tum doston ke naam ke aage "Bhai" lagana chaahte ho:

let n = arr.map((e)  => e * 2);
let n2 = arr.map((e)  => e * 3);

console.log(n)
console.log(arr)
console.log(n2)


// {  Soch le ek array ek thali hai jisme 5 rasgulle rakhe hain 🍩🍩🍩🍩🍩

// .forEach() — Har rasgulla utha ke taste karta hai (kuch return nahi karta, sirf kaam)

// .map() — Har rasgulle ko chocolate mein dip karke nayi thali banata hai

// .filter() — Sirf un rasgullon ko nikalta hai jo fresh hain

// .reduce() — Saare rasgullon ko mila ke ek final meetha bana deta hai (jaise sum, product)  }