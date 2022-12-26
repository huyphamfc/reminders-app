import express from 'express';

const app = express();

app.use('/api/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: `Hello, I'm a server!`,
  });
});

app.listen(8000, () => console.log('Server running on port 8000...'));
