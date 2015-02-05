var servi = rquire('servi');
var app = new servi(true);

port(3002);
serveFiles("public");  
route('indext',show);
route('/Photos',show2);
route('/Music',show3);
function show(request){
	request.respond('This is homework 1');
}
function show2(request){
	request.respond('This is my photos');
	request.serveFile("photos.html");
}
function show3(request){
	 request.serveFile('music.html');

}

start();
