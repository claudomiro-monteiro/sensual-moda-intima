const mailer = require('nodemailer');

module.exports = (email, nome, telefone, mensagem) => {
    const smtp = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, //SSL/TLS
        // service: 'gmail',
        auth: {
            user: 'claudomiromonteiro@gmail.com',
            pass: 'antoniocarlos'
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
        to: 'claudomiromonteiro@gmail.com',
        subject: `${nome} te enviou uma mensagem`,
        // text: mensagem,
        html: output
    }
    
    // if(anexo){
    //     console.log(anexo);
    //     mail.attachments = [];
    //     mail.attachments.push({
    //         filename: anexo.originalname,
    //         content: anexo.buffer
    //     })
    // }
    
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