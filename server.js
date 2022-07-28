const express = require('express');
const bodyParser = require('body-parser');
const MongoClient =  require('mongodb').MongoClient
const app = express();


MongoClient.connect('mongodb+srv://viktorCodes:*****@cluster0.mg9we.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

 app.use(bodyParser.urlencoded({extended: true}))
 app.use(express.static('public'))

    //READ(GET UNDER THE HOOD)
app.get('/', (req, res) => {
   // res.sendFile(__dirname + '/index.html')
    db.collection('quotes').find().toArray()
    .then(results => {
        res.render('index.ejs', {quotes: results})
    })
   .catch(error => console.error(error)) 
  
    
})

//CREATE(POST UNDER THE HOOD)

app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
    .then(result =>{
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

app.set('view enjine', 'ejs')


//LISTEN ON SERVER

app.listen(3000, function(){
    console.log('listening on 3000')
})


})
.catch(console.error)









