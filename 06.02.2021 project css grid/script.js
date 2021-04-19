// function enterAge(){
// 	var age = Number(prompt("enter your age: "));
// 	if (age < 18){
// 		alert("Sorry, you are too young to drive this car!");
// 	}else if (age === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}else{
// 		alert("Powering on. Enjoy the ride!");
// 	}
// }

// var array = ["Banana","Apples","Oranges","Blueberries"];

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// var facebook = {
// 	users: [
// 		{username:"Temurbek_Xaydarov",password:"2234224tim!"},
// 		{username:"billy_jones",password:"moychechagim4224!"},
// 		{username:"Jony_Kartes",password:"jony4224!"}
// 	],
// 	devolopers:[
// 		{name:"Temurbek",age:20},
// 		{name:"Saidbek",age:21},
// 		{name:"Mark",age:45}
// 	]
// }

// function logIn(){
// 	var username = prompt("Enter your username:");
// 	var password = prompt("enter your password:");
// 	return check(username,password);
// }

// function check(username,password){
// 	if (username === facebook.users[0].username && password === facebook.users[0].password) {
// 		alert(`${username} Welcome to your profile!`);
// 		console.log(facebook.devolopers);
// 	}else{
// 		alert("your password or username is not correct");
// 	}
// }
// logIn();


var users = [
	{username:"Temurbek",password:"222tim"},
	{username:"Sayyora",password:"5454hifa"},
	{username:"nodirbek",password:"4878nod"},
	{username:"jasurbek",password:"tuit45"},
	{username:"guli",password:"sancho"}
];

const logIn = function(){
	var username = prompt("enter your name:");
	var password = prompt("enter your password:");
	return check(username,password);
}
function check(username,password){
	let notChecked = true;
	users.forEach(function(user){
			if (user.username === username && user.password === password){
			alert(`${username} Welcome to your profile!`);
			notChecked = false;
		};
	});
	if (notChecked) {
		return alert('your username  or password is incorrect!');
	}
}


logIn()