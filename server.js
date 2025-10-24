const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Ruta za početnu stranicu
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta za "O nama"
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Ruta za korisnike (JSON)
app.get("/users", (req, res) => {
  const users = [
    { id: 1, ime: "Ana", prezime: "Anić" },
    { id: 2, ime: "Marko", prezime: "Marić" },
    { id: 3, ime: "Ivana", prezime: "Ivić" }
  ];
  res.json(users);
});

// Pokretanje poslužitelja
app.listen(PORT, () => {
  console.log(`Server pokrenut na http://localhost:${PORT}`);
});
