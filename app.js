
console.log("Q1 longest word");
let str = "i love dogs"

function longestWord() {
    let words = str.split(" ")
    let longestWord = ""
    for (let val of words) {
        // console.log(val);
        if (val.length > longestWord.length) {
            longestWord = val;
        }
    }
    return longestWord;
}
console.log(longestWord())

// ---------------------------------------------

console.log("Q2 letter changes");

let A_code = "A".charCodeAt(0)
let Z_code = "Z".charCodeAt(0)
let a_code = "a".charCodeAt(0)
let z_code = "z".charCodeAt(0)


function letterChange(str) {
    let output=""
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i)

        if (code >= A_code && code <= Z_code) {
            code = A_code + (code - A_code + 1) % 26
        } else if (code >= a_code && code <= z_code) {
            code = a_code + (code - a_code + 1) % 26
        }
        let char = String.fromCharCode(code)

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
            char = char.toUpperCase()
            output==char

    }
    return output;

}
letterChange("hello*3")


console.log("Q3 simple adding");
let num=12
function simpleAdding(){
let sum=0;

for(let i=0;i<=num; i++){
    sum+=i
}
return sum

}
console.log(simpleAdding())

// -----------------------------------------------------
console.log("Q4 letter capitalize");

function letterCapitalize(str){
let arr=str.split("")

for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
}
let str2=arr.join("")
console.log(str2);
}
console.log(letterChange("hello world"))

// -----------------------------------------------------
console.log("Q5 simple symbols");

function simpleSymbols(str2){

}
console.log(simpleSymbols());

// -----------------------------------------------------
console.log("Q6 check nums");

function checkNums(num1, num2){
    if(num1==num2){
        return -1
    }else if(num2>num1){
        return true;
    }else{
        return false
    }

}
console.log(checkNums(67,67));

// -----------------------------------------------------
console.log("Q7 time convert");

function timeConvert(num){
let hours=Math.floor(num/60)
let minutes=num%60
let str=hours + ":" +minutes
return str;
}
console.log(timeConvert(126));

// -----------------------------------------------------
console.log("Q8 first reverse");

function firstRev(str4){
let emptyStr=""
for(let i=str4.length;i>=0;i--){
    console.log(str4[i]);
}
}
console.log(firstRev('i love code'));

// -----------------------------------------------------
console.log("Q8 first factorial");

function firstFact(num){
let fact=1
for(let i=1;i<=num;i++){
    fact*=i
}
return fact
}
console.log(firstFact(8));
// -----------------------------------------------------
console.log("Q9 AB check");


function ABcheck(str){
    for(let i=0;i<=str.length;i++){
        console.log(str[i]);
    }

}
console.log(ABcheck('after badly'));