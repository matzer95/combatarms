const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log("I'm read to ban!");
});

client.on('message', message => {
	if (message.content === '!sf_carnade') message.reply('https://www.youtube.com/watch?v=0nd11CmDdxE');
	if (message.content === '!docs') message.reply('http://pastebin.com/AGjHZKmj');
	if (message.content === '!gray_outside_a') message.reply('https://www.youtube.com/watch?v=ZkVDDrPZQj0');
});

client.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'hund':
                bot.sendMessage({
                    to: channelID,
                    message: 'ne du'
                });
            break;
         }
     }
});

client.login(token).catch(err => console.log(err));