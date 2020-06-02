function maxInWindows(num, size)
{
    // write code here
    let maxArr = []
    if(num.length==0 || size==0 || num.length<size) return maxArr
    // if(num.length==0) return  这里没从题里找到边界条件：就是num小于size输出什么，size==0输出什么
    // if(num.length<=size) {
    //     maxArr.push(maxNum(num))
    //     return maxArr
    // }
        
    
    let length = num.length-size
    for(let i=0; i<=length;i++) {
        let temp = []
        if(i==length) {
            temp = num.slice(length)
        } else {
            temp = num.slice(i,i+size)
        }
        
        maxArr.push(maxNum(temp))
    }
    return maxArr
}

function maxNum(arr) {
    let max = arr[0]
    for (let i=0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
console.log(maxInWindows([1,3,5,7],4))