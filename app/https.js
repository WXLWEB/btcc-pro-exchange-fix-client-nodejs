var https = require('https');
var url = 'https://staging-fwd.btcc.com/';
https.get(url,function(res){
	var html = '';
	res.on('data',function(data){
		html += data
	});
	res.on('end',function(){
		console.log(html);
	})
}).on('error', function(e) {
  console.error(e);
});
