let stack1 = [];
let stack2 = []

function push(node)
{
    // write code here
    stack1.push(node)
}
function pop()
{
    // write code here
    let length1 = stack1.length;
    let length2 = stack2.length;
    if(length2 == 0 && length1 == 0) return
    if(length2 != 0) {
        // return length2.pop() 这里写成了length2，这就离谱
        return stack2.pop()
    } 
    else {
        for(let i=0; i<length1;i++){
            // stack2.push(stack1[i])这是栈！这是栈！！这是栈！！！数组题是不做多了，看见[]就是数组
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
    
}
push(2)
push(3)
push(4)
push(5)
console.log(pop())