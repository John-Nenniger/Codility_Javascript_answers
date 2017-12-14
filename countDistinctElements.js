function solution(A) {
    const leng = A.length;
    let results = {}
    for (let i=0;i<leng;i++){
        results[A[i]] += 1;
        }
    return Object.keys(results).length
}
