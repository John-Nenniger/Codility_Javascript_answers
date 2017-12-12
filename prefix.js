no

// passing car problem
function solution(A) {
   let sum = A.reduce((a,b) => a+b, 0)
   const leng = A.length;
   let count = 0;
   for (let index=0;index<leng;index++){
       if(A[index]===0){
           count+=sum;
        } else {
            sum-=1
            }
       }
    return count
}


// missing integer

function solution(A) {
 let largest = A.length+1;
 const expectedTotal = (largest*(largest+1)/2)
 const sum = A.reduce(function(a,b){return a+b})
 return expectedTotal-sum
}
