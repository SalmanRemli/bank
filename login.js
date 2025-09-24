function login(){
    let accNo = document.getElementById("loginAcc").value.trim();
    let password = document.getElementById("loginPass").value.trim();

    if (!accNo || !password) {
    alert("Please enter account number and password");
    return;
    }

    let storedUser = localStorage.getItem(accNo);
    if(!storedUser){
        alert("User not found.Register Now!!");
        return;
    }

    let user = JSON.parse(storedUser);
    if(user.pass === password){
        alert(`Welcome ${user.uname}`);

    window.location = "./home.html";
    sessionStorage.setItem("loggedUser", accNo);
    }
    else {
    alert("Incorrect password!");
  }
  
}