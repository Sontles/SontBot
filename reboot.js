const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");

client.on('ready',() => {
  console.log('Reboot command initilized');
})

 client.on('message', message => {
  if (message.author.id == "260415308169347083") {
    switch(message.content.toLowerCase()) {
        case '.reboot':

           message.channel.send("Bot Owner/Dev Requested Reboot");
            resetBot(message.channel);
            break;
      }
    }
  });

  // Turn bot off (destroy), then turn it back on
  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Reboot Done , Please wait for it to boot again!')
    .then(msg => client.destroy())
    .then(() => client.login(config.token));
  }

  client.login(config.token);