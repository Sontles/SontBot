const discord = require('discord.js');
const config = require("./config.json")
const client = new discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") {
      message.channel.startTyping();
      setTimeout(() => {
        message.reply("Oi! This isn't the place to use me in! I won't give you the car keys back if you don't use me in a server!!!").catch(console.error);
        message.channel.stopTyping();
        
      });  
    
  }
    });

    client.login(config.token);
    