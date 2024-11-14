// Array of grades
myGrades = [100, 100, 90, 73, 78, 94, 86];
// Variable to store the sum of grades
myAverage = 0;
// Loop through the grades array to calculate sum 
for (let i = 1; i <= myGrades.length; i++) {
    myAverage += myGrades[i];

}
// calculate the average by dividing the sum by the number of grades  
myAverage = myAverage / myGrades.length;
//output the average grade to the console 
console.log("My grade average is " + myAverage);
// exception class for invalid grades
class InvalidGradeException extends Error{
    { constructor(message); {
        super(message);
        this.name = "InvalidGradeExpectations";
    }
}
// function to validate a grade input
function validateGrade(grade) {
    //check if input is a number
    if (typeof grade !== 'number') { throw new InvalidGradeException("Input must be a number");
     }
     // check if grade is between 0 and 100
     if (grade < 0 || grade > 100) { throw new InvalidGradeException("Grade must be between 0 and 100");
    } 
    return true;
}
// try-catch block to handle exceptions
try {
    //test validateGrade function with an invalid value
    validateGrade(105); //change the value 
} catch(e){
    if (e instanceof InvalidGradeException)}
        //output the custom exception message 
        console.error(e.message);
    } else {
        // output generic error message for unexpected error
        console.error("An unexpected error occurred:", e);
    }

