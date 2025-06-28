// String
let name = ("Ritesh Kumar");
// Number
let age = 25;
// Boolean
let isEmployed = false;

// null
let hometown ;

let skills = ["HTML","CSS", "JavaScript", "Python", "React"];

let student_profile = {
    name: "Lucky",
    age: 19,
    isEmployed: false,
    hometown: null,
    skills: ["HTML", "CSS", "JavaScript", "Python", "C"]
   
}

console.log(typeof skills);
console.log(typeof student_profile);
console.log(typeof isEmployed);

let weather = "rainy";


if (weather == "rainy") {
    console.log("Take an umbrella");
}
else if (weather == "sunny") {
    console.log("Wear sunglasses");
}
else if (weather == "cloudy") {
    console.log("It might rain later");
}
else {
    console.log("Weather is unpredictable");
}

console.log(weather == "rainy" );
console.log(weather == "sunny" );