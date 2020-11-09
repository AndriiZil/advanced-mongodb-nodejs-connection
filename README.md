# advanced-mongodb-nodejs-connection

* docker run -d  --name mongoDb  -p 27888:27017 mongo
* keepAlive: true, if your app will run for a long time. It is true by default if you are using mongoose^5.2.0
* autoReconnect: true, if the connection interrupted, mongoose will try to connect instead of throwing error. We will handle this functionallity manually
* reconnectTries: number, defines that how many times should mongoose try to connect
* reconnectInterval: number(miliseconds), defines that how many miliseconds does mongoose need to establish connection in