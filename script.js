const person = {
    x: 100,                       //person is object.
  firstName : "Ritesh",
  lastName : "Kumar",
  hobbies: ["reading","gaming"] ,    //object ke ander main kisi bhi tareeke ki values ko rakh sakta hoon.
  isMarried : false,            //isMarried is a boolean value.
  hasGirlfriend: false,          //hsGirlfriend is a boolean value.
  hadCrush: 'infinity',
  hello: function student(){
  
    return 'Ritesh Kumar';
},
address: {
    counbtry: 'India',          //address is an object inside the person object.
    state: 'Haryana',
    city: 'Karnal',
    pincode: 132001,
    house: 2928,
}

}
console.log(person.x);                //Accessing the property x of the object person.

console.log(person.firstName);       //Accessing the property firstName of the object person.

console.log(person.lastName);        //Accessing the property lastName of the object person.

console.log(person.hobbies);         //Accessing the property hobbies of the object person.

console.log(person.hello()); 

console.log(person.address.state); 


const remote = {
    brand : 'samsung',
    model : '2025',
    color : 'black',
    isSmart : true,
    dimensions:{height: 10, width: 5, breadth :2 },

    // buttons of remote.
    turnOff: function(){

        return 'Remote is turned off';
    },
    turnOn: function(){

        return 'Remote is turned on';
    },

   volumeUp : function(){

    return 'Volume is increased'
   },
    
   volumeDown : function(){ 
    return 'Volume is decreased'
   }

   

}