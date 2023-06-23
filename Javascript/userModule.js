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

export default user_
