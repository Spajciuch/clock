var Discord = require('discord.js')
var client = new Discord.Client()

client.on("ready", () => {
	var moment = require('moment')
	console.log(`[${client.user.tag}]Zalogowano`)
	setInterval(function(){
		var hr = new Date().getHours() +2
		if(hr == 25) hr = 1
		client.channels.get("474594757243306015").edit({name: `Data: ${moment.utc(new Date()).format('DD.MM.YYYY')}`})
  		client.channels.get("474594634371301406").edit({name: `Czas: ${hr}:${moment.utc(new Date()).format('mm:ss')}`})
	},1000)
})

client.login(process.env.TOKEN)