const Discord = require("discord.js");
const db = require("quick.db");
const anubis = require("../ayarlar.json");

exports.run = async (client, message, args) => {
    let prefix = await db.fetch(`prefix.${message.guild.id}`) || anubis.prefix 
    let anubis = new Discord.RichEmbed()
    .setAuthor(`**Yardım Menüsü**`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/788683867606745095/800659025544478760/anubis.png`)
    .setColor(`#ffd000`)
    .setDescription(`[Bot Davet Linki]() | [Destek Sunucusu](https://discord.gg/4e7RSTyQGH) Komutlar İçin yardım için: \`-yardım\` `)
    .addField(`**• Komutlar**`)
    .addField(`[-yardım eğlence](https://discord.gg/4e7RSTyQGH) = Eğlence Menüsü \n [-yardım genel](https://discord.gg/4e7RSTyQGH) = Genel Menüsü \n [-yardım oyun](https://discord.gg/4e7RSTyQGH) = Oyun Menüsü \n [-yardım resim](https://discord.gg/4e7RSTyQGH) = Resim Menüsü \n [-yardım ayar](https://discord.gg/4e7RSTyQGH) = Ayar Menüsü \n [-yardım avatar](https://discord.gg/4e7RSTyQGH) = Avatar Menüsü \n [-yardım ekonomi](https://discord.gg/4e7RSTyQGH) = Ekonomi Menüsü \n [-yardım moderasyon](https://discord.gg/4e7RSTyQGH) = Moderasyon Menüsü \n [-yardım sunucu](https://discord.gg/4e7RSTyQGH) = Sunucu Menüsü \n [-yardım yapımcı](https://discord.gg/4e7RSTyQGH) = Yapımcı Menüsü \n [-yardım müzik](https://discord.gg/4e7RSTyQGH) = Müzik Menüsü \n [-yardım nsfw](https://discord.gg/4e7RSTyQGH) = Nsfw Menüsü`)
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/800659002462961704/ANUBISTHUMB.png`)
    .setFooter(`© 2021 Anubis | Geliştiriciler, Merdin#0001 ve ・K U R U C U adlı kişilerdir. Bu kişilerden başka geliştirici yoktur!`)
message.author.send(anubis)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};
exports.help = {
    name: 'yardım'
}
