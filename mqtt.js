const mqtt = require("mqtt")

if(!process.env.MQTT_URL){
    throw new Error('MQTT_URL variable is not defined');
}
const client  = mqtt.connect(process.env.MQTT_URL)

client.on('connect', function () {
    console.log('MQTT connected')
})

client.on('error', function (err) {
    console.log('MQTT error', err)
})

module.exports.publish = function(topic, payload, opt){

    return new Promise((resolve, reject)=>{
        client.publish(topic, payload, opt, (err, data)=>{
            if(err){
                return reject(err)
            }
            resolve(data);
        });
    })
    
}