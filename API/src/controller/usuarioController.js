const { send } = require("process");
const { login } = require("../repository/usuarioRepository");

server.post('/usuario/login', async(req,resp)=>{
    try{
        const {email,senha} = req.body;
        const resposta = await login(email,senha);
        if(!resposta){
            throw new Error('Credencias invalidas');
        }
        resp.send(resposta) 
    }
    catch(err){
        resp.status(401).send({erro:err.message});
    }
})

export default server;