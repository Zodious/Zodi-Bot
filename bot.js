const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ["GUILD_MESSAGES", "GUILD_MEMBERS", "GUILDS", "GUILD_INVITES", "GUILD_MESSAGE_REACTIONS"] });
const { prefix, token, invlink, supportsrv } = require('./config.json');
const fs = require('fs');
console.clear(10000);

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log(`Logged In As ${bot.user.tag}`);
    bot.user.setStatus('online');
    bot.user.setActivity(`Zodi System Bot`, {type: "PLAYING"});
});

bot.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'invite'){
        bot.commands.get('invite').execute(message, args, Discord);
    }
});
bot.login(token)