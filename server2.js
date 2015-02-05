var servi=require('servi');
var app= new servi(true);
port(4000);
serveFiles("public"); 
route('/myPage/:myPageName',showPageName);
function showPageName(request){
	request.respont("now you are at:"+request.params.myPageName);

}

start();
