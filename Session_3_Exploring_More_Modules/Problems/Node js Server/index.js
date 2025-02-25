// Problem statement
// Learn to develop a Node.js server for handling POST requests, storing user data, integrating Nodemailer for email confirmation, and emitting custom events, providing practical experience in server-side handling and email integration.

// Objectives

// i) Implement a Node.js server to handle a POST request.
// ii) Extract user's name, email, and message from the request.
// iii) Append the extracted data asynchronously to a file named "queries.txt".
// iv) Use Nodemailer library to send a confirmation email to the email address specified in the POST request.
// v) Emit a custom event, "mailSent" to confirm successful email delivery.

// Note:

// Ensure the server listens on port 5000 as provided in the starter code.


import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      // TODO: Append user query in "queries.txt"
      fs.appendFile('queries.txt',queryString,(error)=> {
        if (error) {
          console.log(error);
          res.end("error: "+error);
        } else {
          console.log("completed adding name details!");
        }
        

      })

      // Nodemailer mailOptions
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query received",
        text: "We have received your query and will get back to you soon.",
      };

        // Use Nodemailer to send confirmation email
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error("Error sending email:", err);
            res.end("Error sending email");
            return;
          }

          // Emit "mailSent" event
          customEvent.mailSent(email);

          res.end("Query received");
        });
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log("custom event 'mailSent' emitted");
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
