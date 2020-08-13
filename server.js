const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch')
const {CREDS,headers}= require('./secrets')
const port = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/messages', async(req, res) => {
    // Default VM_BOX_ID 
    let url = `${CREDS.serverURL}/accounts/${CREDS.accountID}/vmboxes/${CREDS.vmBoxId}/messages`
    let response = await fetch(url, {headers})
    let json = await response.json()
    res.send(json)
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));