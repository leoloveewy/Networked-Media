var servi = rquire('servi');
var app = new servi(true);

port(3002);
serveFiles("public");  
route('/',show);
route('/Photos',show2);
route('/Music',show3);
function show(request){
	request.respond('This is homework 1');
}
function show2(request){
	console.log("This is my photos");
	request.serveFile("photos");
}
function show3(request){
	 request.serveFile('music.html');

}
request.serveFile('index.html');
start();