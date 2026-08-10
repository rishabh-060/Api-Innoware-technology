import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_App_id,
    pass: process.env.NODEMAILER_App_Pass,
  },


});

async function sendMail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: `InnoWare Technology ${process.env.NODEMAILER_App_id}`,
      to,
      subject,
      text,
      html,
    });
    
    return {info, success : true}
  } catch (error) {
    
    return {error, success : false}
  }
}

export default sendMail;