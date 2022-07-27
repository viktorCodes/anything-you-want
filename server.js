const express = require('express');
const app = express();

//READ(GET UNDER THE HOOD)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    
})

//






//LISTEN ON SERVER

app.listen(3000, function(){
    console.log('listening on 3000')
})
