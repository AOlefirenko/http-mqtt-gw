*How to run*

Prerequisites:
- nodejs >=10
- run `npm install` in the project directory

```
export MQTT_URL=mqtt://broker.hivemq.com:1883 # mondatory
export PORT=3100 # optional
npm start
```

*How to use*


```
curl -X POST \
  http://localhost:3100/andon/KGON/471X999/rgb \
  -d '"FF0000"'
```
