import express from "express";
import morgan from "morgan";
import languageRoutes from "./routes/language.routes"


const app = express();

//configuraciones
app.set("port",4000);

// middlewars --> son peticiones intermedias
app.use(morgan("dev")); // me permite ver el tipo de peticiones en la terminal
app.use(express.json());
// Rutas
app.use("/api/languages",languageRoutes);


export default app; // exportamos para poder usarla en el archivo index



