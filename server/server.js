require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');
const port = process.env.PORT || 5000;

// server that will be utilized later on;
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
})

app.use("/", router);

// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

//router: Send email to my acc
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const mail = {
    from: fullName,
    to: process.env.EMAIL_USER,
    subject: " Viewed Your Portfolio ",
    html: `
            <p> Name : ${fullName} </p>
            <p> Email: ${email} </p>
            <p> Phone: ${phone} </p>
            <p> Message: ${message || 'Im Interested!'} </p>
        `,
  };

  // Send the email
  transporter.sendMail(mail, (error, info) => {
    res.json(error ? error : { code: 200, status: 'Message Sent'})
  });
});

app.listen(port, ()=> console.log('Server is running on port http://localhost:'+port));
