const Discord = require('discord.js');
const db = require('quick.db');
const anubis = require('../ayarlar.json')
exports.run = async (client, message, args) => { 
    let prefix = await db.fetch(`prefix.${message.guild.id}`) || anubis.prefix 
    let anubis = new Discord.RichEmbed()
    .setAuthor(`Test Kod`)
    .setColor(`RANDOM`)
    .setDescription(`Test Kod Anubis`)
    .addField(`Deneme`)
    .serImage(`https://cdn.discordapp.com/attachments/788683867606745095/800659002462961704/ANUBISTHUMB.png`)
message.author.send(anubis)
};
exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ['testkod'],
    permLevel: 0
};
exports.help = {
    name: 'testkod'
};
