/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

We can determine how "out of order" an array A is by counting the number of inversions it has. Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.

Given an array, count the number of inversions it has. Do this faster than O(N^2) time.

You may assume each element in the array is distinct.

For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.
*/

const findInversion = (yourArray) => {
  let count = 0;
  let temp;
  for (i=0; i<yourArray.length-1; i++) {
    temp = yourArray.slice(i+1);
    for (j=0; j<temp.length; j++) {
      if (yourArray[i] > temp[j]) {
        count++;
      }
    }
  }
  return count;
}

let test1 = [1,2,3,4,5] //0 inversions
let test2 = [2,4,1,3,5] //3 inversions
let test3 = [5,4,3,2,1] //10 inversions

console.log(findInversion(test1))
console.log(findInversion(test2))
console.log(findInversion(test3))

$(document).ready(function() {
  let value1;
  let value2;
  $('#form1').submit(function(event){
    event.preventDefault()
    value1 = $('#input-section-0').val();
    console.log(value1)
    value1.replace(/'/g,'"')
    console.log(value1)
    value2 = JSON.parse(value1)
    $('#output-section-0').text(findInversion(value2))
  })
});
