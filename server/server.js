 // database variables
 const express = require('express');
 const server = express();
 const mongoose = require('mongoose');
 const cors = require('cors');
 const journals = require('./routes/journals');
 const port = process.env.PORT || 4000; // default port
 
 // connecting to the database
 server.use(cors({ origin: true, credentials: true }));
 server.use(express.json( { extended: false }));
 server.use('/journals', journals);
 
 /*
 // Authentication
 const users = require('./routes/users');
 server.use('/users', users);
 */
 
 const conn_str = `mongodb+srv://admin:ugahacks9@mood.aaa8smq.mongodb.net/?retryWrites=true&w=majority`;
 mongoose.set('strictQuery', false);
 
 
 
 
 mongoose.connect(conn_str)
   .then(() => {
       server.listen(port);
       console.log("\nMongoDB connection successful...");
     })
     .catch((err) => {
         console.log(`Error in DB connection ${err}`);
     });