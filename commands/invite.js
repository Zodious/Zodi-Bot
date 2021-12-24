const { MessageEmbed } = require('discord.js');
const invlink = 'https://discord.com/api/oauth2/authorize?client_id=923839385131180102&permissions=8&scope=bot%20applications.commands'

module.exports = {
    name: 'invite',
    description: "invite the bot",
    execute(message, args, Discord){
        const embed = new MessageEmbed()
        .setTitle(`Here Is My Invite Link ${invlink}`)
        .setColor('AQUA')
        .setImage('https://cdn.discordapp.com/attachments/923839335655149633/923843121824034837/20211220_165458.jpg')
        .setDescription('Invite Bot')
        message.author.send({ embeds: [embed] })
    }
}