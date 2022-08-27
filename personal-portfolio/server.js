require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.send((req, res) => {
  res.send("Portfolio backend up and running!");
})
app.use("/", router);
app.listen(PORT, (conn) => console.log(`Server Running on ${PORT}`));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.REACT_APP_NODEMAILER_GMAIL_EMAIL_ADDRESS,
    pass: process.env.REACT_APP_NODEMAILER_GMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.REACT_APP_NODEMAILER_GMAIL_EMAIL_ADDRESS,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent!" });
      console.log("Message Sent!");
    }
  });
});
