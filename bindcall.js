/*functions are also objects and they have certain methods attached to them as 
any other objects like the arrays have*/
var john={
	name:'john',
	age: 26,
	job:'teacher',
	presentation: function(style,timeofday){
		if(style==='formal'){
			console.log('good'+timeofday+',ladies and gentlman'+' i am '
				+this.name+' i am '+this.job+' i am '+this.age+' years old');
		} else if(style==='freindly'){
			console.log('goodmorning '+timeofday+', ladies and gentlman '+' i am '
				+this.name+' i am '+this.job+' i am '+this.age+' years old ');
		}

	}
};
//USING CALL()--WE DO METHOD BORROWING
//second object
var jon={
	name:'pav',
	age: 21,
	job:'engg',
}
var pushkar={
	name:'pushkar',
	age: 21,
	job:'it',
}
//so if want the presentation method to be used by the emily object how is it possible?
//since it does have not have that method attached how will it work?
//so we can use the call method 
//the first argument of the call method is to set the this variable
john.presentation('formal','morning');
//the call varvble enables us to store the first variable which is this variable to jon

john.presentation.call(jon,'formal','morning');



///------------------------APPLY METHOD-----------------------------////
john.presentation.apply(pushkar,['formal','morning']);

//-------------------------Bind method---------------------------////
//the bond method id similar to the call method,the only difference is that
//the bind method do not immediatly call the bind method instead create a copy 
//of the function
//1st method
var bindmethod=john.presentation.bind(pushkar,'formal','morning');
bindmethod();
//second method
var bindmethod=john.presentation.bind(pushkar,'formal');
bindmethod('morning');





////--------------------Example of bind method-----------------//////////
/////passing functions as arguments

var years=[1990,1991,1992,1993,1994];
function arraycalc(arr,fn){
	var arrres=[];
	for(var i=0;i<arr.length;i++){
		arrres.push(fn(arr[i]));
	}
	return arrres;
}
function calculateage(el){
	return 2016-el;
}
function fullage(el){
	return el>=18;
}
//but the above 18 might not be a constant,so sometimes we need to pass that as argument
//so we pass as the second argumnet
//like
function isfullage(limit,el){
	return el>=limit;
}
var ages=arraycalc(years,calculateage);
//but now the isfullage function needs to arguments so we use the bid function
//so we set the limit preset argument
var full=arraycalc(ages,isfullage.bind(this,20));
console.log(ages);
console.log(full);

