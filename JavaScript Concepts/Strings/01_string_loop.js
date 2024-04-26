// ==========ITERATE STRING ============

// ================ Method-1 ============
const str = "Gangadhar";
for(let i of str) {
    console.log(i);
}

// ================= Method-2 =============
const js = "JavaScript";
for(let i = 0; i<js.length; i++) {
    console.log(js[i]);
} 

// ================= Method-3 =============
const msg = "Hello";
msg.split().forEach(function(c) {
    console.log(c);
});

// ================= Method-4 =============
const desig = "JavaScript Developer";
for(let i in desig) {  // Mostly "in" used for Objects/arrays
    console.log(desig[i]); // Here object name(desing) is mendatery otherwise it retuns index numbers
}
