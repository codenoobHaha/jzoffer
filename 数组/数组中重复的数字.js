function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let temp=0;
    for(let i=0; i<numbers.length;i++) {
        if(numbers[i] != i) {
            temp = numbers[i]
            if(numbers[i] == numbers[temp]) {
                duplication[0] = numbers[i]
                return true
            }else {
                numbers[i]=numbers[temp];
                numbers[temp] = temp
            }
        }
    }
    return false
}