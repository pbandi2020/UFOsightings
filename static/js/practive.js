function printhello() {
    console.log("Hello World!");
}
//undefined
function addition(a,b) {
    return (a+b);
}
//undefined
console.log(addition(4,5));
//VM360:1 9
//undefined
//function calling another function
function doubleaddition(c,d){
    var total = addition(c,d) * 2;
    return total;
}
//Module assesment
console.log(doubleaddition(65,34));
//VM1091:1 198
//Function inside function using arrow

doubleaddition = (c,d) => addition(c,d)*2;
(c,d) => addition(c,d)*2
console.log(doubleaddition(4,5));
//VM1918:1 18
//for loop - module 11.4
let friends = ["Sarah","Greg", "Cindy","jeff"];
function listloop(userlist) {
    for (var i=0; i<userlist.length; i++) {
        console.log(userlist[i]);
    }
}
//for loop practice 11.4
let vegetables = ["Tomatoes","Carrot","Peas","Corn"];
//undefined
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}
VM2373:2 I love Tomatoes
VM2373:2 I love Carrot
VM2373:2 I love Peas
VM2373:2 I love Corn
//undefined
for (var i = 0; i < 5; i++) {
   console.log("I am " + i);
}
VM2378:2 I am 0
VM2378:2 I am 1
VM2378:2 I am 2
VM2378:2 I am 3
VM2378:2 I am 4
//undefined
let data = [1,2,3];