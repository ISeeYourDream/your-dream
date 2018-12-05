function redirect() {
    window.location.href = "profile.html";
}
function login(){
    let log = document.getElementById('log');
    let pass = document.getElementById('pass');

    if (log.value === "Admin" && pass.value === "1234"
        || log.value === "Gleb" && pass.value === "1111")
            return redirect();
    else
        log.value = "";
        pass.value = "";
        alert("Incorrect login or password!");
    }