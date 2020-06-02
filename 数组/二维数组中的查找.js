function Find(target, array)
{
    // write code here
    if(array.length == 0) return false
    if(array[0].length == 0) return false
    let l1=array.length-1, l2=array[0].length-1;
    let i=0,j=l2;
    // while( i<l1 && j>0) 这里出错的原因是边界条件判断出错，可以取到边界条件
    while( i<=l1 && j>=0) { 
        if(target == array[i][j]) {
            return true
        }
        else if(target < array[i][j]) {
            j--
        } 
        else {
            i++
        }
    }
    return false
}