const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// Ruta para la página de inicio (home.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "SRC/home.html"));
});

// Ruta para la página de registro (register.html)
app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, "/registro"));
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
