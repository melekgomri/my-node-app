const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./routes/userRoutes"));

app.listen(3000, () =>
    console.log("🚀 Serveur démarré sur http://localhost:3000")
);
