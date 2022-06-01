/*Problem:
We want to generate all the numbers of three digits where:
-the sum of their digits is equal to 10.
-their digits are in increasing order (the numbers may have two or more equal contiguous digits)

The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

Make a function that receives two arguments: the sum of digits value, and the desired number of digits for the numbers
The function should output an array with three values: [1,2,3]
1 - the total number of possible numbers
2 - the minimum number
3 - the maximum number

The example given above should be:
findAll(10, 3) => [8, "118", "334"]

If we have only one possible number as a solution, it should output a result like the one below:
findAll(27, 3) => [1, "999", "999"]

If there are no possible numbers, the function should output the empty array.
findAll(84, 4) => []

The number of solutions climbs up when the number of digits increases.
findAll(35, 6) => [123, '116999', '566666']*/

function findAll(sumDigits, numDigits) {
    const minValue = 10 ** (numDigits-1);
    const maxValue = 10 ** numDigits;
    let output = [];
    let arrayTemp = [];
    let possibleSolutions = [];
    let sumArrayTemp;
    let conditional;
        
    for (let i = minValue; i<maxValue; i++){
        //split up i and place in arrayTemp
        arrayTemp = i.toString().split("");
        //Check conditions
        //First calculate sum
        sumArrayTemp = 0;
        arrayTemp.forEach(element => sumArrayTemp+= parseInt(element));
        if (sumArrayTemp === sumDigits){
          //Check if digits are in increasing order
          conditional = true;
          for (let j = 0; j < numDigits - 1; j++) {
            if (parseInt(arrayTemp[j]) > parseInt(arrayTemp[j + 1]))
              conditional = false;
              j = numDigits; //breaks loop
          }
          if (conditional === true){
            possibleSolutions.push(parseInt(i));
          }
        }
    }
    if(possibleSolutions.length === 0) return [];
    return [possibleSolutions.length, Math.min(... possibleSolutions), Math.max(... possibleSolutions)];
}
