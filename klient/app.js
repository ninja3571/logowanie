function checkLogin(){
    const login = document.getElementById("login").value
    const passworld = document.getElementById("passworld").value

    const data = await fetch("http://localhost.3000")

    const user = "admin"
    const adminPass ="admin"

    if(login==user && passworld==adminPass){
        console.log("zalogowano")
        localStorage.setItem('login','admin')
        window.location.href="admin.html"
    }
     else{ 
        console.log("błędny login lub hasło")
        alert("Błędny login lub hasło")
        localStorage.setItem('login','false')
    }
}

function checkAdmin(){
    const admin = localStorage.getItem("login")

    if(window.location.href=="admin.html"){
        if(admin!="admin"){
            window.location.href="login.html"
        }
    }    
}

