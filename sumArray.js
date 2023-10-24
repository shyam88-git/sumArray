function sumArray(arr){

    let sum=arr.reduce((accum,currEle)=>{
        return accum+=currEle;
    });
    return sum;

}
console.log(sumArray([10,20,30,40,50]));