function shortPalindrome(s) {

    let character4Palindrom = Array(26).fill().map(()=>Array(26).fill().map(()=>Array(4).fill(0)))
    for (let i = 0; i<s.length; i++) {
        let c = calculateCharCode(s[i]);
        for (let j = 0; j < 26; j++) {
            character4Palindrom[c][j][3] += character4Palindrom[c][j][2];
            character4Palindrom[j][c][2] += character4Palindrom[j][c][1];
            character4Palindrom[j][c][1] += character4Palindrom[j][c][0];
            character4Palindrom[c][j][0] +=1;
        }   
    }

    let result = 0;
    for (let i = 0; i<26;i++) {
        for (let j = 0; j < 26; j++) {
            result += character4Palindrom[i][j][3];
        }
    }
    return result%1000000007;
}

function calculateCharCode(c) {
    return c.charCodeAt(0)-'a'.charCodeAt(0);
}

// a
// ab
// abb
// abba

console.assert(shortPalindrome("ghhggh")===4, "4 instead of " + shortPalindrome("ghhggh"))
console.assert(shortPalindrome("kkkkkkz")===15)
console.assert(shortPalindrome("abbaab")===4)
console.assert(shortPalindrome("akakak")===2)
console.assert(shortPalindrome("")===0)
console.assert(shortPalindrome("a")===0)
console.assert(shortPalindrome("aa")===0)
console.assert(shortPalindrome("aac")===0)
console.assert(shortPalindrome("acca")===1)
console.assert(shortPalindrome("bacca")===1)
// console.log(shortPalindromeOld("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"))

function shortPalindromeOld(s) {
    let result = 0;
    for (let a = 0; a < s.length-3; a++) {
        for (let b = a+1; b < s.length-2; b++) {
            for (let c = b+1; c < s.length-1; c++) {
                for (let d = c+1; d < s.length; d++) {
                    if (s[a] === s[d] && s[b] === s[c]) {
                        // console.log(a,b,c,d,s[a]+s[b]+s[c]+s[d]);
                        result +=1;
                    }
                }
            }
        }
    }
    // return result%(10^9+7);
    return result;
}

function shortPalindromePerformantButMemoryExtensive(s) {

    let character4Matrix = Array(26).fill().map(()=>Array(26).fill().map(()=>Array(26).fill().map(()=>Array(26).fill(0))))
    let character3Matrix = Array(26).fill().map(()=>Array(26).fill().map(()=>Array(26).fill(0)))
    let character2Matrix = Array(26).fill().map(()=>Array(26).fill(0))
    let character1Matrix = Array(26).fill(0)
    for (let i = 0; i<s.length; i++) {
        let c = calculateCharCode(s[i]);
        for (let j = 0; j < 26; j++) {
            character4Matrix[c][j][j][c] += character3Matrix[c][j][j];
            character3Matrix[j][c][c] += character2Matrix[j][c];
            character2Matrix[j][c] += character1Matrix[j];
        }
        character1Matrix[c]+=1;
    }

    let result = 0;
    for (let i = 0; i<26;i++) {
        for (let j = 0; j < 26; j++) {
            result += character4Matrix[i][j][j][i];
        }
    }
    return result%1000000007;
}