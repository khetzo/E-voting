import { createTransport } from 'nodemailer';
import express from 'express';
import { json } from 'body-parser';
const app = express();

app.use(json());

app.post('/send-email', (req, res) => {
    const { email } = req.body;

    // Set up Nodemailer transporter
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    // Email options
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Welcome to Our Service',
        text: 'Thank you for joining our service!'
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
