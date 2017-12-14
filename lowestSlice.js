// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    //   with 2 for loops to start, it will be too slow bu that's okay
    const leng = A.length;
    let lowest_average = 100000000;
    let returnable_position;
    for (let i=0;i<leng;i++){
        for (let j=i+2;j<leng;j++){
            let current_slice = A.slice(i, j)
            let sum = current_slice.reduce((a,b) => a+=b);
            let current_average = sum/current_slice.length;
            if (current_average < lowest_average){
                returnable_position = i;
                lowest_average = current_average;
                }
            console.log(`${current_slice} ${sum} ${current_average} ${lowest_average}`)
            }
        }
    return returnable_position
}
