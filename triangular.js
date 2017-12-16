// this solution got 100% first try... I thought it would be harder
function solution(A) {
    const sorted = A.sort(function(a,b) {return (b - a)});
    const leng = A.length;
    for (let i=0;i<leng;i++){
        if(A[i]<(A[i+1]+A[i+2])){
            return 1;
            }
        }
    return 0;
}
