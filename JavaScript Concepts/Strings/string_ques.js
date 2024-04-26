// Q1. Write a program to count total number of characters in the string(including space)
const st = "Javascript Language";
console.log(st.length)

// Q2. write a program to count total number of words
const words = "Hello Bro How are You";
console.log(words.split(' ').length);

// Q3 wirte a progra to fetch all vowels from the strig
var name = "Cypress Developer Gangadhar";
vowels = 'aeiouAEIOU';
vowelsstring = '';
for(let i of name) {
    // console.log(i);
    if(vowels.includes(i)) {
        vowelsstring+= i;
    }
}
console.log("Vowels from Given String: ",vowelsstring.split(''));

// Q4. write a program to count total number of characters in the string(exclluding space)
const sen = "JavaScript in simple language";
let spaces = 0;
for(let c of sen) {
    if(c === ' '){
        spaces+=1;
    }
}
console.log("Number of character with out spaces: ",sen.length-spaces);

// Q5. Write a program to fetch all words which starts with vowel from given string
const str = "Javascript is simple and easy language";
const newStr = str.split(" ");
// const vow = "aeiouAEIOU";
let res = [];
for(let word of newStr) {
    if('aeiouAEIOU'.includes(word.charAt(0))){
        res.push(word)
    }
}
console.log(res);

// Q6. Write a program to fetch all words which ends with consonest in the given string
let str1 = "Javascript is simple and easy language";
let newstr1 = str1.split(" ");
let res1 = [];
for(let w of newstr1) {
    if(!"aeiouAEIOU".includes(w.charAt(w.length-1))){
        res1.push(w);
    }
}
console.log(res1);

// Q7. write a program to fetch all words which 'a' two or more then two times
let str2 = "Javascript is simple and easy language";
let newstr2 = str2.split(" ");
let res2 = [];
for(let w of newstr2) {
    var count = 0;
    Array.from(w).forEach(function(char) {
        if(char === 'a') {
            count+=1;
        }
    })
    if(count >= 2) {
        res2.push(w)
    }  
}
console.log(res2);

// Q8. write a program to count number of characters of each word in the string
const str3 = "Cypress Developer";
const newstr3 = str3.split(' ');
const res3 = [];
for(let w of newstr3) {
    res3.push(w.length);
}
console.log(res3);

// Q9. write a program to fetch first and last character of each word in the string
let res4 = [];
for(const w of newstr3) {
    res4.push(w.charAt(0) + w.charAt(w.length-1))
}
console.log(res4);

// Q10. write a program to fetch all words which contains 'a' character in the string
let str4 = "Python is simple and easy language";
const newstr4 = str4.split();
for(let w in newstr4) {
    if(w.includes('a')) {
        console.log(w);
    }
}

// Q11. write a program to fetch all words which doesn't contains 'e' character in the string
let str5 = "Python is simple and easy language";
for(let wrd of str5.split(" ")) {
    if(!wrd.includes('e')){
        console.log(wrd);
    }
}

// Q12 Write a program to fetch all words which contains only 4or lessthen 4 characters
lst = [];
for(let w of str5.split(' ')) {
    if(w.length <=4){
        lst.push(w);
    }
}
console.log(lst);

// Q13 Write a program to fetch all words which contain odd number of characters 
lst2 = [];
for(let wor of str5.split(' ')) {
    if(wor.length % 2 != 0){
        lst2.push(wor);
    }
}
console.log(lst2);

// Q14 write a program to fetach all words which start and ends with vowel in the string
let vow = "aeiouAEIOU";
let res5 = [];
for(let w of str5.split(' ')) {
    if(vow.includes(w[0]) && vow.includes(w[w.length-1])) {
        res5.push(w);
        // console.log(w);
    }
}
console.log(res5);