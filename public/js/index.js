import '@babel/polyfill'
import {login,logout} from './login'
import {displayMap} from './mapbox'
import {updateData,updatePassword} from './updateAccount'
import { showAlert } from './alert';
console.log('Parcel');

const loginForm = document.querySelector('.form--login')
const logoutBtn = document.querySelector('.nav__el--logout')
const userForm = document.querySelector('.form-user-data')
const userPass = document.querySelector('.form-user-password')
const mapbox = document.getElementById('map')
if(mapbox){
  const locations = JSON.parse(document.getElementById('map').dataset.locations)
  displayMap(locations)
}
if(loginForm){
  loginForm.addEventListener('submit' , e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email , password)
  })
}
if(logoutBtn){
  logoutBtn.addEventListener('click', logout)
}

if(userForm){
  userForm.addEventListener('submit', e => {
    e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if(name.length > 0 && email.length > 0){
      updateData(name,email);
    }
    else{
      showAlert('error', 'Please verify your fill in the info to update')
    }
  })
}

if(userPass){
  console.log(userPass);
  userPass.addEventListener('submit', async e => {
    e.preventDefault()
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    if(
      passwordCurrent.length > 0 && 
      password.length > 0 && 
      passwordConfirm.length > 0)
      {
      await updatePassword({passwordCurrent,password,passwordConfirm});
    }
    else{
      showAlert('error', 'Please verify your fill in the info to update')
    }
    document.getElementById('password-current').value=''
    document.getElementById('password').value=''
    document.getElementById('password-confirm').value=''
  })
}