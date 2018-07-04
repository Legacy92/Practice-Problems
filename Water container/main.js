// The problem here is asking to find the amount of water that could be held given the following wall heights
// walls that equal 3,0,0,2,0,4 will return 10

// pseudo code
// 1. Take quantity of walls
// 2. store thast value 
// 3. Find first wall in order of walls given with a unit value greater than 0
// 4. Compare the unit value of that wall down the line of walls in the same direction
// 5. Look for another wall unit value that is equal or greater than the wall found in #3
// 6. Find the greatest common quantity GCQ between the 2 wall unit values. ex 3 and 4 would have 3 as the GCQ
// 7. Store all walls between the first and second walls found in #3 and #5 (non inclusive)
// 8. Find the difference between the inner walls (#7) and GCQ
// 9. Add the values 
// 10. Assign the sum to the answer of the question


var walls = [3, 0, 0, 2, 0, 4];

function firstNumbers(wall) {
    for (i = 0; i < wall.length; i++) {
        if (wall[i] > 0) {
            var firstNum = wall[i];
            var firstNumIndex = i;
            return {
                firstNum: firstNum,
                firstNumIndex: firstNumIndex
            };
        }
    }
}

var firstSet = firstNumbers(walls);
var firstNum = firstSet.firstNum;
var firstNumIndex = firstSet.firstNumIndex;

function secondNumbers(wall) {
    for (i = firstNumIndex; i < wall.length; i++) {
        if (wall[i] > firstNum) {
            var secondNum = wall[i];
            var secondNumIndex = i;
            console.log(secondNum);
            return secondNum;
        }
    }
}

secondNumbers(walls);