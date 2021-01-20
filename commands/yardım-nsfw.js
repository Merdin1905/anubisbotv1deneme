const Discord = require("discord.js");
const db = require("quick.db");
const anubis = require("../ayarlar.json");
exports.run = async (client, message, args) => {
    let prefix = await db.fetch(`prefix.${message.guild.id}`) || anubis.prefix 
    let anubis = new Discord.RichEmbed()
    .setAuthor(`**Nsfw Menüsü**`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/788683867606745095/800659025544478760/anubis.png`)
    .setColor(`#ffd000`)
    .setDescription(`[Bot Davet Linki]() | [Destek Sunucusu](https://discord.gg/4e7RSTyQGH) Komutlar İçin yardım için: \`-yardım\` `)
    .addField(`:white_small_square:| -4k: Rastgele +18 4K Resmi Gönderir. \n :white_small_square:| -anal: Rastgele +18 Anal Resmi Gönderir. \n :white_small_square:| -ass: Rastgele +18 Göt Resmi Gönderir. \n :white_small_square:| -boobs: Rastgele +18 Meme Resmi Gönderir. \n :white_small_square:| -hentai-anal: Rastgele +18 Hentai Anal Resmi Gönderir. \n :white_small_square:| -hentai-ass: Rastgele +18 Hentai Göt Resmi Gönderir. \n :white_small_square:| -hentai: Rastgele +18 Hentai Resmi Gönderir. \n :white_small_square:| -pgif: Rastgele +18 Porno Gifi Gönderir. \n :white_small_square:| -pussy: Rastgele +18 Pussy/Am resmi Gönderir. \n :white_small_square:| -thigh: Rastgele +18 Kalça Resmi Gönderir.`)
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/800659002462961704/ANUBISTHUMB.png`)
    .setFooter(`© 2021 Anubis | Geliştiriciler, Merdin#0001 ve ・K U R U C U adlı kişilerdir. Bu kişilerden başka geliştirici yoktur!`)
message.author.send(anubis)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ['yardım nsfw'],
    permLevel: 0
};
exports.help = {
    name: 'yardım-nsfw'
}
