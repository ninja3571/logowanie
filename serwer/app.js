const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
const port = 3000

const users =[

    {user:"admin",pass:"admin",upr:"admin"},
    {user:"user",pass:"user",upr:"user"},
    {user:"Jan",pass:"Kowalski",upr:"user"}

]


app.get("/get/:user/:pass",(req, res)=>{
    const user = req.params.user
    const pass = req.params.pass

    for(let i=0;i<=users.length-1;i++){
        if(users[i].user==user &&users[i].pass==pass){
            res.send({user:user,upr:users[i].upr})
        }
    }
    res.json({staus:"nieznaleziono"})

})


app.listen(port, ()=>{
    console.log(`Aplikacja dziala na porcie: ${3000}`)
})