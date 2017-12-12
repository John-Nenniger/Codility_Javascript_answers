// chunk given an array and a number,
// split the array into smaller arrays of size

function chunk(a, s) {
  let leng = a.length;
  let result = [];
  for (let i=s;i<leng+s;i+=s){
    result.push(a.slice(i-s, i))
  }
  return result;
}

console.log(chunk([1, 2, 3, 4], 2)) // [[ 1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)) // [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)) // [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)) // [[ 1, 2, 3, 4, 5]]
