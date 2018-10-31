express = require("express");
mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const UserSchema = require("./lib/UserSchema")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Acces-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
mongoose
.connect(
  //mongodb+srv://admin:<PASSWORD>@cluster0-zzsuc.mongodb.net/test?retryWrites=true
  "mongodb+srv://admin:PJWVzrGI25mxoCJn@cluster0-pxjwu.mongodb.net/infoapp_bd?retryWrites=true",
  {useNewUrlParser:true}
)
.then(() => {
  console.log("connected");
})
.catch(err => {
  console.log("err", err);
});
app.get("/", (req, res)=>{
  res.send("InfoApp proyectos")
});
app.get("/usuarios", (req, res)=>{
// res.contentType("application/json");
// res.sendFile(__dirname+"/usuarios.json");
  UserSchema.find({}, function(err, users) {
     res.json(users);
  });
});
//cambiarlo porque está pidiendo el archivo con los datos
app.get("/integrantes", (req, res)=>{
res.contentType("application/json");
res.sendFile(__dirname+"/integrantes.json");
});

app.get("/preguntas", (req, res)=>{
res.contentType("application/json");
res.sendFile(__dirname+"/preguntas.json");
});

app.get("/respuestas", (req, res)=>{
res.contentType("application/json");
res.sendFile(__dirname+"/respuestas.json");
});

app.get("/conceptos", (req, res)=>{
res.contentType("application/json");
res.sendFile(__dirname+"/conceptos.json");
});

app.get("/preguntasyrespuestas", (req, res)=>{
res.contentType("application/json");
res.sendFile(__dirname+"/preguntasyrespuestas.json");
});

app.get("/proyectos", (req, res)=>{
res.contentType("application/json");
res.sendFile(__dirname+"/proyectos.json");
});

app.post("/usuarios", (req, res) => {
  res.send(`Recibido ${JSON.stringify(req.body)}`);
});


app.post("/CreateUsuario", (req, res) => {
  // console.log(req.body);
  var user = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    perfil: req.body.perfil
  }
  UserSchema.create(user, function(err, user){
    if(err) return err;
    else { res.json(user); }
    });
});
app.listen(3000);
console.log(`Servidor on ${app.settings.env}`);
