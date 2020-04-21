const express = require('express')


const app = express()

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: false }));

const employees = [
    {
      employeeID: "ESC911",
      name: "Majeed Jordan",
      position: "IT Manager",
    },
    
    {
        employeeID: "ESC001",
        name: "Virgil Abloh",
        position: "Financial Manager",
    },

    
    {
        employeeID: "ECS650",
        name: "Hardy Carpio",
        position: "production manager",
    },

    {
        employeeID: "ESC111",
        name: "Jon Snow",
        position:"Night watch",
        
    },
]

app.get('/',function (req, res){

    res.render('home', {employees});
});


// serve application on port 6723
const port = 6723;
app.listen(port, ()=>{
    console.log(`sever has started on a port ${port}`);
});