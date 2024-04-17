const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const fs = require("fs");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', // TUKI RABS DAT TIST MEIL IS KERGA SE POSILJA
        pass: '' // TO JE TREBA ZAMENJAT S GMAIL NEKIM PRIVATE KEYOM
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
    const html = String(fs.readFileSync("public/wudu2.1.html"));

    res.send(html);
});

app.get('/contact', (req, res) => {
    const html = String(fs.readFileSync("public/wudu-kontakt.html"));

    res.send(html);
});

app.get('/menu', (req, res) => {
    const html = String(fs.readFileSync("public/vaja_menu_page.html"));

    res.send(html);
});

app.get('/reservation', (req, res) => {
    const html = String(fs.readFileSync("public/wudu-rezervacije.html"));

    res.send(html);
});
app.get('/gallery', (req, res) => {
    const html = String(fs.readFileSync("public/galerija.html"));

    res.send(html);
});

app.post('/api/mail', async (req, res) => {
    const { fullName, priimek, email, phone, mess } = req.body;
    console.log(req.body)
    const mailOptions = {
        from: 'vajda.peter101@gmail.com',
        to: email,
        subject: 'Sporočilo wudu',
        html: `<p>Ime: ${fullName}</p><br><p>Priimek: ${priimek}</p><br><p>Email: ${email}</p><br><p>Phone: ${phone}</p><br><p>Message: ${mess}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("error");
        } else {
            console.log('Email sent: ' + info.response);
            res.send("success");
        }
    });
})





app.post('/api/mail-reservation', async (req, res) => {
    const { fullName, priimek, email, phone, mess, cas, dan, stOseb  } = req.body;
    console.log(req.body)
    const mailOptions = {
        from: 'vajda.peter101@gmail.com',
        to: email,
        subject: 'Sporočilo wudu',
        html: `<p>Ime: ${fullName}</p><br><p>Priimek: ${priimek}</p><br><p>Email: ${email}</p><br><p>Phone: ${phone}</p><br><p>Message: ${mess}</p><br><p>Čas: ${cas}</p><br><p>Datum: ${dan}</p><br><p>Št oseb: ${stOseb}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("error");
        } else {
            console.log('Email sent: ' + info.response);
            res.send("success");
        }
    });
})




app.listen(3000, () => {
    console.log("Server is running on port 3000 | http://localhost:3000/ ");
})



