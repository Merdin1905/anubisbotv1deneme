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
    .addField(`:white_small_square:| -adam-asmaca: Adam asmaca oyununu artık Discord'da da oynayın. \n :white_small_square:| -aşkölçer: Sevdiğiniz kişi ile aşkınızı ölçer. \n :white_small_square:| -düello: Bir kullanıcı ile düello atarsınız. \n :white_small_square:| -espri: Espri yapar. \n :white_small_square:| -fbi: FBI, Open the Door! \n :white_small_square:| -kaçcm: ಠ⌣ಠ \n  :white_small_square:| -kelime-yarışı: Kullanıcı ile kelime yarışı yaparsınız. \n :white_small_square:| -kelime-tahmini: Kelime tahmini oyununu oynarsınız. \n :white_small_square:| -kt-liderlik: Kelime tahmini oyununun liderlik tablosunu gösterir. \n :white_small_square:| -meme: Rastgele bir Meme gönderir. (Dikkat; ingilizce olan meme, not turkish.) \n :white_small_square:| -sayı-tahmini: Sayı tahmini oyununu oynarsınız. \n :white_small_square:| -tic-tac-toe: Kapışmalı bir XoX oyunu! \n :white_small_square:| -woodie: Denemedim Dene Ve Gör.`)
    .setImage(`https://cdn.discordapp.com/attachments/788683867606745095/800659002462961704/ANUBISTHUMB.png`)
    .setFooter(`© 2021 Anubis | Geliştiriciler, Merdin#0001 ve ・K U R U C U adlı kişilerdir. Bu kişilerden başka geliştirici yoktur!`)
message.author.send(anubis)
};

exports.conf = {
    enable: true,
    guildOnly: false,
    aliases: ['yardım eğlence'],
    permLevel: 0
};
exports.help = {
    name: 'yardım-eğlence'
}
