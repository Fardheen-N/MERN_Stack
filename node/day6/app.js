
function add(n1,n2){
   return n1+n2;
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
const multi = (n1,n2) => {
    return n1*n2;
}
module.exports = {add,multi}
// console.log(myFun(num1,num2))
// console.log(myFun(10,30));
