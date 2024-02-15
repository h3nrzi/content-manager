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

app.get('/api/activeresource', (req, res) => {
  const resources = getResources();
  const activeResource = resources.find((r) => r.status === 'فعال');

  res.send(activeResource);
});

app.get('/api/resources/:id', (req, res) => {
  const resources = getResources();
  const { id } = req.params;
  const resource = resources.find((r) => r.id === id);
  res.send(resource);
});

app.patch('/api/resources/:id', (req, res) => {
  const resources = getResources();
  const { id } = req.params;
  const isActiveResource = resources.find((r) => r.status === 'فعال');
  const index = resources.findIndex((r) => r.id === id);

  if (resources[index].status === 'اتمام')
    return res.status(422).send('منبع را نمیتوان فعال کرد زیرا قبلا فعال شده است');

  resources[index] = req.body;

  // active resource functionality
  if (req.body.status === 'فعال') {
    if (isActiveResource) return res.status(422).send('منبعی قبلا فعال شده است');

    resources[index].status = 'فعال';
    resources[index].activationTime = Date.now();
  }

  fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (err) => {
    if (err) res.status(422).send('منبع موردنظر اپدیت نشد');
    return res.send('منبع موردنظر اپدیت شد');
  });
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
    if (err) res.status(422).send('منبع موردنظر ایجاد نشد');
    return res.send('منبع موردنظر ایجاد شد');
  });
});

///////////// SERVER

app.listen(PORT, () => console.log('Server is listening on port: ' + PORT));
