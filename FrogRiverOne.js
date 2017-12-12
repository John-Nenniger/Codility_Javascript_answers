// My first try, it works but is slow
function solution(X, A) {
    let leng = A.length;
   let referenceArray = [];
   for (let y=1;y<X+1;y++){
        referenceArray.push(y);
       }
    for (let pos=0;pos<leng+1;pos++){
        for (let pos2=0;pos2<referenceArray.length+1;pos2++){
            if(A[pos]==referenceArray[pos2]){
                referenceArray.splice(pos2, 1)
                }
            if(referenceArray==""){return pos}
            }

        }
    return -1
}


// Keanos first try

function solution(X, A) {
    let refArray = [];
    for (let i=1;i<=X;i++){
        refArray.push(i);
        }
    for (let i=0;i<A.length;i++){
        if(refArray.includes(A[i])){
            refArray = refArray.filter(function(e){return e !==A[i]})
            }
        if(refArray.length===0){return i}
        }
    return -1
}
