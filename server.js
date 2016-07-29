var express = require('express'),
    app = express();

var port = process.env.PORT || 8000;

app.set('port', port);

app.listen(port, function(){
  console.log("Server is running on port: " + app.get('port'));
});
