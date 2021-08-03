const path = require('path')
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(require('cors')());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../build')));

app.post('/contato', (req, res, next) => {

    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const mensagem = req.body.mensagem; 

    res.json({
        nome,
        email,
        telefone,
        mensagem
    });
    
    // const output = `
    //   <p>Você tem um novo Contato.</p>
    //   <h3>Detalhes do Contato</h3> 
    //   <ul>  
    //     <li>Name: ${req.body.nome}</li>
    //     <li>Email: ${req.body.email}</li> 
    //     <li>Telefone: ${req.body.telefone}</li>
    //   </ul>
    //   <h3>Mensagem</h3>
    //   <p>${req.body.mensagem}</p>
    // `;
    
    // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     // host: 'mail.YOURDOMAIN.com',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: 'claudomiromonteiro@gmail.com', // generated ethereal user
    //         pass: 'antoniocarlos'  // generated ethereal password
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    // });

    // setup email data with unicode symbols
    // let mailOptions = {
    //     from: `Contato pelo Site!!! "${req.body.email} 👻" <${req.body.nome}>`, // sender address
    //     to: 'claudomiromonteiro@gmail.com', // list of receivers
    //     subject: 'Contato pelo Site.', // Subject line
    //     // text: 'Hello world?', // plain text body
    //     html: output // html body
    // };

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {

    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.res);
    //         console.log(res.body)
    //         res.json(res.body);
    //     }

    // });
});
 
app.listen (3000, () => {
    console.log('Servidor iniciado na porta 3000!')
    console.log(nome)
});
