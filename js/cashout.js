// cash out money

document.getElementById('cash-out-money-btn').addEventListener('click', function(event){

     //prevent page reload after submit
     event.preventDefault();
     
     //get amount 
     const cashOut = document.getElementById('cash-out-money').value;

     //get PIN number
     const pinNo = document.getElementById('cash-out-pin-no').value;

     if(pinNo === '1234'){

          //get main balance
          const mainBalance = document.getElementById('main-balance').innerText;

          const currentBalance = parseFloat(mainBalance) - parseFloat(cashOut);

          document.getElementById('main-balance').innerText = currentBalance;
     }
     else{
          alert('Invalid PIN No.')
     }
})