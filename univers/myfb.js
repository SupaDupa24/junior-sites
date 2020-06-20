var database = [
	{
		username:"BIGsupa",
		password:"PASSsupa"
	},
	{
		username:"scotty2hotty",
		password:"123"
	},
	{
		username:"michaelscott",
		password:"777"
	},
	{
		username:"michaelgene",
		password:"444"
	}
];


var newsfeed = [
		{
			username:"scotty2hotty",
			timeline:"wrestling wrestling wrestling wrestling wrestling wrestling "
		},
		{
			username:"cloverfield",
			timeline:"movies movies movies movies movies movies movies movies movies "
		},
		{
			username:"michaelscott",
			timeline:"music music music music music music "
		},
		{
			username:"michaelgene",
			timeline:"trucks trucks trucks trucks trucks trucks trucks "
		}
];


var usernamePrompt = prompt("What\'s your username?")
var passwordPrompt = prompt("What\'s your password?")


function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
	if(database[i].username === user &&
		database[i].password === pass) {
		return true;
	} 
	return false;
}

function signIn(username, password) {
	if (isUserValid(username,password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and  password")
	}

// 	for (var i = 0; i < database.length; i++) {
// 	if(database[i].username === user &&
// 		database[i].password === pass) {
// 		console.log(newsfeed);
// 	} else {
// 		alert("Sorry, wrong username and  password")
// 	}
// }

signIn(usernamePrompt, passwordPrompt)

// 	if (user === database[0].username && 
// 		pass === database[0].password) {
// 		console.log(newsfeed);
// 	} else {
// 		alert("Sorry, wrong username and password")
// 	}
// }
