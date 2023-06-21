(function sum(n1,n2){
    if(typeof(n1)=='string'||typeof(n2)=='string')
    return 'invalid number';
    else
    return n1+n2;
})(20,40);

// console.log(sum('thy',10))

const sum1 = (n1,n2) => n1*n2
console.log(sum1(20,30))

const cal = (n1,n2,opr) =>{
    return opr(n1,n2)
}
let str = 'im in SECE'
console.log(str.replace('i','e'))
console.log(str.replaceAll('i','e'))
console.log(str.trim())
console.log(cal(10,20,(n1,n2)=>n1+n2))

let list = [1,2,3,'k','bankai']
list.push(10)
list.pop()
list.unshift(100)
list.shift()
list.push(4,5,6,7,8)
console.log(list)

for( i in list){
    console.log(list[i])
}

let names = ['ani','moon','parami','waseem','luffy']
console.log(names.slice(0,3))
let copy = names.slice(0,3)
console.log(copy)
console.log(names)

let nm = 'harish'
console.log(nm.slice(1,nm.length))
console.log(nm)

let ar = 'abcdefghijklmnop'
console.log(ar.split(""))
let arr = [1,2,3,4,'sece','moon']
console.log(arr.join(""))
console.log(ar.toUpperCase())

for( i in names){
    console.log(names[i].charAt(0).toUpperCase()+names[i].slice(1))
}