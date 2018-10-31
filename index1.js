//importamos
express = require("express");

//instanciamos
const app = express();
/*
const bodyParser = require("body-parser");
*/
// ruteamos
app.get("/", function(req, res) {
  res.send("Hola mundo");
});

app.get("/inicio", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/faq", function(req, res) {
  res.sendFile(__dirname + "/public/ayuda.html");
});



app.get("/json", function(req, res) {
  // Indicamos el tipo de contenido a devolver en las cabeceras de nuestra respuesta
  res.contentType("application/json");
  res.sendFile(__dirname + "/public/ejemplo.json");
});

//modulos externos

var posts = require("./lib/posts");

app.get("/mensaje", function(req, res) {
  res.send(posts.mensaje());
});

app.get("/posts", function(req, res) {
  posts.getPosts(req, res);
});

app.get("/posts/:id", function(req, res) {
  posts.getPost(req, res);
});


/*
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.post("/posts", function(req, res) {
  posts.setPost(req, res);
});
*/

// escuchamos
app.listen(9000);

console.log(`Server on %s ${app.settings.env}`);
