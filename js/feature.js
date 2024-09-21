document.getElementById('cashOut-btn').addEventListener('click', function(){

     document.getElementById('cashOut-main').classList.remove('hidden');

     document.getElementById('addMoney-main').classList.add('hidden');

});

document.getElementById('addMoney-btn').addEventListener('click', function(){

     document.getElementById('addMoney-main').classList.remove('hidden');

     document.getElementById('cashOut-main').classList.add('hidden');
})