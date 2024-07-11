/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function sumSubArray(arr) {
  let jml = 0;
  for (let index = 0; index < arr.length; index++) {
    jml += arr[index];
  }

  return jml;
}

function subArray(arr) {
  // your code here
  let sum = -9999;
  let subArr = [];

  for (let x = 0; x < arr.length; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      let totalArr = sumSubArray(arr.slice(x, y));

      if (totalArr > sum) {
        subArr = arr.slice(x, y);
        sum = totalArr;
      }
    }
  }

  return [subArr, sum];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(subArray(input)); // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
