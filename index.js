const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const http = require('http');
const config = require('./totallynotconfig.json')
const yt = require('ytdl-core');
const userinfo = require('./userinfo.js');
const reboot = require('./reboot.js')
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
      });
     app.listen(process.env.PORT);
      setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);

// Join
client.on("guildMemberAdd", (member) =>  {
  if(member.user.username.includes("discord.gg")) {
    member.kick()
  }else{
  member.guild.channels.find("name", "general").send(`${member.user}, Welcome, please read #rules`); 
  console.log(`${member.user} Joined`);
  }
});


// Leave
  client.on("guildMemberRemove", (member) => {
    const membertag = member.user.tag
    member.guild.channels.find("name", "general").send(`${membertag} oi. the fucker left.`);
    console.log(`${member.user} left `);
  });

client.on("message", (message) => {
    var SONTAPI = message.content.toUpperCase();
if(message.content.startsWith('BTTF') || message.content.startsWith('BTTF')) {
    message.channel.send('When this baby hits 88 miles per hour, youre gonna see some serious shit')
    message.channel.send('https://imgur.com/gallery/sTJXyaB')
 }
    if(SONTAPI == "i dont like yugos") {
    message.channel.send(`Well fuck you then`)
    }
    
        if(SONTAPI == "fbi") {
        message.channel.send(`https://twitter.com/WindyC0ck/status/1031790769345052672`)
        }
if(SONTAPI == "+mainavatar"){
client.user.setAvatar("./pics/normal.jpg")
   message.channel.sendEmbed({ color: 3447003,
  description: "Changed to my main profile picture" });
 };
    if(SONTAPI == "yeet") {
        message.channel.sendFile ("https://cdn.discordapp.com/attachments/463351454590042115/482238072113856522/Yeet_Sound_Effect.mp3", "yeet.mp3")
        }
})

client.login(config.token)

 client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setStatus('Online')
    client.user.setActivity('a game in which sont is actually working on me')
});

client.on("message", (message) => {
var SONTAPI = message.content.toLowerCase();
if(SONTAPI == "this is so sad, sont, dont play anything") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://youtu.be/kJQP7kiw5Fk", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });

  }

if(SONTAPI == "Hans, get ze flammenwerfer") {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Du bist nicht im Sprach-Kanal, mein Kamerad`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://youtu.be/e5tEoIrXK6o", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
    }
    if(SONTAPI == "Hans, get ze flammenwerfer") {
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) {
          return message.reply(`Du bist nicht im Sprach-Kanal, mein Kamerad`);
        }
        voiceChannel.join()
          .then(connnection => {
            let stream = yt("https://youtu.be/e5tEoIrXK6o", {audioonly: true});
            const dispatcher = connnection.playStream(stream);
            dispatcher.on('end', () => {
              voiceChannel.leave();
            });
          });
        }  
 
}) 


