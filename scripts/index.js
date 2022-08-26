document.querySelector('#signInBtn').addEventListener('click',goToSignin)
function goToSignin(){
    console.log(event)
  window.localStorage.href = 'sign_in.html'
}
goToSignin()