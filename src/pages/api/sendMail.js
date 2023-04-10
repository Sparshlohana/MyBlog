import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_EMAIL_ID,
        pass: process.env.GMAIL_PASSWORD,
    },
});

export default function handler(req, res) {
    // send email to the user
    // console.log(req.body);
    const body = req.body;
    try {
        const mailOptions = {
            from: process.env.GMAIL_EMAIL_ID,
            to: body.email,
            subject: `Thanks ${body.name} for contacting us`,
            text: `We have received your message \n ${body.description} and will get back to you soon.`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
                res.json({ success: true });
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: error.message });
    }

}


