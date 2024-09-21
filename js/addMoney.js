// add money
document.getElementById('add-money-btn').addEventListener('click', function(event){
     //prevent reload page after form submit
     event.preventDefault();

     //get add Money input
     const addedMoney = document.getElementById('add-money').value;

     //get PIN NO
     const pinNo = document.getElementById('pin-no').value;

     if(pinNo === '1234'){

          //get the main balance
          const mainBalance = document.getElementById('main-balance').innerText;

          const currentBalance = parseFloat(mainBalance) + parseFloat(addedMoney);

          document.getElementById('main-balance').innerText = currentBalance;

     }
     else{
          alert('Invalid PIN Number');
     }
     addedMoney.value = '';
     pinNo.value = '';
})