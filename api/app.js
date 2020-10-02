const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { List, Task } = require('./db/models');

// Load middleware
app.use(bodyParser.json());

/* ROUTE HANDLERS*/




/* LIST HANDLERS*/

/* 
** GET /lists
** Purpose: Get all lists
*/
app.get('/lists', (req, res) => {
    // We want ot return an array of all the lists in the database
    List.find({}).then((lists) => {
        res.send(lists);
    })
})

/* POST /lists
** Purpose: Create a list
*/
app.post('/lists', (req, res) => {
    // We want to create a new list and return the new list document back to the user (which includes the id)
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        // the full list document is returned (incl. id)
        res.send(listDoc);
    })
});

/* PATH /lists/:id
** Purpose: Update a specified list
*/
app.delete('/lists/:id', (req, res) => {
    // We want to delete the specified list
});






/* PATH /lists/:id
** Purpose: Update a specified list
*/
app.patch('/lists/:id', (req, res) => {
    // We want to update the specified list (list docuemnt with id in the URL) with the new values specified in the JSON body of the request
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
