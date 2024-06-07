// Q1 Fetch all even numbers from given Array
let arr1 = [10,11,18,34,10]
let newarr1 = [];
for(let ele of arr1) {
    if(ele % 2 === 0) {
        newarr1.push(ele);
    }
}
console.log(newarr1);

// Q2 Write a program to fetch all string values from array
let arr2 = [10,'a',true,'b',false]
let newarr2 = [];
for(let ele of arr2) {
        if(typeof ele === 'string') {
            // console.log(ele);
            newarr2.push(ele);
        }
}
console.log(newarr2);

// Q3 write a program to count total number of int values in the array
let arr3 = [10,'a',20,true,30,'b',40]
const newarr3 = [];
for(let ele of arr3) {
    if(typeof ele === 'number'){
        // console.log(ele);
        newarr3.push(ele);
    }
}
console.log(newarr3);

// Q4 wirte a program to fetch all palindrome words from array
let arr4 = ["madam","python","dad","language",'eye',"malayalam"];

const palindromeWords = arr4.filter(ele => {
    var lowercaseWord = ele.toLowerCase();
    var reverseWords = ele.split('').reverse().join('');
    // ========== palindrome and start char 'm' ==========
    // return lowercaseWord === reverseWords && ele.charAt(0) === 'm';
    // =========== palindromw and  length > 3
    // return lowercaseWord === reverseWords && ele.length >3;
    // =============== longest palindrome ===================
    return lowercaseWord === reverseWords;

})
console.log(palindromeWords);
var len = palindromeWords.map(ele => {
    console.log(ele);
})
console.log(len);


// const reve = arr4.filter(ele => {
//     // let w = "";
//     for(let i = ele.length-1; i>=0; i--){
//         // w+=ele[i];
//         if(ele === ele[i]){
//             console.log(ele);
//         }
//     }
//     // return w;
// })
// console.log(reve);