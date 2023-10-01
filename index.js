//your code
const express = require('express');
const morgan = require('morgan'); // Opsional untuk logging
const app = express();
const PORT = 8050;

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

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
  
    // Update user dengan ID yang sesuai
    const userIndex = users.findIndex((user) => user.id === userId);
  
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    //Cari yang mau didelete 
    const userIndex = users.findIndex(user => user.id === Number(userId));

    // Kondisi jika ID ada
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(204).send();
    }
    // Kalau ID tidak ada maka 404(not found) 
    else {
      res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });