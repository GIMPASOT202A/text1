const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname +'/pulic'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const employees = [
{
    employeeID: "SED100",
    name: "Kelvin Danso Agyemang",
    position: "IT Manager"
},
{
    employeeID: "SED101",
    name: "Duke xorlali",
    position: "Production Manager"
},
{
    employeeID: "SED102",
    name: "Emma Adu",
    position: "Hr Manager"
}
]


app.get('/', (req,res) => { 
 res.render('home', {employees});
});


//Serve application on port 3030
const port = 3030;
app.listen(port, ()=>{
 console.log(`Server has started on port ${port}`); 
})
