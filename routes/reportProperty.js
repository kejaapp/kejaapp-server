const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/',async(req,res)=>{
	//get the context
	const { report } = req.body;
	
	console.log(report)
	//send an email
	if(!report.email && !report.mobile){
		return res.status(201).send('please provide an email or a contact')
	}
	//send a email message
	let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: true, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
        ciphers:'SSLv3'
        },
        auth: {
            user: 'keja.appp@gmail.com',
            pass: 'nickelodeon@77'
        }
    });
    let mailOptions = {
            from: 'keja.appp@gmail.com',
            to: "sammymusembi77@gmail.com",
            subject: 'report Listed property',
            text:` email : ${report.email}, date: ${report.date}, houseId: ${report.Hid}, phone: ${report.mobile}, complaint: ${report.body} `
        };
        transporter.sendMail(mailOptions,
            function(error,info){
                if(error){
                    console.log(error);
                }
                return res.status(200)
            //    return console.log('Email sent:')
            })
	//return a res status
})

module.exports = router;