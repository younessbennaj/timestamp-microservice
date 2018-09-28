const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/api/timestamp/:date_string', (req, res) => {

    const timestampService = require('./timestampMicroservice');

    const timestamp = timestampService.getTimestamp(req.params.date_string);

    res.send(JSON.stringify(timestamp));
    
});

app.listen(3000, () => { console.log('Listening on the port 3000')});