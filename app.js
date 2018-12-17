const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();

/*const questions = [
	{
		type: "list",
		name: "status",
		message: "Are you hungrymk?:",
		choices: [
			"Yes",
			"No"
		]
	}
]

inquirer.prompt(questions).then((answers) => {
	if (answers.status === "Yes") {
		console.log("Get up and eat!");
	} else {
		console.llog("Get back to work!");
	}
})
.catch((err)  =>{ 
	console.log(err);
});*/