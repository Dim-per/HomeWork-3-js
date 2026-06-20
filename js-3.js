let result = 5 + 5 + "5";
console.log('result =', result);
console.log('type result:', typeof result);
//2
let email = "example@gmail.com";
let hasAtSumbol = email.includes("@");
let emailLength = email.length;
console.log("email:", email);
console.log('Містить символ "@":', hasAtSumbol);
console.log('Кількість символів:', emailLength);
//3
let word1 = "my";
let word2 =  "name";
let word3 = "is";

let fullName = word1 + " " + word2 + " " + word3;
fullName += " " + "viktor";
console.log("fullName:", fullName);
//4
let UserName = "alex";
let payment = 300;
let massage = `Дякуємо, ${UserName}! До сплати ${payment} гривень`;
console.log(massage);