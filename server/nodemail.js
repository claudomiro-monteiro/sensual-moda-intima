require("dotenv").config();
const mailer = require('nodemailer');

module.exports = (email, nome, telefone, mensagem) => {
    const smtp = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, //SSL/TLS
        // service: 'gmail',
        auth: {
            user: process.env.USER_NAME,
            pass: process.env.PASS_WORD
        }
    })

    const output = `
      <p>Você tem um novo Contato.</p>
      <h3>Detalhes do Contato</h3> 
      <ul>  
        <li>Name: ${nome}</li>
        <li>Email: ${email}</li> 
        <li>Telefone: ${telefone}</li> 
        
      </ul>
      <h3>Mensagem</h3>
      <ul>
      <li><p>${mensagem}</p></li>
      </ul>
      
    `;
    
    const mail = {
        from: email,
        to: process.env.USER_NAME,
        subject: `${nome} te enviou uma mensagem`,
        html: output
    }
    
    return new Promise((resolve, reject) => {
        smtp.sendMail(mail)
            .then(response => {
                smtp.close();
                return resolve(response);
            })
            .catch(error => {
                smtp.close();
                return reject(error);
            });
    })
}