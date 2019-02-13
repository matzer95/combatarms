const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log("Beep Boop, I'm ready!");
});

client.on('message', message => {
	// INFO
	if (message.content === '!info') message.channel.send("Try !docs or !'map_name'");
	// ALLE DOCS
	if (message.content === '!docs') message.channel.send(
		"GRAY HAMMER: https://docs.google.com/document/d/1txZIn904D2F9ZNe4lWhoGROZX4K85A4OmSIkZfGete0/edit?usp=sharing" + "\n" +
		"POWER SURGE: https://docs.google.com/document/d/1iAD8b1Zcaymvqx1eaPLEMDSTn4yLtUDerclUeJ_QrNo/edit?usp=sharing" + "\n" +
		"RATTLESNAKE: https://docs.google.com/document/d/1ApP13FWX_YlhjQlXuFnd7nGA73crY337Kt8_Ud00CbA/edit?usp=sharing" + "\n" +
		"SHORT FUSE:  https://docs.google.com/document/d/1QL46WkgNSaC6J3vnnVXxm3_RohT70blv-I87Qt8M0Vs/edit?usp=sharing" + "\n" +
		"SNOW VALLEY: https://docs.google.com/document/d/1jBo7Rw5eVvdei12IwowTgp6YyK9OhD_XfyCqhclR5Y4/edit?usp=sharing"
		);
	// EINZELNE DOCS
	if ((message.content === '!grayhammer') || (message.content === '!gray_hammer')) message.channel.send('https://docs.google.com/document/d/1txZIn904D2F9ZNe4lWhoGROZX4K85A4OmSIkZfGete0/edit?usp=sharing');
	if ((message.content === '!powersurge') || (message.content === '!power_surge')) message.channel.send('https://docs.google.com/document/d/1iAD8b1Zcaymvqx1eaPLEMDSTn4yLtUDerclUeJ_QrNo/edit?usp=sharing');
	if ((message.content === '!rattlesnake') || (message.content === '!rattle')) message.channel.send('https://docs.google.com/document/d/1ApP13FWX_YlhjQlXuFnd7nGA73crY337Kt8_Ud00CbA/edit?usp=sharing');
	if ((message.content === '!shortfuse') || (message.content === '!short_fuse')) message.channel.send('https://docs.google.com/document/d/1QL46WkgNSaC6J3vnnVXxm3_RohT70blv-I87Qt8M0Vs/edit?usp=sharing');
	if ((message.content === '!snowvalley') || (message.content === '!snow_valley')) message.channel.send('https://docs.google.com/document/d/1jBo7Rw5eVvdei12IwowTgp6YyK9OhD_XfyCqhclR5Y4/edit?usp=sharing');
	// EINZELNE NADES
	if (message.content === '!gray_outside_a') message.channel.send('https://www.youtube.com/watch?v=ZkVDDrPZQj0');
	if (message.content === '!sf_bluecar') message.channel.send('https://imgur.com/a/zMdzP');
	if (message.content === '!sf_whitecar') message.channel.send('https://www.youtube.com/watch?v=0nd11CmDdxE');
	// NO NADE VIDS (ONLY SELIM & ICH)
	if (message.member.user.id === '232917351245414400' || '240135407436693505') {
		if (message.content === '!PSST1') message.channel.send('https://www.youtube.com/watch?v=nTl9ufFtwuM');
		if (message.content === '!PSST2') message.channel.send('https://www.youtube.com/watch?v=R2iQ6LrCOzE');
		if (message.content === '!1v5') message.channel.send('https://www.youtube.com/watch?v=nqfAKg14VD0');
		if (message.content === '!mikki') message.channel.send('https://www.youtube.com/watch?v=gGhq_9ubHbI');
		if (message.content === '!melee') message.channel.send('https://www.youtube.com/watch?v=z880r5pHh_Y');
		if (message.content === '!1v4mtp') message.channel.send('https://www.youtube.com/watch?v=dS-bbM_RNgw');
		if (message.content === '!modemtap') message.channel.send('https://www.youtube.com/watch?v=mEK9k_2nH0M');
		if (message.content === '!r4z') message.channel.send('https://www.youtube.com/watch?v=IfghPvgU1Zk');
		};
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