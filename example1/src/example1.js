 
{

	let a = 1;
	console.log(a);
}
 
class App{
 
	constructor (x, y = '12.00'){

		console.log('constructor (x, '+ y +')');
	}

	getVersion (){

		console.log('1.0');
	}

	toString (){

		return 'timon app';
	}



}


var app = new App(null, '19.00');
 
 