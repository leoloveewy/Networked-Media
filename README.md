
// Version 1: Defining Static Routes
// every servi application must have these 2 lines

	var servi = rquire('servi');
	var app = new servi(true);

// set the port to 3002

	port(3002);

//direct the file to the folder pulic

	serveFiles("public"); 

// define route with show funtion

	route('indext',show);

// define route with show2 funtion

	route('/Photos',show2);

// define route with show3 funtion

	route('/Music',show3);

// every servi application must have these 2 lines

	function show(request){

// serve a simple string

	request.respond('This is homework 1');

//use respond method to send back home page 

	request.serveFile('index.html');
}

function show2(request){

// serve a simple string

	request.respond('This is my photos');

//use respond method to send back photo page 

	request.serveFile('photos.html');
}

function show3(request){

// use respond method to send back music page 

	 request.serveFile('music.html');

}

 //start the server!
 
start();

---------------------------------------------------------------------------------------------------------------------

Version 2: Define one or more dynamic routes

// every servi application must have these 2 lines

	var servi=require('servi');
	var app= new servi(true);

// Set the port number to 4000

	port(4000);

//direct to publick folder

	serveFiles("public"); 

//use variable in a route

	route('/myPage/:myPageName',showPageName);

// This is the function that corresponds to the route '/myPage/:myPageName' from above

	function showPageName(request){
	
// Access the value of the variable ":myPageName" with the syntax 'request.params.myPageName'

	request.respont("now you are at:"+request.params.myPageName);

}

// start the server!

	start();
