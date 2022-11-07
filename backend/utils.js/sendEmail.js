const nodeMailer= require("nodemailer")

const sendEmail = async(options) => {
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}
module.exports=sendEmail