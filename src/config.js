import {config} from "dotenv" // 

config(); // coloca a disposición las variables de entornos que 
          // hallamos configurado en el archivo .env

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
}