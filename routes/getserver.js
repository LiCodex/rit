const router = require("express").Router();

router.get("/get_server", (req, res) => {
    
    if (req.body.r === null) {
      res.json({
          err: 1,
          msg: "param error",
          arg: req.body
      })
    } else {
      let result = {};
      result.host = process.env.HOST;
      result.port = process.env.PORT;
      result.gameserver = process.env.GAMESERVER;

      res.json({ 
        err: 0, 
        data: result,
        vc: process.env._VERSION
      });
    }
  
  });

  module.exports = router;