require('dotenv').config()
const massive = require('massive'),
    express = require('express'),
    app = express(),
    mainCtrl = require('./controller')
    session = require('express-session'),
    {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

    app.use(express.json())

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
    }))
    massive({
        connectionString: CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false
        }
    }).then(db => {
        app.set('db', db)
        console.log('Natalie, your db is connected!')
    }).catch(error => {
        console.log(error)
    })

    app.get('/api/houses', mainCtrl.getHouses) 
                            //receive:nothing send:[{ 
                            // id: 1,
                            // name: 'example',
                            // address: '123 example st',
                            // city: 'Orem',
                            // state: 'UT',
                            // zip: 84081
                            //    }]
    app.post('/api/house')  //receive:req.body{
                            // name: 'example',
                            // address: '123 example st',
                            // city: 'Orem',
                            // state: 'UT',
                            // zip: 84081
                            //  }
                            // Send: Status 200
    app.delete('/api/house/:id') // receive: req.params.id 6
                                // send: status 200

    app.listen(SERVER_PORT, () => {console.log(`Natalie's server is tuned in on port ${SERVER_PORT}`)});
