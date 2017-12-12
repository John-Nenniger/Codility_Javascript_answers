
function solution(A) {
    const total = A.reduce(function(a,b){return a+b}, 0);
    const leng = A.length;
    let current_least = total;
    let first_total = 0
    for (let i=0;i<leng;i++){
        first_total += A[i];
        let second_total = total - first_total;
        let current_difference = Math.abs(second_total - first_total);
        if (current_difference < current_least){
            current_least = current_difference;
            }
        }
    return current_least;
}
