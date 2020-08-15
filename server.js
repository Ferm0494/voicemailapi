const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch')
const {CREDS,headers}= require('./secrets')
const port = process.env.PORT || 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/vmboxes',async(req,res)=>{
    let url = `${CREDS.serverURL}/accounts/${CREDS.accountID}/vmboxes/`
    let response = await fetch(url,{headers});
    let json = await response.json()
    console.log(json.data)
    res.send(json)
})



app.get('/:id/messages', async(req, res) => {
    let vmBoxID= req.params.id
    let url = `${CREDS.serverURL}/accounts/${CREDS.accountID}/vmboxes/${vmBoxID}/messages`

    let response = await fetch(url, {headers})
    let json = await response.json()
    console.log(json)
    res.send(json)
});
app.patch('/:id/messages', async(req, res) => {
    
    let vmBoxID = req.params.id
    let message = req.body.message
    let folder =req.body.folder

    console.log("PATCHING!")
    
    let url = `${CREDS.serverURL}/accounts/${CREDS.accountID}/vmboxes/${vmBoxID}/messages/${message}?folder=${folder}`
   
    let response= await fetch(url,{
        headers: headers,
        method: 'POST',
    })
    let json = await response.json()
    console.log(json)
    res.sendStatus(200)
});

app.listen(port, () => console.log(`Listening on port ${port}`));