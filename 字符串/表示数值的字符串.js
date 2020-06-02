// function isNumeric(s)
// {
//     // write code here
//     return isNaN(new Number(s))? false : true
// }

// console.log(isNumeric('+.5'))



function isNumeric(s) {
    //先将字符串转换为数组
    let str = s.split("");
    //sign标记 ‘+’‘-’是否出现，decimal标记‘.’是否出现，hasE标记‘e’或者‘E’是否出现
    let sign = false, decimal = false, hasE = false;
    for(let i=0; i<str.length; i++) {
        //判断e
        if( str[i] == 'e' || str[i] == 'E' ) {
            if (i == str.length - 1) return false; // e || E之后一定要接数字
            if (hasE) return false;  //e || E只能出现一次
            hasE = true
        }
        //判断 +、- 
        else if ( str[i] == '+' || str[i] == '-' ) {
            if ( sign && str[i-1] != 'e' && str[i-1] != 'E') return false; // +、-第二次出现时，必须在e||E 后面

            if ( !sign && i > 0 && str[i-1] != 'E' && str[i-1] != 'e') return false; //+、-第一次出现，并且不是在字符串开头，则必须紧接在e之后

            sign = true;
        }
        //判断 . 
        else if (str[i] == '.') {
            if(hasE || decimal) return false //e后面出现小数点或者小数点出现两次
            decimal = true
        } 
        //有个问题这里js用判断吗？
        else if (str[i] < '0' || str[i] >'9') { // 不合法字符
            return false;
        }
    }
    return true
}

console.log(isNumeric('123.45e+6'))