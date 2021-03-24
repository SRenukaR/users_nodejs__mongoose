const express = require('express');
const app = express();

//addding middleware to parse the response body
app.use(express.json());

//customized routes
const RequestHandler = require('./routes/RequestHandler')

//home page
app.get('/', (req,res)=>{
    res.send(`<p>Welcome to user details please find the below URLs</p><p> /users/allusers : to get all the Users</p><p> /users/addUser : To create the user</p><p> Deleteuser : Delete the user by ID</p>`)
})

app.use('/users',RequestHandler);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));