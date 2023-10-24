function mulArray(arr){

    let mul=arr.reduce((accu,currElement)=>{

        return accu*=currElement;
    })
    return mul;


}
console.log(mulArray([80,90,12,20,50]));