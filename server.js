const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: true}))

//READ(GET UNDER THE HOOD)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    
})

//CREATE(POST UNDER THE HOOD)

app.post('/quotes', (req, res) => {
    console.log(req.body)
})






//LISTEN ON SERVER

app.listen(3000, function(){
    console.log('listening on 3000')
})
