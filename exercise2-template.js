/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */

function checkABahead(arr, fndChar) {
  let res = false;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == fndChar) {
      res = true;
      break;
    }
  }
  return res;
}

function threeStepsAB(text) {
  // your code here
  let newText = text.replaceAll(" ", "");
  let result = false;
  let index = 0;

  while (result == false && index <= newText.length - 1) {
    const currChar = newText[index];

    if (currChar.toLowerCase() == "a") {
      result = checkABahead(newText.slice(index + 1, index + 4), "b");
    }

    index++;
  }

  return result;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
