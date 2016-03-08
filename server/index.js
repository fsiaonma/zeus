var http = require('http');
var https = require('https');
var fs = require('fs');

var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

// 设置路由
app.use(require('./router')());

// 创建 http 服务器
app.listen(app.get('port'), function () {
	console.log('[%s] Express server listening on port %d',
	    app.get('env').toUpperCase(), app.get('port'));
});