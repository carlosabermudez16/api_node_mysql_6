import {getConnetion} from "./../database/database"

// ENTREGANDO PETICIÓN GET------------------------------
const getLanguages = async (request,response)=>{
    try {
        const connection = await getConnetion();
        const result = await connection.query("SELECT id,name,programmers FROM languages;");
        response.json({message: result});    

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

    
};

// ENTREGANDO PETICIÓN GET POR ID------------------------------
const getLanguage_id = async (request,response)=>{
    try {
        const { id } = request.params;
        const connection = await getConnetion();
        const result = await connection.query("SELECT id,name,programmers FROM languages WHERE id=?;",id);
        response.json({message: result});    

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

    
};

// RESIBIENDO PETICIÓN POST------------------------------
const addLanguage = async (request, response)=>{
    try {
        const {name,programmers} = request.body;
        
        const language = { name, programmers};
        
        if(name===undefined || programmers===undefined){
            response.status(400).json({message:'Bad Request. Please fill all field'})
        }

        const connection = await getConnetion();
        const result = await connection.query("INSERT INTO languages SET ?", language);

        response.json({message: result});

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
};

// ELIMINANDO DATOS CON PETICIÓN DELETE------------------------------
const updateLanguage = async (request,response)=>{
    try {
        
        const { id } = request.params;
        const {name,programmers} = request.body;
        
        const language = {name, programmers};
        
        if(id===undefined ||name===undefined || programmers===undefined){
            response.status(400).json({message:'Bad Request. Please fill all field'})
        }
        
        const connection = await getConnetion();
        const result = await connection.query("UPDATE languages SET ? WHERE id=?;",[language, id]);
        response.json({message: result});    

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

    
};

// ELIMINANDO DATOS CON PETICIÓN DELETE------------------------------
const delLanguages = async (request,response)=>{
    try {
        const { id } = request.params;
        const connection = await getConnetion();
        const result = await connection.query("DELETE FROM languages WHERE id=?;",id);
        response.json({message: result});    

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

    
};


export const methods = {
    getLanguages,
    getLanguage_id,
    addLanguage,
    updateLanguage,
    delLanguages
};


