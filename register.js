function register(){
    user = {
        uname:uname.value,
        acc:acc.value,
        pass:pass.value
    }
     if (!user.acc || !user.uname || !user.pass) {
    alert("Please fill all fields");
    return;
  }

    if (localStorage.getItem(user.acc)){
    alert("User already exists");
    }
    else{
    localStorage.setItem(user.acc, JSON.stringify(user));
    alert("User registered successfully!");
    }
    acc.value = "";
    uname.value = "";
    pass.value = "";
    window.location = './login.html'
}