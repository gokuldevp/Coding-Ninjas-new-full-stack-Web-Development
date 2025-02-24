// 1. Import the necessary modules
import * as nodemailer from 'nodemailer';
import * as user from './data.js';

// 2. Function to send an email
const sendEmail = async (sender, receiveremail) => {

    // 1. Create an email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Email service provider
        auth: {
            user: sender.email, // Sender's email address
            pass: sender.pwd // Sender's email password (consider using environment variables for security)
        }
    });
    
    // 2. Configure email content
    const mailOptions = {
        from: sender.email, // Sender's email address
        to: receiveremail, // Receiver's email address
        subject: "Test Message", // Subject of the email
        text: "Test Message" // Body of the email
    };
    
    // 3. Send the email
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully'); // Log success message
    } catch (error) {
        console.log('Email send failed with error: ' + error); // Log error message
    }
}

// 3. Call the sendEmail function to send an email to the receiver using sender's information from 'data.js'
sendEmail(user.sender, user.receiver.email);

// Function to create a test email address
const createTestEmail = (num) => {
    return "ttpvt_test" + num + "@yopmail.com" // Generate test email address using a number
}

// Loop to send emails to 1000 test email addresses
for (let i = 0; i <= 100; i++) {
    sendEmail(user.sender, createTestEmail(i)); // Send email to each generated test email address
}
