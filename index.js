const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log("I'm ready to ban!");
});

client.on('message', message => {
	if (message.content === '!sf_carnade') message.reply('https://www.youtube.com/watch?v=0nd11CmDdxE');
	if (message.content === '!docs') message.reply("\n" +
		"GRAY HAMMER: https://docs.google.com/document/d/1txZIn904D2F9ZNe4lWhoGROZX4K85A4OmSIkZfGete0/edit?usp=sharing" + "\n"
		"POWER SURGE: https://docs.google.com/document/d/1iAD8b1Zcaymvqx1eaPLEMDSTn4yLtUDerclUeJ_QrNo/edit?usp=sharing" + "\n"
		"RATTLESNAKE: https://docs.google.com/document/d/1ApP13FWX_YlhjQlXuFnd7nGA73crY337Kt8_Ud00CbA/edit?usp=sharing" + "\n"
		"SHORT FUSE:  https://docs.google.com/document/d/1QL46WkgNSaC6J3vnnVXxm3_RohT70blv-I87Qt8M0Vs/edit?usp=sharing" + "\n"
		"SNOW VALLEY: https://docs.google.com/document/d/1jBo7Rw5eVvdei12IwowTgp6YyK9OhD_XfyCqhclR5Y4/edit?usp=sharing");
	if (message.content === '!gray_outside_a') message.reply('https://www.youtube.com/watch?v=ZkVDDrPZQj0');
});

/*client.on('message', function (user, userID, channelID, message, evt) {
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
});*/

client.login(token).catch(err => console.log(err));