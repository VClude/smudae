
const Discord = require('discord.js');
const bot_config = require('./bot.config.json');
const fs = require('fs');


const conf_token = bot_config.bot_config.conf_token;



const client = new Discord.Client();

//Remove the OR (||) before deploying!
const token = process.env.TOKEN || conf_token;


const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 4, // Amount of messages sent in a row that will cause a warning.
	kickThreshold: 6, // Amount of messages sent in a row that will cause a kick.
	banThreshold: 0, // Amount of messages sent in a row that will cause a ban.
	muteThreshold: 0, // Amount of messages sent in a row that will cause a mute.
	maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
	warnMessage: 'Kalem Bos, sekali lagi ngespam lo w tendang dari pasar {@user}', // Message that will be sent in chat upon warning a user.
	kickMessage: '**{user_tag}** diusir paksa dari lelang waifu', // Message that will be sent in chat upon kicking a user.
	banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
	muteMessage: '**{user_tag}** has been muted for spamming.', // Message that will be sent in chat upon muting a user.
	maxDuplicatesWarning: 0, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 0, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 0, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesMute: 0, // Amount of duplicate messages that trigger a warning.
	// Discord permission flags: https://discord.js.org/#/docs/main/master/class/Permissions?scrollTo=s-FLAGS
	exemptPermissions: [], // Bypass users with any of these permissions(These are not roles so use the flags from link above).
	ignoreBots: true, // Ignore bot messages.
	verbose: true, // Extended Logs from module.
	ignoredUsers: [], // Array of User IDs that get ignored.
	// And many more options... See the documentation.
});

client.on("ready", () => {
    console.log('bot is ready');
     client.user.setActivity("TUKANG JAGAL MUDAE");
 });


client.on('message', (message) =>{
  
    
    if(message.channel.id == '782917925257871370'){
        let a = antiSpam.message(message);

        if(a === true){
            antiSpam.resetData();
        }
    
    }

    

} );



client.login(token);