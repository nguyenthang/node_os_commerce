var express = require('express'),
    app = express();

var port = process.env.PORT || 8000;

app.listen(port, function(){
  console.log("The server is running on port" + port);
});
