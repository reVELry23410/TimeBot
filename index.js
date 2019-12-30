//*
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');

});


client.login(token);


function timewrite(){
	var today = new Date();
			var timezone = today.getTimezoneOffset();
			timezone = timezone * -1;
			timezone = timezone / 60;
			if(timezone > 0){
				timezone = "+" + timezone; //without this, the timezone GMT+8 might show up as GMT 8, for example
			}
			
			var hour = today.getHours();
			var minutes = today.getUTCMinutes();
			if(hour < 10){
				hour = "0" + hour; //without this, the time 09:14 might show up as 9:14, for example
			}
			if(minutes <10) {
				minutes = "0" + minutes; //without this, the time 16:09 will show up as 16:9, for example.
			}
			
			
			
			var time1 = hour + ":" + minutes + " GMT " + timezone;
			
			console.log(today.getHours() + "H " + today.getSeconds() + " s " + today.getMinutes() + " M " + today.getUTCMinutes() + " UM " + today.getTimezoneOffset() + " OFFSET ");
			
			return time1;
}



console.log("test");






client.setInterval( () => {
	client.guilds.forEach(guildone =>{
		guildone.members.get('659805444897767453').setNickname(timewrite()); //find the bot's nickname on a server and then set its nickname to the time
	});
}, 5000);
