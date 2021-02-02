const router = require("express").Router();
const redis = require('redis');

router.get("/get_info", (req, res) => {
    const redis_options = {
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT
    }
    uid = req.body.uid;
    var client = redis.createClient(redis_options);

    client.hgetAsync(uid, "name").then(res => {
        console.info('Redis responses for get single: ', res);
        //callback(null, {body:  "This is a READ operation on product ID " + id, ret: res});
        // callback(null, {body: "This is a READ operation on product ID " + id});
        name = res.name;
        silver = res.silver;
        gold = res.gold;
    }).catch(err => {
        console.error("Failed to get single: ", err)
        callback(null, {statusCode: 500, message: "Failed to get data"});
    }).finally(() => {
        //console.info('Disconnect to Redis');
        //client.quit();
    });

    args = req.body
    result = {}
    result.name = name;
    result.silver = silver;
    result.gold = gold;
    
    res.json({ 
        data: result
    });
  
  });

  module.exports = router;