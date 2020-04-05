const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('BetterthanB4/build'))

    app.get('/',(req, res)=>{
        res.sendFile(path.resolve(__dirname, 'BetterthanB4' , 'build', 'index.html'))
    })
}


app.listen(port);