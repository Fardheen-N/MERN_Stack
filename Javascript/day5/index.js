document.body.style.backgroundColor = 'black'
document.body.style.color = 'white'

const child = document.body.children;


// setTimeout(()=>{child[0].textContent = "lightpink",child[0].style.color = "lightpink"},2000)
// setTimeout(()=>{child[1].textContent = "lightorange",child[1].style.color = "lightorange"},2000)
// setTimeout(()=>{child[2].textContent = "lightgreen",child[2].style.color = "lightgreen"},2000)
// const colors = ['red','blue','green','pink','crimson'] 
// let i=0
// setInterval(()=>{child[0].textContent  = colors[i%5],child[0].style.color = colors[i%5],i++},1000)
// setInterval(()=>{child[1].textContent = colors[i%5],child[1].style.color = colors[i%5],i++},1500)
// setInterval(()=>{child[2].textContent = colors[i%5],child[2].style.color = colors[i%5],i++},2000)

// const tag_1 = document.getElementsByClassName('cse')
// tag_1[0].innerText = 'bankai'
const button  = document.getElementById('login_btn')
const username = document.getElementById('user')
const password = document.getElementById('pass')
const form = document.getElementById('form')
button.addEventListener('click',(event)=>{
    console.log('ddd ')
})
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(username.value , password.value)
})
