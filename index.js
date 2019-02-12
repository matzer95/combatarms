const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log("I'm read to ban!");
});

client.on('message', message => {
	if (message.content === '!carnade') message.reply('https://www.youtube.com/watch?v=0nd11CmDdxE');
});

client.login(token).catch(err => console.log(err));