import app from "./app";

// Tendremos la ejecución de node para el servidor

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();
