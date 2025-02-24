// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const sendEmail = (email) => {
  const sender = {
    service: "gmail",
    email: "codingninjas2k16@gmail.com",
    pwd: 'slwvvlczduktvhdj'
  }
  
  const sendContent = {
    subject: "Coding Ninjas",
    body: "The world has enough coders; be a coding ninja!"
  }

  const transporter =  nodemailer.createTransport({
    service:sender.service,
    auth: {
      user: sender.email,
      pass: sender.pwd
    }
  });

  const mailOptions = {
    from: sender.email,
    to: email,
    subject: sendContent.subject,
    text: sendContent.body
  }

  transporter.sendMail(mailOptions,(error, info) => {
    if (error){
      console.log("Email is not send due to ", error)
    } else {
      console.log("Email is send: ", info.response)
    }
  })
}

const Solution = () => {
  // Write your code here
  const ri = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  ri.question("What is Your email?",(answer)=>{
    if (answer){
      sendEmail(answer);
    }
    ri.close()
  });
};

export default Solution;
