function multiply(array)
{
    // write code here
    if(array.length == 0) return false
    if(array.length == 1) return false
    let b = [];
    let res = 1;
    //for(let i=0; i<array.length; i++) {
    //    res*=array[i]
    //}
    //for(let j=0; j<array.length; j++) {    出错原因在于没有考虑到有0的情况，如果出现0，0^-1为NaN,所以会得出NaN
    //    b.push(res*Math.pow(array[j],-1))
    //}
    for(let i=0; i<array.length; i++) {
        if(i==0) {
            b.push(mul(array.slice(1)))
        }
        else if(i==(array.length-1)) {
            b.push(mul(array.slice(0,array.length-1)))
        }else {
            let d = array.slice(0,i)
            let e = array.slice(i+1)
            b.push(mul(d)*mul(e))
        }
        
    }
    
    return b;
}

function mul(arr) {
    let c = 1
    for(let i=0; i<arr.length; i++) {
        c*=arr[i]
    }
    return c
}

console.log(multiply([1,3,4,5]))