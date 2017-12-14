// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    //   with 2 for loops to start, it will be too slow bu that's okay
    const leng = A.length;
    let lowest_average = 100000000;
    let returnable_position;
    for (let i=0;i<leng-1;i++){
        for (let j=i+2;j<=leng;j++){
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

// slightly improved

function solution(A) {
    //   with 2 for loops to start, it will be too slow bu that's okay
    const leng = A.length;
    let lowest_average = 100000000;
    let returnable_position;
    for (let i=0;i<leng-1;i++){
        for (let j=i+2;j<=leng;j++){
            if (A[j-1]>A[j]) {continue}
            let current_slice = A.slice(i, j)
            let sum = current_slice.reduce((a,b) => a+=b);
            let current_average = sum/current_slice.length;
            if (current_average < lowest_average){
                returnable_position = i;
                lowest_average = current_average;
                }
            }
        }
    return returnable_position
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// [4, 2, 2, 5,  1,  5,  8];
// [4, 6, 8, 13, 14, 19, 27]
// Another Example to test the end
// [5,1,4,5,8,7, 12, 2, 2] should return 7


// [14, 21, 45, 6,  34,   1,  400,  1,   4,   1] should return 8
// [14, 35, 80, 86, 120, 121, 521, 522, 526, 527 ]

function solution(A) {
    let leng = A.length;
    let prefixSumArray = [];
    let sum = A[0]
    let lowest_index;
    let lowest_average = 100000000;
    prefixSumArray[0] = sum
    for (let i=1;i<leng;i++){
        sum+=A[i];
        prefixSumArray[i] = sum;
        if (i > 1 && ((prefixSumArray[i] - prefixSumArray[i-2])/2)<lowest_average){
            lowest_index = i-1;
            lowest_average = (prefixSumArray[i] - prefixSumArray[i-2])/2
            }
        if(i > 2 && ((prefixSumArray[i] - prefixSumArray[i-3])/3) < lowest_average){
            lowest_index = i-2;
            lowest_average = (prefixSumArray[i] - prefixSumArray[i-3])/3;
            }
        console.log(`${prefixSumArray} ${((prefixSumArray[i] - prefixSumArray[i-3])/3)}`)
  }
  return lowest_index;
}
