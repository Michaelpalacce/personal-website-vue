const fs = require('fs');
const path = require('path');

module.exports = [
	{
		title: 'Dealing with orphaned pods',
		date: '22/12/2021',
		content: fs.readFileSync(path.join(__dirname, './blogs/12.2021/orphaned_pods.html'))
	},
	{
		title: 'My Homelab',
		date: '20/11/2021',
		content: fs.readFileSync(path.join(__dirname, './blogs/11.2021/my_homelab.html'))
	},
	{
		title: 'EventRequest a All-you-need, Zero-Dependency, Fast, Web Framework',
		date: '28/6/2021',
		content: fs.readFileSync(path.join(__dirname, './blogs/06.2021/event_request_intro.html'))
	},
	// {
	// 	title: "Transitioning to the Terminal",
	// 	date: "28/1/2024",
	// 	content: fs.readFileSync(path.join(__dirname, './blogs/01.2024/transitioning_to_the_terminal.html'))
	// }
];
