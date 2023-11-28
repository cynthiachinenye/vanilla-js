// console.log (document.getElementById('form-tag'));
// const form = document.querySelectorAll('h1');
// console.log(form)
//  const ul = document.querySelector('.items');
//  console.log(ul);
//  ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText ='brad';
// ul.lastElementChild.innerHTML='<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background ='red'

btn.addEventListener('mouseout', (e)=> {
    e.preventDefault();
    document.querySelector('#form-tag').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    console.log(e)

});
const myForm = document.querySelector('#form-tag');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
 function onSubmit(e){
    e.preventDefault();
     console.log(nameInput.value);
     if(nameInput.value === ''||  emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(()=> msg.remove(), 3000);

     }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear fields
        nameInput.value ='';
        emailInput.value="";
     }

 }