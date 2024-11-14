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

