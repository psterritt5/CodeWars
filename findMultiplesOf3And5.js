/*If we list all the natural numbers below10 that are multiples of 3 or 5 we get 3,5,6 and 9. The sum of these multiples is 23.

Write a solution so that it returns the sum of allthe multiples of3 or 5 below the number passed in. Additionally, if the number is negative, return 0.

Note if the number is a multiple ofboth 3 and 5, only count it once*/

function findMultiplesOf3And5(num){
    let sum = 0;
    if(num< 3) return 0;
    let multiplesArray = [];
    for (let i=0; i<(parseInt(num)/3); i++){
        multiplesArray.push(3 * (i+1));
        multiplesArray.push(5 * (i+1));
    }
    multiplesArray =[...new Set(multiplesArray)]; //Removes duplicates
    multiplesArray = multiplesArray.filter(element => element<=num); //Removes numbers greater than the inputted value
    multiplesArray.forEach(element => sum+=element); //Sums all possible multiples
    return sum;
}