
// khud ka ek new prototype bna ke defaultr prototype ko extend kar sakte ho
// prototype ko extend karne ke liye prototype ko use karte hain
// syntax hota hai :  array_ka_name.prototype.new_function_name = function() { ab jo tumhe karna hai }

Object.prototype.chai = function(){
    console.log('This is chai function');
}



const arr = [1,2,3,4,5];

console.log(arr.chai());
arr.chai();

console.log(arr.fill())

const str = 'Ritesh';

console.log(str.length);

const obj = {
    x : 10,
}

obj.x;     // dot operator is used to access properties of an object

arr._proto_; // This will show the prototype of the array object

arr._proto_;
undefined
Array.prototype;


Array.prototype.Ritesh = function()  {
    console.log('This is hacked by Ritesh');
}

const arr4 = [1,2,3,4,5];

arr4.Ritesh()


/// iss tareeke hum message de skte hain.
if (!Array.prototype.fill) throw new error ('Please update your browser')


    // ab agar fill fn browser mwin hai toh theek otherwise apna define krr do fill ko toh 100% chalega.
    if (!Array.prototype.fill){
        Array.prototype.fill = function(){

        }
    }