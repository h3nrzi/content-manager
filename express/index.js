const express = require('express');
const path = require('path');
const fs = require('fs');
// const cors = require('cors');

const app = express();
const PORT = 3001;
// const corsOptions = { origin: 'http://localhost:3000', optionsSuccessStatus: 200 };
const pathToFile = path.resolve('./data.json');
const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

//////////// MIDDLEWARE

// app.use(cors(corsOptions));
app.use(express.json());

//////////// ROUTE HANDLER

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/resources/:id', (req, res) => {
  const resources = getResources();
  const { id } = req.params;
  const resource = resources.find((r) => r.id === id);
  res.send(resource);
});

app.get('/api/resources', (req, res) => {
  const resources = getResources();
  res.send(resources);
});

app.post('/api/resources', (req, res) => {
  const resources = getResources();
  const r = req.body;

  r.createdAt = new Date(Date.now());
  r.status = 'غیرفعال';
  r.id = Date.now().toString();
  resources.push(r);

  fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (err) => {
    if (err) res.status(422).send('نمیتوان دیتا را در دیتابیس ذخیره کرد');
    return res.send('داده ها دریافت شده است');
  });
});

///////////// SERVER

app.listen(PORT, () => console.log('Server is listening on port: ' + PORT));
