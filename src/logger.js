var dateFormat = require('date-format'),
	colors = require('colors');

var logger=function(req,res,next){
	var time = dateFormat('hh:mm:ss dd/MM/yyyy',new Date());
	var ip = req.connection.remoteAddress;
	console.log('--> %s   %s   %s   %s',time.blue, req.method.green,req.url,ip.slice(7).yellow);
	next();
}

module.exports = logger;