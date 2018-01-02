// [-1000, 1000]
// What should happen?
// calculations should only happen once.  Total should be 0 at that time
// first total should be -1000 second total should be 1000
// current difference should be 2000

function solution(A) {
    const total = A.reduce(function(a,b){return a+b}, 0);
    const leng = A.length;
    let current_least
    let first_total = 0
    for (let i=0;i<leng-1;i++){
        first_total += A[i];
        let second_total = total - first_total;
        let current_difference = Math.abs(second_total - first_total);
        console.log(i, first_total, total, current_difference)
        if (!current_least || current_difference < current_least){
            current_least = current_difference;
            }
        }
    return current_least;
}


console.log(solution([5, 6, 2, 4, 1] ))
// gets 83% as it is.  Not too bad.
