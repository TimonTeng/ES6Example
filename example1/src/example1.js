 
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

var appA = new App(null, '19.00');


var appB = new class {

	constructor (x, y = '12.00'){

		console.log('constructor (x, '+ y +')');
	}

}(null, '29.00');


class Animal {

	constructor(name){

		this.name = name;

	}

	sleep(){
		console.log(this.name+'睡觉了');
	}

	hungry(){
		console.log(this.name+'饿了');
	}

	run(){
		console.log(this.name+'在跑步');
	}

 }
 
 class Man extends Animal{

 }


 var man = new Man('碧咸');

 man.run();
 man.hungry();
