async function getUser(){
    const login = document.getElementById("login").value
    const passworld = document.getElementById("passworld").value

    const data = await fetch(`http://localhost:3000/get/${login}/${passworld}`);
    const json = await data.json()
    console.log(json)

    if(json.user != undefined){
        localStorage.setItem("upr", JSON.stringify(json))
    } else{
        localStorage.setItem("upr","false")
    }
}

function checkUser(){
    const user = JSON.parse(localStorage.getItem("upr"))

    const url = window.location.href

    if(user.upr != "admin" && url.includes("admin.html")){
        window.location.href = "index.html"
    }
    if((user.upr != "user" || user.upr != "admin") && url.includes("user.html")){
        window.location.href = "index.html"
    }
}