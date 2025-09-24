window.onload = function () {
  if (document.getElementById("welcomeMsg")) {
    let accNo = sessionStorage.getItem("loggedUser");
    if (accNo) {
      let user = JSON.parse(localStorage.getItem(accNo));
      document.getElementById("welcomeMsg").innerText = `Welcome, ${user.uname}`;
    }
  }
};

function deposit() {
  let accNo = sessionStorage.getItem("loggedUser"); // ✅ get logged-in user
  let amount = Number(document.getElementById("depositAmt").value);

  if (!accNo || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  let storedUser = localStorage.getItem(accNo);
  if (!storedUser) {
    alert("Account not found in localStorage");
    return;
  }

  let user = JSON.parse(storedUser);
  if (!user.balance) user.balance = 0;

  user.balance += amount;
  localStorage.setItem(accNo, JSON.stringify(user));

  alert(`Deposited ₹${amount} successfully!\nCurrent Balance: ₹${user.balance}`);

  document.getElementById("depositAmt").value = "";
}


function withdraw() {
  let accNo = sessionStorage.getItem("loggedUser"); // ✅ get logged-in account
  let amount = Number(document.getElementById("withdrawAmt").value);

  if (!accNo || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  let storedUser = localStorage.getItem(accNo);
  if (!storedUser) {
    alert("Account not found");
    return;
  }

  let user = JSON.parse(storedUser);
  if (!user.balance) user.balance = 0;

  if (amount > user.balance) {
    alert("Insufficient balance!");
    return;
  }

  user.balance -= amount;
  localStorage.setItem(accNo, JSON.stringify(user));

  alert(`Withdrew ₹${amount} successfully!\nCurrent Balance: ₹${user.balance}`);

  document.getElementById("withdrawAmt").value = "";
}

