//your code
const express = require('express');
const morgan = require('morgan'); // Opsional untuk logging
const app = express();
const PORT = process.env.PORT || 8050;

app.use(express.json);
app.use(morgan('dev'));

const users =[
    {
        id: 1,
        name: 'John Doe'
    }
]

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
    const NewUser = req.body;
    users.push(NewUser);
    res.json(NewUser);
});