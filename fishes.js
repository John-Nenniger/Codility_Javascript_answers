// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    const leng = A.length;
    let fish_count = leng;
    for (let i=0;i<leng;i++){
        // A[i] is the size of the O.G. fish
        if(B[i]===1){
            for(let j=i+1;j<leng;j++){
                // meets a fish going the other way
                if(B[j]===0){
                    // if upstream fish is bigger
                    if(A[i]>A[j]){
                        fish_count--;
                        B[j] = 'eaten';
                    } else if(A[j]>A[i]){
                        fish_count--;
                        B[i] = 'eaten';
                        break;
                        }
                    }
                }
            }

        }
    return fish_count;
}
