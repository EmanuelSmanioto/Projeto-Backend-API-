import express from "express";

// variável para acessar os métodos express
const app = express();

// rota saída de dados
app.get('/usuarios', (req, res)=>{
    res.json(usuario);
})

app.post('/usuarios', (req, res) => {
    console.log(req.body);
    usuario.push(req.body)
    res.status(201).json({mensagem: "Cliente Cadastrado!"});
})

app.listen(3000, ()=>{
    console.log("Servidor Rodando! ")
})

//ativar o leitor json

app.use(express.json())

let usuario = []

// http://localhost:3000

