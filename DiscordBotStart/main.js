// If anything does not work, make sure you read the readme.md on the Github Site here: https://github.com/ThunderGamesHK/Basic-Discord.js-Bot-Start
// Contact me here: https://discord.gg/2gRr4ur

const Discord = require('discord.js'); // Gets the discord.js folder so the bot can function
const bot = new Discord.Client(); // Defining Bot
bot.login(config.token); // Logining in using the token found in the config, WARNING do not share the token with anyone, unless its someone you trust, giving the token out anyone can have control of your bot
bot.on('ready', () => { // What to do when the bot turns on
    console.log('Autistic Bot Ready '); // Logs in console
    bot.user.setActivity("") // Sets what game the bot is playing
    bot.user.setUsername("") // Set the name of the bot
    

});


bot.on('message', (message) =>{ // Defines what a command and message is

const mentionedUser = message.mentions.users.first();
const mentionedMember = message.mentions.members.first();
const mentionedRole = message.mentions.roles.first();
const mentionedChannel = message.mentions.channels.first();
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "test"){ // This is an example of a command

}

});
