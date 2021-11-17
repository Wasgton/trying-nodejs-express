const express = require('express')
const bodyParse = require('body-parser');

const userRoutes = require('./routes/usrRoutes')

const app = express();
app.use(bodyParse.urlencoded({extended:false}))
const port = 3000;

userRoutes(app);
app.get('/',
    (
        req,
        res
    ) => res.send("Hello World")
);

app.listen(
    port,
    console.log('Server On')
);
