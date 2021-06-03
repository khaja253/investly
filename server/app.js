require('./config/config');
require('./models/db');
require('./auth/auth');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const cookieParser = require('cookie-parser');
const passport = require('passport');

var app = express();

app.use(bodyParser.json());
app.use(cors());
//app.use(cookieParser);
app.use(passport.initialize());



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.get("/api/users", (req, res, next) => {
    var peers = [{
            firstName: "Irfan",
            lastName: "Mustafa",
            relation: "Father",
            amount: "$1000",

        },
        {
            firstName: "Noman",
            lastName: "Mustafa",
            relation: "Father",
            amount: "$1000",
        }
    ];
    res.status(200).json({
        peers: peers
    });
});



// routing link
const rtsUsers = require('./routers/user');
const jwtAuth = require('./middleware/check-auth');
//requests

app.post('/api/sign-up', (req, res, next) => {
    console.log(req.headers.authorization.split(" ")[1]);
    console.log("Sign-Up requested");











});




app.post('/api/log-in', rtsUsers);

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51HiphzH5pKkmSLj54sEpIZhCyANPVkLTkbHdG3aitqSfJhXS5aYnxFBeYTnJSJ27MiuaaB5CXUPfZqZDLXFmiMLS00F59qfjhH');



//app.post('/api/sign-up', paymentIntent)

// stripe Call for the Payment 
// async function paymentIntent(req, res, next) {

//     const payment = await stripe.paymentIntents.create({
//         amount: 1000,
//         currency: 'cad',
//         payment_method_types: ['card'],
//         receipt_email: 'jenny.rosen@example.com',
//     });


//     const payment1 = await stripe.paymentIntents.create({
//         amount: 1000,
//         currency: 'cad',
//         payment_method_types: ['card'],
//         receipt_email: 'adsad.rosen@example.com',
//     });

//     console.log(payment, payment1);


// };



// app.post('/api/refresh', rtsIndex);

app.listen(process.env.PORT, () => console.log('listening at PORT ' + process.env.PORT));

module.exports = app;