const express = require('express');
const app = express();
const timestampService = require('./timestampMicroservice');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/api/timestamp/:date_string', (req, res) => {

    const timestamp = timestampService.getTimestamp(req.params.date_string);

    res.send(JSON.stringify(timestamp));
    
});

app.listen(3000, () => { console.log('Listening on the port 3000')});