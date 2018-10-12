const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const dateFormat = require('dateformat');
const convert = require("hh-mm-ss")
const fs = require('fs');
const adminprefix = "+";
const devs = ['402043862480322562', '443696811421466624'];
const moment = require('moment');
const ytdl = require('ytdl-core');
const yt = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
var Canvas = require('canvas')
var jimp = require('jimp')
const config = require("./config.json")
const pretty = require('pretty-ms');
const prefix = "+";
var guilds = {};


client.on('ready',  () => {
    console.log('تم تشغيل :dragon  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });
client.on('ready', async () => {
    console.log('I am ready!');

    client.user.setPresence({ game: { name: '+help-quran | +invite', type: 2 } });
});




client.on("message", message => {
  if (message.content === "+help-quran") {
         message.react("✅")
            message.react("📬")
   const embed = new Discord.RichEmbed() 
       .setColor("#fff")
      .setDescription(`
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╭╮
╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
╱┃┃┃┣━┳━━┳━━┳━━┳━╮┃╰╯╰┳━┻╮╭╯
╱┃┃┃┃╭┫╭╮┃╭╮┃╭╮┃╭╮┫╭━╮┃╭╮┃┃
╭╯╰╯┃┃┃╭╮┃╰╯┃╰╯┃┃┃┃╰━╯┃╰╯┃╰╮
╰━━━┻╯╰╯╰┻━╮┣━━┻╯╰┻━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╱╰━━╯
      
══════════ஜ۩۞۩ஜ════════════  
 **       أوامر القرأن الكريم

+quran
  └─ يشغل قرأن الكريم كاملآ
+quran-stop
  └─ يوقف قرأن الكريم كاملآ
+alkahf 
  └─ يشغل سورة الكهف
+alkahf-stop
  └─ يوقف سورة الكهف
+albaqara
 └─ يشغل سورة البقرة
+albaqara-stop
  └─ يوقف سورة البقرة
+yasin
  └─ يشغل سورة يس
+yasin-stop
  └─ يوقف سورة يس
+alkursi
  └─ يشغل آية الكرسي
+alkursi-stop
  └─ يوقف آية الكرسي**
 
══════════ஜ۩۞۩ஜ════════════ 

**:link: | الموقع الخاص بالبوت :** قريباٌ
🔗 **| دعوة البوت** : https://discordapp.com/oauth2/authorize?client_id=494174202811645952&scope=bot&permissions=2146958583
:exclamation:  **| لدعوة البوت ** : +invite
:exclamation:  **| لأرسال اقتراح لصاحب البوت** : +sug
 `)
 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  
 
    message.author.sendEmbed(embed)
    
    }
    }); 
    client.on('message', message => {
        if (message.content.startsWith('+quran')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+quran-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });

      client.on('message', message => {
        if (message.content.startsWith('+alkahf')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=sOML64y5dfQ', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+alkahf-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });
      
      client.on('message', message => {
        if (message.content.startsWith('+albaqara')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=gIYaTs1Kw90', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+albaqara-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });
      client.on('message', message => {
        if (message.content.startsWith('+yasin')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=KpNqGctH-p0', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+yasin-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });

      client.on('message', message => {
        if (message.content.startsWith('+alkursi')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
          voiceChannel.join()
            .then(connnection => {
              let stream = yt('https://www.youtube.com/watch?v=fcoQCIBMuRg', {audioonly: true});
              const dispatcher = connnection.playStream(stream);
              dispatcher.on('end', () => {
                voiceChannel.leave();
              });
            });
        }
        
        if (message.content.startsWith('+alkursi-stop')) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **');
      
          const voiceChannel = message.member.voiceChannel;
          if (!voiceChannel) {
            return message.reply(`من فضلك ادخل روم صوتي `);
          }
      voiceChannel.leave();
        }
      
      });



const adminprefix = "?";
const devs = ['257111476404224001','431932388684070913'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});
            client.login(process.env.BOT_TOKEN);

  
