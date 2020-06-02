//s, pattern都是字符串
// function match(s, pattern)
// {
//     // write code here
//     return pattern.test(s)
// }

//s, pattern都是字符串



// 动态规划
// 如果 pattern[j] == str[i] || pattern[j] == '.', 此时dp[i][j] = dp[i-1][j-1];
// 如果 pattern[j] == '*'
//     分两种情况:
//     1: 如果pattern[j-1] != str[i] && pattern[j-1] != '.', 此时dp[i][j] = dp[i][j-2] //a*匹配0次 e.g.b&ba*
//     2: 如果pattern[j-1] == str[i] || pattern[j-1] == '.'
//         此时dp[i][j] = dp[i][j-2] // a*匹配0次 e.g.ba&baa
//         或者 dp[i][j] = dp[i][j-1] // a*匹配1次  e.g.ba&ba* (注意这个条件可以忽略，它等价于dp [i-1] [j] = dp [i-1] [j-2] 的情形，即b&ba*)
//         或者 dp[i][j] = dp[i-1][j] // a*匹配多次 e.g.baaa&ba*

function match(s, pattern)
{
    // write code here
    var dp = new Array();
    for(var i=0; i<s.length+1; i++) {
        dp[i] = new Array();
        for(var j=0;j<pattern.length+1;j++)  {
            dp[i][j] = false
        }

    }

// [s.length + 1][pattern.length + 1];

        dp[0][0] = true;
        for (let i = 1; i < dp[0].length; i ++) {
            if(pattern[i - 1] == '*') dp[0][i] = dp[0][i - 2];
        }
        for (let i = 1; i < dp.length; i ++) {
            for (let j = 1; j < dp[0].length; j ++) {
                if(pattern[j - 1] == '.' || pattern[j - 1] == s[i - 1]) dp[i][j] = dp[i - 1][j - 1];
                else if(pattern[j - 1] == '*') {
                    if(pattern[j - 2] != s[i - 1] && pattern[j - 2] != '.') dp[i][j] = dp[i][j - 2];
                    else dp[i][j] = dp[i][j - 1] || dp[i][j - 2] || dp[i - 1][j];
                }
            }
        }
        return dp[s.length][pattern.length];
}