const arr = [1, 2, 3, 'four', 5, 'six', null, undefined, true, 10, 'eleven', Symbol("id")];

let oddNums = 0;
let evenNums = 0;

for ( let i = 0; i < arr.length; i++ ) {
  if (( typeof arr[i] === "number" )&&( arr[i] % 2 == 0 )) {
     evenNums++;
  } else if (( typeof arr[i] === "number" )&&( arr[i] % 2 !== 0 )) {
      oddNums++
  }
}
console.log("количество чётных чисел в массиве: " + evenNums);
console.log("количество нечётных чисел в массиве: " + oddNums);
