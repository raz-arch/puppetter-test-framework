const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const date = require('date-utils');
class Webpage {
    static async generatePDF(url) {
        const browser = await puppeteer.launch({ headless: true }); // Puppeteer can only generate pdf in headless mode.
        const page = await browser.newPage();
        //await page.goto(url, { waitUntil: 'networkidle', networkIdleTimeout: 5000 }); // Adjust network idle as required. 
       await page.goto(url); // Adjust network idle as required. 
        const pdfConfig = {
            format: 'A4',
            printBackground: true,
            margin: { // Word's default A4 margins
                top: '2.54cm',
                bottom: '2.54cm',
                left: '2.54cm',
                right: '2.54cm'
            }
        };
        await page.emulateMedia('screen');
        const pdf = await page.pdf(pdfConfig); // Return the pdf buffer. Useful for saving the file not to disk. 

        await browser.close();

        return pdf;
    }
}

class Email {
    static sendEmail(to, subject, text, filename, fileContent) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
   			 port: 465,
    		secure: true,
    		auth: {
        		user: 'test@gmail.com',
				pass: 'pswd'
			}
		});
		var dateNow = new Date();
		var dd = dateNow.getDate();
		var monthSingleDigit = dateNow.getMonth() + 1,
  	  	mm = monthSingleDigit < 10 ? '0' + monthSingleDigit : monthSingleDigit;
		var yy = dateNow.getFullYear().toString().substr(2);

		var formattedDate =' - '+ dd + '/' + mm + '/' + yy;
		let mailSubject = subject+formattedDate;
		console.log(mailSubject);

        const mailOptions = {
            from: 'test@gmail.com', // Update from email
            to: 'test@test.com',
            subject: mailSubject,
            text: text,
            attachments: [{
                filename: filename,
                content: fileContent
            }]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }

            console.log('Message sent: %s', info.messageId);
        });
    }
}

(async() => {
    const url = 'https://www.google.com';
    const buffer = await Webpage.generatePDF(url);
    Email.sendEmail(
        'test@test.com', // Update to email
        'Automation Test Report',
        'I thought you might enjoy this book!',
        'Alice in Wonderland.pdf',
        buffer);
})();