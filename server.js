const express = require("express");
const app = express();

process.env.PORT = process.env.PORT || 3100;

const mqtt = require('./mqtt')

app.use(express.text());

app.post('/*', function(req, res, next){
    const payload = req.body;
    const topic = req.params[0];

    mqtt.publish(topic, payload, { qos: 1 })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send(err);
    })
});

app.listen(process.env.PORT, 'localhost', () => {
    console.log(`Starting http server on ${process.env.PORT}`);
});


