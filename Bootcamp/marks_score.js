
// let score = 85;

function calculate_grade(score) {

    if (score >= 90){

        return "A";
    }
    else if (score >= 80){

        return "B";
    }
    else if (score >= 70){

        return "C";
    }
    else if (score >= 60){

        return "D";
    }
    else {

        return "F";
    }

}
let grade = calculate_grade(100);

console.log("Your grade is: " + grade);

// console.log(grade);

console.log("Your grade is: " + calculate_grade(85));
// console.log("Your grade is: " + calculate_grade());