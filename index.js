const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
	console.log("Beep Boop, I'm ready!");
});

var list_of_commands = ["info", "docs", "grayhammer", "powersurge", "rattlesnake", "shortfuse", "snowvalley", "warhead", "slaughterhouse", "piazza", "gray_outside_a", "sf_bluecar", "sf_whitecar", "PSST1", "PSST2", "1v5", "1v4mtp", "mikki", "melee", "modemtap", "r4z", "marcel", "oh"];

client.on('message', message => {
	if (message.content.startsWith("!")) {
		// INFO
		if (message.content === '!info') message.channel.send("Try !docs or !'map_name'");
		// ALLE DOCS
		else if (message.content === '!docs') message.channel.send(
			"GRAY HAMMER: https://docs.google.com/document/d/1txZIn904D2F9ZNe4lWhoGROZX4K85A4OmSIkZfGete0/edit?usp=sharing" + "\n" +
			"POWER SURGE: https://docs.google.com/document/d/1iAD8b1Zcaymvqx1eaPLEMDSTn4yLtUDerclUeJ_QrNo/edit?usp=sharing" + "\n" +
			"RATTLESNAKE: https://docs.google.com/document/d/1ApP13FWX_YlhjQlXuFnd7nGA73crY337Kt8_Ud00CbA/edit?usp=sharing" + "\n" +
			"SHORT FUSE:  https://docs.google.com/document/d/1QL46WkgNSaC6J3vnnVXxm3_RohT70blv-I87Qt8M0Vs/edit?usp=sharing" + "\n" +
			"SNOW VALLEY: https://docs.google.com/document/d/1jBo7Rw5eVvdei12IwowTgp6YyK9OhD_XfyCqhclR5Y4/edit?usp=sharing"
			);
		// EINZELNE DOCS
		else if ((message.content === '!grayhammer') || (message.content === '!gray_hammer')) message.channel.send('https://docs.google.com/document/d/1txZIn904D2F9ZNe4lWhoGROZX4K85A4OmSIkZfGete0/edit?usp=sharing');
		else if ((message.content === '!powersurge') || (message.content === '!power_surge')) message.channel.send('https://docs.google.com/document/d/1iAD8b1Zcaymvqx1eaPLEMDSTn4yLtUDerclUeJ_QrNo/edit?usp=sharing');
		else if ((message.content === '!rattlesnake') || (message.content === '!rattle')) message.channel.send('https://docs.google.com/document/d/1ApP13FWX_YlhjQlXuFnd7nGA73crY337Kt8_Ud00CbA/edit?usp=sharing');
		else if ((message.content === '!shortfuse') || (message.content === '!short_fuse')) message.channel.send('https://docs.google.com/document/d/1QL46WkgNSaC6J3vnnVXxm3_RohT70blv-I87Qt8M0Vs/edit?usp=sharing');
		else if ((message.content === '!snowvalley') || (message.content === '!snow_valley')) message.channel.send('https://docs.google.com/document/d/1jBo7Rw5eVvdei12IwowTgp6YyK9OhD_XfyCqhclR5Y4/edit?usp=sharing');
		else if ((message.content === '!warhead') || (message.content === '!war_head')) message.channel.send('Existiert (noch) nicht.');
		else if ((message.content === '!slaughterhouse') || (message.content === '!slaughter')) message.channel.send('Existiert (noch) nicht.');
		else if (message.content === '!piazza') message.channel.send('Existiert (noch) nicht.');
		// EINZELNE NADES
		else if (message.content === '!gray_outside_a') message.channel.send('https://www.youtube.com/watch?v=ZkVDDrPZQj0');
		else if (message.content === '!sf_bluecar') message.channel.send('https://imgur.com/a/zMdzP');
		else if (message.content === '!sf_whitecar') message.channel.send('https://www.youtube.com/watch?v=0nd11CmDdxE');
		// NO NADE VIDS (FÜR ONLY SELIM & ICH -> if (message.member.user.id === '232917351245414400' || '240135407436693505')) 
		else if (message.content === '!PSST1') message.channel.send('https://www.youtube.com/watch?v=nTl9ufFtwuM');
		else if (message.content === '!PSST2') message.channel.send('https://www.youtube.com/watch?v=R2iQ6LrCOzE');
		else if (message.content === '!1v5') message.channel.send('https://www.youtube.com/watch?v=nqfAKg14VD0');
		else if (message.content === '!mikki') message.channel.send('https://www.youtube.com/watch?v=gGhq_9ubHbI');
		else if (message.content === '!melee') message.channel.send('https://www.youtube.com/watch?v=z880r5pHh_Y');
		else if (message.content === '!1v4mtp') message.channel.send('https://www.youtube.com/watch?v=dS-bbM_RNgw');
		else if (message.content === '!modemtap') message.channel.send('https://www.youtube.com/watch?v=mEK9k_2nH0M');
		else if (message.content === '!r4z') message.channel.send('https://www.youtube.com/watch?v=IfghPvgU1Zk');
		else if (message.content === '!marcel') message.channel.send('https://www.youtube.com/watch?v=RFWbO4hvsvA');
		else if (message.content === '!oh') message.channel.send('https://www.youtube.com/watch?v=2KZuZknEI4c');
		// LIST
		else if (message.content === '!list') message.channel.send(list_of_commands);
		// ROLE ASSIGN
		else if (message.content === '!assign') message.channel.send(message.member.guild.id);
		// NOT EXIST COMMAND
		else message.channel.send('This command does not exist.');
	} else if (message.member.user.id !== '544956570539393024') message.delete(1);
});

client.login(token).catch(err => console.log(err));