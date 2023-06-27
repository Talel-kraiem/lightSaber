/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
doesArrayContainsOnlyNumbers.js (c) 2023
Desc: description
Created:  2023-06-21T21:32:18.775Z
Modified: !date!
*/

function doesArrayContainsOnlyNumbers(array) {
  return array.every((element) => {
    return typeof element === "number";
  });
}

export default doesArrayContainsOnlyNumbers;