const user_ = [
    {
    id : 1,
    name : 'zoro',
    age :22,
    email : 'zoroLost@gmail.com'
    }
];

export const addUser = (new_user) => {
   user_.push(new_user)
}

export const editUser = (id,key = 'name',value = 'xyz') => {
   const flag = user_.findIndex(user => user.id == id);
   if(flag != -1) user_[flag][key]=value
}

export const deleteUser = (id) =>{
    const flag = user_.findIndex(user => user.id==id)
    // if(flag!=-1) delete user_[flag]  // method-1
    if(flag!=-1) user_.splice(flag,1) //method-2
}

export const editMultipleUser = (id,updateValues = {name : 'bankai',age :10})=>{
    const flag = user_.findIndex(user => user.id == id)
    if(flag!=-1) user_[flag] = {...user_[flag],...updateValues}
}
const user_1 ={
    id : 34,
    name : 'saskae',
    age : 12,
    email : 'imLostToo@gmail.com'
}
const user_2 ={
    id : 2,
    name : 'Tanjiro',
    age : 12,
    email : 'imDS@gmail.com'
}
const user_3 ={
    id : 3,
    name : 'Eren jeager',
    age : 18,
    email : 'humanSlayer@gmail.com'
}
addUser(user_1)
editUser(1)
delete_(34)
editMultiple(1)
console.log(user_)
export default user_
