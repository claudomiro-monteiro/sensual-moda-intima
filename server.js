const path = require('path');
const express = require('express');

const app = express();
 
app.use(require('cors')());
app.use(express.json());
 
const upload = require('multer')();
app.post('/contato', upload.single(''), (req, res, next) => { 

    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    const mensagem = req.body.mensagem;
    // const anexo = req.file;

    require('./server/nodemail')(email, nome, telefone, mensagem)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
})

app.use(express.static(path.join(__dirname, 'build')));
 
// const server = http.createServer(app); 
app.listen(process.env.PORT || 3000);
console.log("Servidor escutando na porta 3000...");
