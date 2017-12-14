let sampleArray = [4,2,2,5,1,5,8];

function prefix(arr){
  let leng = arr.length;
  let prefixSumArray = new Array(leng);
  let sum = 0;
  for (let i=0;i<leng;i++){
    sum+=arr[i];
    prefixSumArray[i] = sum;
  }
  return prefixSumArray
}

console.log(prefix(sampleArray)); // [4, 6, 8, 13, 14, 19, 27]
