// Noakhali Donnation card
document.getElementById('noakhali-donate-button').addEventListener('click', function(event) {
  event.preventDefault();
  const addMoneyInput = document.getElementById('noakhali-input-value').value;
  const balance = document.getElementById('noakhali-donate-amount').innerText;
  const addMoneyNumber = parseFloat(addMoneyInput);
  const balanceNumber = parseFloat(balance);
  if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
    alert("Invalid Donation Amount");
    return;
  }
  else{
    document.getElementById('my_modal_4').showModal();
  }
  const newBalance = balanceNumber + addMoneyNumber;
  document.getElementById('noakhali-donate-amount').innerText = newBalance;
  const myCurrentAmount = parseFloat(document.getElementById('currentAmount').innerText);
  let myCurrentBalance = myCurrentAmount - addMoneyNumber;
  document.getElementById('currentAmount').innerText = myCurrentBalance;
});

// Feni Donnation card
document.getElementById('Feni-donate-button').addEventListener('click', function(event) {
  event.preventDefault();
  const addMoneyInput = document.getElementById('Feni-input-value').value;
  const balance = document.getElementById('Feni-donate-amount').innerText;
  const addMoneyNumber = parseFloat(addMoneyInput);
  const balanceNumber = parseFloat(balance);
  if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
    alert("Invalid Donation Amount");
    return;
  }
  else{
    document.getElementById('my_modal_4').showModal();
  }
  const newBalance = balanceNumber + addMoneyNumber;
  document.getElementById('Feni-donate-amount').innerText = newBalance;
  const myCurrentAmount = parseFloat(document.getElementById('currentAmount').innerText);
  let myCurrentBalance = myCurrentAmount - addMoneyNumber;
  document.getElementById('currentAmount').innerText = myCurrentBalance;
});

// Qouta Donnation card
document.getElementById('Qouta-donate-button').addEventListener('click', function(event) {
  event.preventDefault();
  const addMoneyInput = document.getElementById('Qouta-input-value').value;
  const balance = document.getElementById('Qouta-donate-amount').innerText;
  const addMoneyNumber = parseFloat(addMoneyInput);
  const balanceNumber = parseFloat(balance);
  if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
    alert("Invalid Donation Amount");
    return;
  }
  else{
    document.getElementById('my_modal_4').showModal();
  }
  const newBalance = balanceNumber + addMoneyNumber;
  document.getElementById('Qouta-donate-amount').innerText = newBalance;
  const myCurrentAmount = parseFloat(document.getElementById('currentAmount').innerText);
  let myCurrentBalance = myCurrentAmount - addMoneyNumber;
  document.getElementById('currentAmount').innerText = myCurrentBalance;
});

