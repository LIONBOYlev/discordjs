const {Client, Intents} = require('discord.js');
const discord = require('discord.js');
require('dotenv').config();
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES]});
const prefix = process.env.PREFIX;


client.on('ready', ()=>{
    console.log(`${client.user.tag} is online`);
    });

    client.on('messageCreate', message =>{
        if(!message.content.startsWith(prefix) || message.author.bot){
            return
        }
        
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(command === 'ping'){
    message.channel.send('pong!');
}else if(command === 'youtube'){
    message.reply('https://www.youtube.com/channel/UCSGlC_OR0O4-XizseoAUjow');
}
    });

client.login(process.env.DISCORD_TOKEN);