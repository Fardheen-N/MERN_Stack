// let strk = 'malayalam'
// let l = 0
// let r = strk.length-1
// let flag =0
// while(l<r){
//   if(strk[l]!=strk[r]){
//     flag = 1
//     break
//   }
//   l++;r--;
// }
// if(flag==0) console.log('Its a palindrome')
// else console.log('its not a palindrome')

//  obj = {
//     a:'luffy',
//     b:'zoro',
//     c:'nami'
// }

// for(let key in obj){
//     console.log(key)
// }

// let sece_name = [1,2,3,4,5]

// sece_name.forEach(ele => {
//     console.log(ele*ele)
// });

// let baka = sece_name.map(ele => ele);
// console.log(baka)

// let names_obj = [
//     {
//         names: "el",
//         dob: 2001
//     },
//     {
//         names: "kuru kuru",
//         dob: 2003
//     },
//     {
//         names: "gear-5",
//         dob: 2004
//     },
//     {
//         names: "bankai",
//         dob: 2008
//     }
// ]
// let names_ = names_obj.filter(obj => obj.dob > 2002).map(obj => obj.names);
// console.log(names_);

// let emp = [
//     {
//         name : 'ani',
//         age : '20',
//         gender : 'M',
//         salary : 23000
//     },
//     {
//         name : 'kani',
//         age : '20',
//         gender : 'M',
//         salary : 26000
//     },
//     {
//         name : 'dhivya',
//         age : '20',
//         gender : 'F',
//         salary : 27000
//     },
//     {
//         name : 'waseem',
//         age : '19', 
//         gender : 'M',
//         salary : 29000
//     },
//     {
//         name : 'ana de armas',
//         age : '34',
//         gender : 'F',
//         salary : 35000
//     }
// ]

// let short_listed = emp.filter(emp =>emp.salary >= 25000).map(emp => ({name:emp.name,age:emp.age}));
// console.log(short_listed)

// let arrk = [10,20,30,40,50,60,70,80,90,100]
// let [a1,a2, ,a4,a5,a6,...a7]=arrk
// console.log(a1,a2,a4,a5,a6,a7)

let na = {
    name : 'ana de armas',
    age : '34',
    gender : 'F',
    salary : 35000
}
// let {name ,age,...rem} = na
// console.log(name,age,rem)

// setInterval(()=>console.log("kikiki"),3000)

// let abc = fetch('https://jsonplaceholder.typicode.com/todos/1')
// abc      
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(()=> console.log('error'))

console.log(JSON.stringify(na));

const promise_x = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('worked')
    },3000)
})
promise_x.then(value => console.log(value))
        .catch(()=> console.log('error'))

const apiCall = async() => {
    const promise_from_api = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await promise_from_api.json()
    console.log(data)
}
apiCall();