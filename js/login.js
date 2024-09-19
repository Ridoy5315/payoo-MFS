
document.getElementById('btn-login').addEventListener('click', function(event){
     event.preventDefault();
     console.log('button clicked');

     // get the number

     const loginNumber = document.getElementById('login-number').value;
     console.log(loginNumber);

})