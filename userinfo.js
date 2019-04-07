const Discord = require('discord.js');
const client = new Discord.Client();
const randomcolor = require('randomcolor');
const config = require("./totallynotconfig.json")
const moment = require('moment');
client.on("message", async message => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.content.indexOf(config.prefix) !== 0) return;
  
if(command === "userinfo") {
 var user = message.mentions.users.first();
      var embed = new Discord.RichEmbed();
      if (!user) {
          embed.addField("Username", `${message.author.username}#${message.author.discriminator}`, true)
              .addField("ID", `${message.author.id}`, true)
              .setColor(randomcolor())
              .setFooter(' ', ' ')
              .setThumbnail(`${message.author.avatarURL}`)
              .setTimestamp()
              .setURL(`${message.author.avatarURL}`)
              .addField('Currently', `${message.author.presence.status}`, true)
              .addField('Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
              .addField('Joined Discord', `${moment(message.author.createdAt).format('DD.MM.YY')}`, true)
              .addField('Joined Server', `${moment(message.member.joinedAt).format('DD.MM.YY')}`, true)
              .addField('Roles', `\`${message.member.roles.filter(r => r.name).size - 1}\``, true)
              .addField('Is Bot', `${message.author.bot}`, true)
              message.channel.sendEmbed(
                  embed, {
                      disableEveryone: true
                  })
                } else {
                    embed.addField("Username", `${user.username}#${user.discriminator}`, true)
                        .addField("ID", `${user.id}`, true)
                        .setColor(randomcolor())
                        .setFooter(' ', ' ')
                        .setThumbnail(`${user.avatarURL}`)
                        .setTimestamp()
                        .setURL(`${user.avatarURL}`)
                        .addField('Currently', `${user.presence.status}`, true)
                        .addField('Game', `${user.presence.game === null ? "No Game" : user.presence.game.name}`, true)
                        .addField('Joined Discord', `${moment(user.createdAt).format('DD.MM.YY')}`, true)
                        .addField('Is Bot', `${user.bot}`, true)
                  message.channel.sendEmbed(
                      embed, {
                          disableEveryone: true
                      }
                  );
    }  
}
})
client.login(config.token)
