
// Second try, just sorting it is easier obviously. sorting is slow though
// this receives 100% score

function solution2(A) {
   const sorted = A.sort(function(a,b) {return (b - a)});
   const leng = sorted.length;
   console.log(sorted);
   if (sorted[0]<0) {
     return sorted[0]*sorted[1]*sorted[2]
   } else if ((sorted[1]*sorted[2])<sorted[leng-1]*sorted[leng-2]){
        return (sorted[leng-1]*sorted[leng-2]*sorted[0])
    } else{
        return sorted[0]*sorted[1]*sorted[2]
    }
}

console.log(solution2([-5, -6, -4, -7, -10]))
// First try.... this is an abomination
function solution1(A) {
    let leng = A.length;
    let positiveResults = [];
    let negativeResults = [];
    for (let i=0;i<leng;i++){
        if (A[i]>0){
            // if current number is positive
            if(positiveResults.length<3 && A[i]>positiveResults[0]){
                positiveResults.unshift(A[i])
            } else if(positiveResults.length<3 && A[i]>positiveResults[1]){
                positiveResults.push(positiveResults[1]);
                positiveResults[1] = A[i];
            } else if(positiveResults.length<3){
                positiveResults.push(A[i]);
            } else if(A[i]>positiveResults[0]){
                positiveResults.unshift(A[i])
            } else if(A[i]>positiveResults[1]){
                positiveResults.splice(1,0, A[i]).pop()
            } else if(A[i]>positiveResults[2]){
                positiveResults[2] = A[i]
            } else{console.log(`caught ${A[i]}`)}
        } else if(A[i]<0){
            // console.log(`${A[i]} is negative`)
            if (negativeResults.length<3 && A[i]>negativeResults[0]){
                negativeResults.unshift(A[i])
            } else if (negativeResults.length<3 && A[i]>negativeResults[1]) {
                negativeResults.push(negativeResults[1]);
                negativeResults[1] = A[i]
            } else if (negativeResults.length<3){
                negativeResults.push(A[i])
            } else if (A[i]>negativeResults[0]){
                negativeResults.unshift(A[i]);
            } else if (A[i]>negativeResults[1]){
                negativeResults.splice(1,0, A[i]).pop()
            } else if (A[i]>negativeResults[2]){
                negativeResults[2] = A[i];
            } else {console.log(`caught ${A[i]}`)}
        }
    }
    if (positiveResults.length==0){
        return "all results are negative"
    } else if (positiveResults.length==1 || negativeResults[0]*negativeResults[1] > positiveResults[0]*positiveResults[1]){
        return negativeResults[0]*negativeResults[1]*positiveResults[0]
    } else {
        return positiveResults[0]*positiveResults[1]*positiveResults[2]
        }
    console.log(`${positiveResults} ${negativeResults}`)
}

// this got like 30%. it was fast enough, but wrong in several cases
