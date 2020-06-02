// //Init module if you need
// var obj = {}
// function Init()
// {
//     // write code here
//     obj = {}
// }
// //Insert one char from stringstream
// function Insert(ch)
// {
//     // write code here
//     if(obj[ch]) {
//         obj[ch] += 1
//     }else {
//         obj[ch] = 1
//     }
// }
// //return the first appearence once char in current stringstream
// function FirstAppearingOnce()
// {
//     // write code here
//     for(var s in obj) {
//         if(obj.hasOwnProperty(s)) {
//             if(obj[s] === 1) {
//                 return s
//             }
//         }
//     }
//     return '#'
// }


//第二种方法


//Init module if you need
var charMap = new Map()
function Init()
{
    // write code here
    charMap.clear()
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(charMap.has(ch)) {
        // console.log(charMap.get(ch) + '   1111')
        let count = charMap.get(ch) || 0;
        count++
        charMap.set(ch, count)
    }else {
        charMap.set(ch, 1)
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    // charMap.forEach((value, key) => { //出错的原因是forEach中不能使用break,return跳出外层函数
    //     console.log(key)
    //     console.log(value)
    //     // console.log(value == '1')
    //     if(value == '1') {
    //         return key
    //     }
    // })
    for(var [key, value] of charMap) {
        if (value == 1) {
            return key
        }
        
    }
    return '#';
}

// Insert('g')
// console.log(FirstAppearingOnce())
// Insert('o')
// console.log(FirstAppearingOnce())
// Insert('o')
// console.log(FirstAppearingOnce())
// Insert('g')
// console.log(FirstAppearingOnce())
// Insert('l')
// console.log(FirstAppearingOnce())
// Insert('e')
// console.log(FirstAppearingOnce())
// console.log(charMap)
