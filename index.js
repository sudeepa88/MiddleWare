const express = require('express');
const app = express();


// const endss = function (req,res,next){
//     //next();
//     res.send("HIJACKED BY MY APP.USE!!");
    
// }

// app.use(endss);

//using our first property "It can execute any code"
const hola = function (req,res,next){
    console.log("Are you getting it?");
    next();
    console.log("Will it get executed?")
}

const demo = function (req,res,next){
    console.log("My second middleware");
    next();
}

app.use(hola);
app.use(demo);

//make changes to request and response object


const huys = function (req,res,next){
    console.log("It WILL DEFINATELY GOT EXECUTED BUT AT WHAT COST !!!");
    req.userName = "Sudeepa";
    next();
}


app.use(huys);
////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/',(req,res)=>{
    const {userName}=req;
    res.send(`HEY ${userName} FROM THIS SIDE NICE TO MEET YOU!!`);
})
///////////////////////////////hiding //a ///SECRET//////////////////////////////

const verify = (req,res,next) => {
    const {password} = req.query;
    if (password === 'apple'){
        return next();
    }
    res.send('Invalid password');
}


app.get('/secret',verify,(req,res)=>{
    res.send('Sometime i wear headphone in public so that i could hear voice from outside');
})

app.listen(3000,()=>{
    console.log('Server started at port 3000!!!! ');
})


