/*
Author: Talel Kraiem (kraiemtalel4@gmail.com)
isAscending.js (c) 2023
Desc: description
Created:  2023-06-21T16:28:42.680Z
Modified: !date!
*/

function isAscending(arr) { 
    return arr
      .slice(1)
      .every((num,i) => num >= arr[i]); 
  }


export default isAscending;